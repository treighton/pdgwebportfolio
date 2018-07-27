import React, { Component } from 'react'

export default class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = { next: this.props.pathContext.next }
  }

  componentWillMount = () => {
    this.props.doSomething(this.props.pathContext.next)
  }

  render() {
    const { data } = this.props
    return (
      <div id="primary" className="content-area">
        <div id="portfolio">
          <section className="proj-view">
            <div className="stage">
              <p>Sample {data.markdownRemark.frontmatter.sample}</p>
              <h1 className="proj-title">
                <a href={data.markdownRemark.frontmatter.link} className="btn">
                  View Website
                </a>
                {data.markdownRemark.frontmatter.title}
              </h1>

              <img
                src={data.markdownRemark.frontmatter.image}
                className="scale"
                alt={data.markdownRemark.frontmatter.link}
              />
            </div>
          </section>

          <section className="proj-info">
            <div className="proj-desc">
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        link
        image
        sample
      }
    }
  }
`
