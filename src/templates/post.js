import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'


class Post extends Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const articleTitle = get(this, 'props.data.markdownRemark.frontmatter.title');
    const __html = get(this, 'props.data.markdownRemark.html');
    const articleDate = get(this, 'props.data.markdownRemark.frontmatter.date')
    const timeToRead = get(this, 'props.data.markdownRemark.timeToRead')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div
          style={{
            fontFamily: 'Quattrocento Sans, sans-serif'
          }}
        >
          <h1 style={{color: 'var(--textTitle)'}}>{articleTitle}</h1>
          <p
            style={{
              ...scale(-1/5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-4/5)
            }}
          >{articleDate} • {timeToRead} coffee</p>
          <div
            style={{fontWeight: 400, lineHeight: 1.75}}
            dangerouslySetInnerHTML={{ __html }} />
        </div>

      </Layout>
    )
  }
}

export default Post

export const query = graphql`
  query PostTemplate($slug: String!){
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
