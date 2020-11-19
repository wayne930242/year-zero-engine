/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import BlogPostItem from '@theme/BlogPostItem';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/BlogTagsPostsPage';

function pluralize(count, word) {
  return count > 1 ? `${word}s` : word;
}

function BlogTagsPostPage(props: Props): JSX.Element {
  const {metadata, items} = props;
  const {allTagsPath, name, count} = metadata;

  return (
    <Layout
      title={`Posts tagged "${name}"`}
      description={`Blog | Tagged "${name}"`}>
      <div className="container-fluid my-4">
        <header className="text-center">
          <h1>
            {count} {pluralize(count, 'post')} tagged with &quot;{name}
            &quot;
          </h1>
          <Link href={allTagsPath}>View All Tags</Link>
        </header>

        <div className="my-4">
          {items.map(({content: BlogPostContent}) => (
            <div
              key={BlogPostContent.metadata.permalink}
              className="col col-xl-4 offset-xl-4 col-xs-6 mb-5">
              <BlogPostItem
                key={BlogPostContent.metadata.permalink}
                frontMatter={BlogPostContent.frontMatter}
                metadata={BlogPostContent.metadata}
                truncated>
                <BlogPostContent />
              </BlogPostItem>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default BlogTagsPostPage;
