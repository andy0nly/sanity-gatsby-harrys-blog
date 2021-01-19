import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'

import styles from './blog-post.module.css'


function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props


  return (
    <article className={styles.root}>
   
      <Container>
      <div className={styles.spacer} />
        <div className={styles.grid}>
          <div className={styles.mainContent}>
          {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(648)
              .height(Math.floor((9 / 16) * 648))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
          </div>
          <aside className={styles.inList}>



<a href="../../../2017/11/read-this-your-records-will-be-happy-you-did/">Read this - Your records will be happy you did!</a>

<a href="../../../2018/11/a-heartfelt-thank-you/">A Heartfelt Thank You</a>

<a href="../../../2021/01/beosound-balance/">Beosound Balance</a>

<a href="../../../2020/12/hip-hot-and-happening/">Hip, hot and happening</a>

<a href="../../../2019/05/headphones-headphones-headphones/">Headphones headphones headphones!</a>

            {/* {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
