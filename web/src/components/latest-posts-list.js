import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import PortableText from './portableText'
import arrowIcon from './icon/arrow.svg'

import styles from './blog-post-preview.module.css'
import {articletitle} from './typography.module.css'


function LatestPostsList (props) {

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

export default LatestPostsList
