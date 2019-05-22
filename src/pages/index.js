import React from "react"
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { rhythm } from "../utils/typography";
import '../utils/global.css'
import Layout from '../components/Layout';
import Bio from '../components/Bio';



class IndexPage extends React.Component {
  render(){
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <aside>
          <Bio />
        </aside>
          <ul>
          {
            posts.map(document => {
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
                    ><Link
                      style={{
                        textDecoration: 'none',
                        boxShadow: 'none',
                        color: 'var(--textLink)',
                      }}
                      to={`/${document.node.frontmatter.slug}`}>{document.node.frontmatter.title}</Link></h3>
                    <p
                    style={{
                      fontFamily: 'Quattrocento Sans, sans-serif'
                    }}>{document.node.excerpt}</p>
                    <hr/>
                  </article>
                )
              })
            }
          </ul>
    </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date],
    order: DESC }) {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
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
