/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ReactNode, useEffect, useRef} from 'react';

import {NavLink, Link as RRLink} from 'react-router-dom';
import isInternalUrl from './isInternalUrl';
import ExecutionEnvironment from './ExecutionEnvironment';
import {useLinksCollector} from '../LinksCollector';
import {useBaseUrlUtils} from './useBaseUrl';

declare global {
  interface Window {
    docusaurus: any;
  }
}

interface Props {
  readonly isNavLink?: boolean;
  readonly to?: string;
  readonly href?: string;
  readonly activeClassName?: string;
  readonly children?: ReactNode;
  readonly isActive?: () => boolean;

  // escape hatch in case broken links check is annoying for a specific link
  readonly 'data-noBrokenLinkCheck'?: boolean;
}

// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
const shouldAddBaseUrlAutomatically = (to: string) => to.startsWith('/');

function Link({
  isNavLink,
  to,
  href,
  activeClassName,
  isActive,
  'data-noBrokenLinkCheck': noBrokenLinkCheck,
  ...props
}: Props): JSX.Element {
  const {withBaseUrl} = useBaseUrlUtils();
  const linksCollector = useLinksCollector();

  // IMPORTANT: using to or href should not change anything
  // For example, MDX links will ALWAYS give us the href props
  // Using one prop or the other should not be used to distinguish
  // internal links (/docs/myDoc) from external links (https://github.com)
  const targetLinkUnprefixed = to || href;

  function maybeAddBaseUrl(str: string) {
    return shouldAddBaseUrlAutomatically(str) ? withBaseUrl(str) : str;
  }

  const isInternal = isInternalUrl(targetLinkUnprefixed);

  // pathname:// is a special "protocol" we use to tell Docusaurus link
  // that a link is not "internal" and that we shouldn't use history.push()
  // this is not ideal but a good enough escape hatch for now
  // see https://github.com/facebook/docusaurus/issues/3309
  // note: we want baseUrl to be appended (see issue for details)
  // TODO read routes and automatically detect internal/external links?
  const targetLinkWithoutPathnameProtocol = targetLinkUnprefixed?.replace(
    'pathname://',
    '',
  );

  // TODO we should use ReactRouter basename feature instead!
  // Automatically apply base url in links that start with /
  const targetLink =
    typeof targetLinkWithoutPathnameProtocol !== 'undefined'
      ? maybeAddBaseUrl(targetLinkWithoutPathnameProtocol)
      : undefined;

  const preloaded = useRef(false);
  const LinkComponent = isNavLink ? NavLink : RRLink;

  const IOSupported = ExecutionEnvironment.canUseIntersectionObserver;

  let io;
  const handleIntersection = (el, cb) => {
    io = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (el === entry.target) {
          // If element is in viewport, stop listening/observing and run callback.
          // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(el);
            io.disconnect();
            cb();
          }
        }
      });
    });

    // Add element to the observer.
    io.observe(el);
  };

  const handleRef = (ref) => {
    if (IOSupported && ref && isInternal) {
      // If IO supported and element reference found, setup Observer functionality.
      handleIntersection(ref, () => {
        window.docusaurus.prefetch(targetLink);
      });
    }
  };

  const onMouseEnter = () => {
    if (!preloaded.current) {
      window.docusaurus.preload(targetLink);
      preloaded.current = true;
    }
  };

  useEffect(() => {
    // If IO is not supported. We prefetch by default (only once).
    if (!IOSupported && isInternal) {
      window.docusaurus.prefetch(targetLink);
    }

    // When unmounting, stop intersection observer from watching.
    return () => {
      if (IOSupported && io) {
        io.disconnect();
      }
    };
  }, [targetLink, IOSupported, isInternal]);

  const isAnchorLink = targetLink?.startsWith('#') ?? false;
  const isRegularHtmlLink = !targetLink || !isInternal || isAnchorLink;

  if (targetLink && isInternal && !isAnchorLink && !noBrokenLinkCheck) {
    linksCollector.collectLink(targetLink);
  }

  return isRegularHtmlLink ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={targetLink}
      {...(targetLinkUnprefixed &&
        !isInternal && {target: '_blank', rel: 'noopener noreferrer'})}
      {...props}
    />
  ) : (
    <LinkComponent
      {...props}
      onMouseEnter={onMouseEnter}
      innerRef={handleRef}
      to={targetLink || ''}
      // avoid "React does not recognize the `activeClassName` prop on a DOM element"
      {...(isNavLink && {isActive, activeClassName})}
    />
  );
}

export default Link;
