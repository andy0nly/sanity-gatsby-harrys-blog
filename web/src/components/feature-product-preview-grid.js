import {Link} from 'gatsby'
import React from 'react'
import FeatureProductPreview from './feature-product-preview'

import styles from './blog-post-preview-grid.module.css'

function FeatureProductPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.articletitle}>{props.title}</h2>}

      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <FeatureProductPreview {...node} />

            </li>
          ))}
      </ul>

    </div>
  )
}

FeatureProductPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default FeatureProductPreviewGrid
