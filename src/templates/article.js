import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import get from 'lodash/get'
import Reactmarkdown from 'react-markdown'
import { rhythm, scale } from '../utils/typography';




class ArticleTemplate extends React.Component {
  render(){
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const articleTitle = get(this, 'props.data.strapiArticle.title');
    const authorId = get(this, 'props.data.strapiArticle.user.id');
    const authorUsername = get(this, 'props.data.strapiArticle.user.username')
    const content = get(this, 'props.data.strapiArticle.content');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div style={{
          fontFamily: 'Quattrocento Sans, sans-serif',
        }}>
          <h1 style={{color: 'var(--textTitle)'}}>{articleTitle}</h1>
          <p
            style={{
              ...scale(-1/5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-4/5)
            }}
          >03/39/4244 • 5 min read</p>
          {/* <p>by <Link to={`/authors/User_${authorId}`}>{authorUsername}</Link></p> */}
          <div style={{
            fontWeight: 400,
            lineHeight: 1.75,
          }}>
            <Reactmarkdown source={content} />
          </div>
        </div>
      </Layout>
    )
  }
}


export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!){
    strapiArticle(id: {eq: $id}) {
      title
      content
      user {
        id
        username
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
