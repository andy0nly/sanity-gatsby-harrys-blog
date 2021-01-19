import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import BlogPostPreviewTopRow from './blog-post-preview-top-row'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.articletitle}>{props.title}</h2>}

      <ul className={styles.toprowgrid}>

        <li className={styles.itemone}>
          <BlogPostPreviewTopRow {...props.nodes[5]} />
        </li>
        <li className={styles.itemtwo}>
          <BlogPostPreviewTopRow {...props.nodes[4]} />
        </li>

      </ul>

      <ul className={styles.grid}>
      <li>
          <BlogPostPreview {...props.nodes[0]} />
        </li>
        <li>
          <BlogPostPreview {...props.nodes[1]} />
        </li>
        <li>
          <BlogPostPreview {...props.nodes[2]} />
        </li>
        {/* {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />

            </li>
          ))} */}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          {/* <Link to={props.browseMoreHref}>Browse more</Link> */}
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
