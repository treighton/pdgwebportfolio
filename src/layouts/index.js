import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/Footer'
import OffCanvas from '../components/OffCanvas'
import './index.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      next: this.props.data.allMarkdownRemark.edges[0].node.fields.slug,
      open: false,
    }
  }

  updateNextLink = value => {
    this.setState({ next: value })
  }

  updateOpen = () => {
    let newValue = this.state.open ? false : true
    this.setState({ open: newValue })
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header
          siteTitle={this.props.data.site.siteMetadata.title}
          nextLink={this.state.next}
          toggleList={this.updateOpen}
        />
        <div id="wrap" className="">
          <div id="page">
            {this.props.children({
              ...this.props,
              doSomething: this.updateNextLink,
            })}
          </div>
        </div>
        <Footer />
        <OffCanvas
          open={this.state.open}
          samples={this.props.data.allMarkdownRemark}
          toggleList={this.updateOpen}
        />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
                 frontmatter {
                   title
                   sample
                   image
                 }
        fields {
          slug
        }
      }
    }
  }
  }
`
