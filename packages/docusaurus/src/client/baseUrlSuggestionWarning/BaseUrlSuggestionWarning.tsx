/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {useLocation} from 'react-router-dom';

import siteConfig from '@generated/docusaurus.config';
import Head from '../exports/Head';

import styles from './styles.module.css';

// We want to help the users with a bad baseUrl configuration (very common error)
// Help message is inlined, and hides if the external CSS is able to load successfully
// Note: it might create false positives (ie network failures): not a big deal
// Note: we only inline this for the homepage to avoid polluting all the site's pages
// See https://github.com/facebook/docusaurus/pull/3621
export default function BaseUrlSuggestionWarning() {
  const {baseUrl} = siteConfig;
  const {pathname} = useLocation();
  const isHomePage = pathname === baseUrl; // returns true for the homepage during SRR

  const BaseUrlSuggestionContainerId = 'base-url-suggestion-container';

  if (isHomePage) {
    return (
      <>
        <Head>
          <script type="text/javascript">
            {`
document.addEventListener('DOMContentLoaded', function () {
  var baseUrlSuggestion = document.getElementById(
    '${BaseUrlSuggestionContainerId}',
  );
  if (baseUrlSuggestion) {
    var actualHomePagePath = window.location.pathname;
    var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'
        ? actualHomePagePath
        : actualHomePagePath + '/';
    baseUrlSuggestion.innerHTML = suggestedBaseUrl;
  }
});
`}
          </script>
        </Head>
        <div
          className={styles.baseUrlSuggestionWarning}
          style={{
            border: 'solid red thick',
            backgroundColor: '#ffe6b3',
            margin: 20,
            padding: 20,
            fontSize: 20,
          }}>
          <span>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Your Docusaurus site did not load properly.
            </p>
            <p>
              A very common reason is a wrong site{' '}
              <a
                href="https://v2.docusaurus.io/docs/docusaurus.config.js/#baseurl"
                style={{fontWeight: 'bold'}}>
                baseUrl configuration
              </a>
              .
            </p>
            <p>
              Current configured baseUrl ={' '}
              <span style={{fontWeight: 'bold', color: 'red'}}>{baseUrl}</span>{' '}
              {baseUrl === '/' ? ' (default value)' : ''}
            </p>
            <p>
              We suggest trying baseUrl ={' '}
              <span
                style={{fontWeight: 'bold', color: 'green'}}
                id={BaseUrlSuggestionContainerId}
              />{' '}
            </p>
          </span>
        </div>
      </>
    );
  }
  return null;
}
