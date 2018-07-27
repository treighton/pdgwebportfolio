import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount = () => {
    this.props.doSomething(
      this.props.data.allMarkdownRemark.edges[0].node.fields.slug
    )
  }

  render() {
    const { data } = this.props
    return (
      <div id="primary" className="content-area">
        <ul className="sample-links">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostListing key={node.id} post={node} />
          ))}
        </ul>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___sample], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            sample
            image
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
