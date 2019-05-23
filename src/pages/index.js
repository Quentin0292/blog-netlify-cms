import React from "react"
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { rhythm } from "../utils/typography";
import '../utils/global.css'
import Layout from '../components/Layout';
import Bio from '../components/Bio';
import Seo from '../components/Seo';
import { formatReadingTime, formatPostDate } from '../utils/helpers'

class IndexPage extends React.Component {

  render(){
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="Home" keywords={[`gatsby`, `blog`, `react`]} />
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
                      marginBottom: rhythm(2.8)
                    }}
                    key={document.node.id}>
                    <h3
                      style={{
                        fontFamily: 'Cabin Condensed, sans-serif',
                        fontWeight: 'bold',
                        fontSize: rhythm(1.7),
                        marginBottom: rhythm(1/4),
                      }}
                    ><Link
                      style={{
                        textDecoration: 'none',
                        boxShadow: 'none',
                        color: 'var(--textLink)',
                      }}
                      to={`/${document.node.frontmatter.slug}`}>{document.node.frontmatter.title}
                      </Link>
                    </h3>
                    <small
                      style={{
                        fontFamily: 'Quattrocento Sans, sans-serif',
                        fontSize: rhythm(.62)
                      }}
                    >{formatPostDate(document.node.frontmatter.date)}{` • ${formatReadingTime(document.node.timeToRead)} `}</small>
                    <p
                    style={{
                      fontFamily: 'Quattrocento Sans, sans-serif',
                      fontWeight: 'bold',
                      lineHeight: 1.8
                    }}>{document.node.excerpt}</p>
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
          timeToRead
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
