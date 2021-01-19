import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import styles from '../components/feature-product-preview.module.css'
import {responsiveTitleMain} from '../components/typography.module.css'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import FeatureProductPreviewGrid from '../components/feature-product-preview-grid'
import beolit from '../static/beolit20.jpg'
import arrowIcon from '../components/icon/arrowdark.svg'




export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }


  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`


const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const featureNodes = data && data.feature && mapEdgesToNodes(data.feature)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <div className={styles.titleGrid}>
          <h1 className={responsiveTitleMain}>Regina’s <br />High-End <br />Audio Store</h1> 
         <div className={styles.featureBox}>
         <div className={styles.productImgOuter}>
         <img src={beolit} className={styles.productImg}/>
         </div>
         <div className={styles.articletitle}>
          <p>Feature Product:</p>
           </div>
           <p>Bang & Olufsen Beolit 20 </p>
         </div>
          </div>
      
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>

    </Layout>
  )
}

export default IndexPage
