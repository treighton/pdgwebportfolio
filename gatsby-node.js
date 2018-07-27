const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___sample] }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges
      posts.forEach(({ node }, index) => {
        const prev = index === 0 ? false : posts[index - 1].node.fields.slug
        const next =
          index === posts.length - 1 ? false : posts[index + 1].node.fields.slug
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.fields.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })
}
