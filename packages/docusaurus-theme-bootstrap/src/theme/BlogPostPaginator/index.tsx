/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/BlogPostPaginator';

function BlogPostPaginator(props: Props): JSX.Element {
  const {nextItem, prevItem} = props;

  return (
    <nav aria-label="Blog post page navigation" className="my-5">
      <ul className="pagination justify-content-between">
        <li className="pagination__item">
          {prevItem && (
            <Link className="page-link" to={prevItem.permalink}>
              &laquo; {prevItem.title}
            </Link>
          )}
        </li>
        <li className="pagination__item">
          {nextItem && (
            <Link className="page-link" to={nextItem.permalink}>
              {nextItem.title} &raquo;
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default BlogPostPaginator;
