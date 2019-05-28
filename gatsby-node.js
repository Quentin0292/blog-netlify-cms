/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    // on fait une requete avec allMarkdownRemark
    `
     {
       allMarkdownRemark(sort: { fields: [frontmatter___date]
      , order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
              tags
            }
          }
        }
      }
     }
    `
    // une fois la requete effectuée on récupere une promesse, avec le then on passe à l'étape supérieure
  ).then(result => {
    console.log(JSON.stringify(result, null, 2))
    // pour la facilité de lecture on stocke toutes les informations dans la variable post
    const posts = result.data.allMarkdownRemark.edges

    // puis pour chaque posts trouvés, on va createPage par posts
    posts.forEach((post, index) => {
      const prev = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        // adresse URL de la page
        path: post.node.frontmatter.slug,
        // template de la page (il faut créer un dossier template dans source)
        component: path.resolve(`./src/templates/post.js`),
        // donner une information dans la page
        context: {
          slug: post.node.frontmatter.slug,
          next,
          prev
        },
      })
    })
  })
}
