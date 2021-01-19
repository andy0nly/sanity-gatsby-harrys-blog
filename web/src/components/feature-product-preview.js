import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import arrowIcon from './icon/arrow.svg'

import styles from './feature-product-preview.module.css'
import {articletitle} from './typography.module.css'
import beolit from '../static/beolit20.jpg'


function FeatureProductPreview (props) {

  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
     
        
 
      <div className={styles.text}>
        <h3 className='{styles.articletitle}'>{props.title}</h3>

        {props._rawExcerpt && ( 
          
          <div className={styles.excerpt}>

            <PortableText blocks={props._rawExcerpt} />
            
          </div>
        )}
        {/* <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div> */}
      </div>
    </Link>
  )


}

export default FeatureProductPreview
