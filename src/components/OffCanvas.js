import React from 'react'
import PostListing from './PostListing'

class OffCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div
          id="mask"
          className={`close-list ${this.props.open ? `active` : ``}`}
        />
        <nav id="side-list" className={`${this.props.open ? `active` : ``}`}>
          <a href="#portfolio" />
          <h2>
            <svg
              id="close-side"
              className="icon icon-cross close-list"
              viewbox="0 0 40 40"
              onClick={this.props.toggleList}
            >
              <g id="icon-cross">
                <path
                  className="path1"
                  d="M28.698 26.304l-5.516-6.304 5.516-6.304c0.938-0.938 0.938-2.458 0-3.394s-2.458-0.936-3.394 0l-5.304 6.062-5.302-6.060c-0.938-0.938-2.458-0.938-3.394 0s-0.936 2.458 0 3.394l5.514 6.302-5.516 6.304c-0.936 0.938-0.936 2.454 0 3.39 0.938 0.938 2.458 0.938 3.394 0l5.304-6.058 5.302 6.058c0.938 0.938 2.458 0.938 3.394 0s0.938-2.452 0.002-3.39z"
                />
              </g>
            </svg>
            Samples
          </h2>
          <ul className="sample-links">
            {this.props.samples.edges.map(({ node }) => (
              <PostListing
                key={node.id}
                post={node}
                toggleList={this.props.toggleList}
              />
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default OffCanvas
