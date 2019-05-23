import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { formatReadingTime, formatPostDate } from '../utils/helpers'
import Bio from '../components/Bio';
import Seo from '../components/Seo';


export default ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const articleTitle = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  const articleDate = data.markdownRemark.frontmatter.date
  const timeToRead = data.markdownRemark.timeToRead
  const excerpt = data.markdownRemark.excerpt
  const { prev, next } = pageContext;

  return (
    <Layout location='post' title={siteTitle}>
      <Seo title={articleTitle} description={excerpt} />
        <main>
          <article>
            <header>
              <div
                style={{
                  fontFamily: 'Cabin Condensed, sans-serif',
                  marginBottom: rhythm(3)
                }}
              >
                <h1 style={{
                  color: 'var(--textNormal)',
                  ...scale(2.8),
                  fontFamily: 'Cabin Condensed, sans-serif'}}>{articleTitle}</h1>
                <p
                  style={{
                    ...scale(-1/5),
                    display: 'block',
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-4/5)
                  }}
                >{formatPostDate(articleDate)}{` • ${formatReadingTime(timeToRead)} `}</p>
              </div>
            </header>
            <div style={{
              fontFamily: 'Cabin Condensed, sans-serif',
              fontSize: '1.3em',
              lineHeight: '2.75rem'
              }} dangerouslySetInnerHTML={{ __html: html }} />
            <footer>
            </footer>
          </article>
        </main>
        <aside>
          <div
            style={{
              margin: '90px 0 40px 0',
            }}></div>
            <h3
              style={{
                fontFamily: 'Permanent Marker, sans-serif',
                marginTop: rhythm(0.25),
                marginBottom: rhythm(1.1)
            }}
            >
              <Link to={'/'}
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'var(--textLink)',
                  ...scale(2)
                }}
              >Devlife</Link>
            </h3>
            <Bio />
            <nav>
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  padding: 0,
                }}>
                <li>
                  {prev && (
                  <Link to={`/${prev.frontmatter.slug}`} rel="prev"
                    style={{
                      marginRight: 20,
                      color: 'var(--textLink)',
                      fontFamily: 'Cabin Condensed, sans-serif',
                      ...scale(2/5),
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}>
                    ← {prev.frontmatter.title}
                  </Link>
                  )}
                </li>
                <li>
                  {next && (
                  <Link to={`/${next.frontmatter.slug}`} rel="next"
                    style={{
                      color: 'var(--textLink)',
                      fontFamily: 'Cabin Condensed, sans-serif',
                      ...scale(2/5),
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    {next.frontmatter.title} →
                  </Link>
                  )}
                </li>
              </ul>
            </nav>
        </aside>
      </Layout>
  )
}

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
