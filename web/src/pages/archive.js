import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import FeatureProductPreviewGrid from '../components/feature-product-preview-grid'

import {titleGrid} from '../components/feature-product-preview.module.css'
import {responsiveTitleMain} from '../components/typography.module.css'

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
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

const ArchivePage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const featureNodes = data && data.feature && mapEdgesToNodes(data.feature)

  return (
    <Layout>
      <SEO title='' />
      <Container>
        <div className={titleGrid}>
          <h1 className={responsiveTitleMain}>Regina’s <br />High-End <br />Audio Store</h1>
          {featureNodes && featureNodes.length > 0 && <FeatureProductPreviewGrid nodes={featureNodes} />}
        </div>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default ArchivePage
