import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import { formatReadingTime, formatPostDate } from '../utils/helpers'
import SEO from '../components/seo';
import Bio from '../components/bio';


export default ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const articleTitle = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  const articleDate = data.markdownRemark.frontmatter.date
  const timeToRead = data.markdownRemark.timeToRead
  const titlePage = data.markdownRemark.frontmatter.title
  const post = data.markdownRemark
  const { prev, next } = pageContext;

  return (
    <Layout location='post' title={siteTitle}>
        <SEO
          title={titlePage}
          description={post.frontmatter.spoiler}
          slug={post.frontmatter.slug} />
        <main>
          <article>
            <header>
              <div
                style={{
                  fontFamily: 'Quattrocento Sans, sans-serif'
                }}
              >
                <h1 style={{
                  color: 'var(--textTitle)',
                  ...scale(1.6),
                  fontFamily: 'Work Sans, sans-serif'}}>{articleTitle}</h1>
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
              fontFamily: 'Quattrocento Sans, sans-serif',
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
                fontFamily: 'Work Sans, sans-serif',
                marginTop: rhythm(0.25),
            }}
            >
              <Link to={'/'}
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'var(--pink)',
                  ...scale(3/5)
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
                      fontFamily: 'Quattrocento Sans, sans-serif',
                      ...scale(1/5),
                      textDecoration: 'none',
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
                      fontFamily: 'Quattrocento Sans, sans-serif',
                      ...scale(1/5),
                      textDecoration: 'none',
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
