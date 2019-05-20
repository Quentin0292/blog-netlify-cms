import React from "react"
import { Link, graphql } from "gatsby"
import get from 'lodash/get'
import Layout from '../components/Layout'
import { rhythm } from "../utils/typography";
import '../utils/global.css'

class IndexPage extends React.Component {
  render(){
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const description = get(this, 'props.data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allStrapiArticle.edges' );
    return (
      <Layout location={this.props.location} title={siteTitle} description={description}>
        <main>
          <ul>
            {posts.map(document => {
              return (
                <article
                  style={{
                    listStyle: 'none',
                  }}
                  key={document.node.id}>
                  <h3
                    style={{
                      fontFamily: 'Work Sans, sans-serif',
                      fontSize: rhythm(1),
                      marginBottom: rhythm(1/4),
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: 'none',
                        boxShadow: 'none',
                        color: 'var(--textLink)',
                      }}
                      to={`/${document.node.id}`}>{document.node.title}</Link>
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Quattrocento Sans, sans-serif',
                    }}
                  >{document.node.excerpt}</p>
                </article>
              )
            })}
          </ul>
        </main>
      </Layout>
    )
  }
}


export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          excerpt
        }
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
