/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

import canny from '../../scripts/canny';
import clsx from 'clsx';
import styles from './styles.module.css';

const BOARD_TOKEN = '054e0e53-d951-b14c-7e74-9eb8f9ed2f91';

function Feedback() {
  useEffect(() => {
    canny();
    window.Canny &&
      window.Canny('render', {
        boardToken: BOARD_TOKEN,
        basePath: '/feedback',
      });
  }, []);

  return (
    <Layout
      permalink="/feedback"
      title="Feedback"
      description="Docusaurus 2 Feedback page">
      <main
        className={clsx(
          'container',
          'margin-vert--xl',
          styles.feedbackBackground,
        )}
        data-canny
      />
    </Layout>
  );
}

export default Feedback;
