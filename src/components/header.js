import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-home.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props.nextLink)
    return (
      <div>
        <svg display="none" version="1.1">
          <defs>
            <g id="icon-cross">
              <path
                className="path1"
                d="M28.698 26.304l-5.516-6.304 5.516-6.304c0.938-0.938 0.938-2.458 0-3.394s-2.458-0.936-3.394 0l-5.304 6.062-5.302-6.060c-0.938-0.938-2.458-0.938-3.394 0s-0.936 2.458 0 3.394l5.514 6.302-5.516 6.304c-0.936 0.938-0.936 2.454 0 3.39 0.938 0.938 2.458 0.938 3.394 0l5.304-6.058 5.302 6.058c0.938 0.938 2.458 0.938 3.394 0s0.938-2.452 0.002-3.39z"
              />
            </g>
            <g id="icon-cross2">
              <path
                className="path1"
                d="M32 4h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM26.122 29.578l-6.122-6.12-6.122 6.122-3.456-3.458 6.12-6.122-6.12-6.12 3.456-3.458 6.122 6.12 6.12-6.12 3.458 3.456-6.12 6.122 6.122 6.122-3.458 3.456z"
              />
            </g>
            <g id="icon-list">
              <path
                className="path1"
                d="M32 18h-24c-1.104 0-2 0.896-2 2s0.896 2 2 2h24c1.106 0 2-0.896 2-2s-0.894-2-2-2zM8 14h24c1.106 0 2-0.896 2-2s-0.894-2-2-2h-24c-1.104 0-2 0.896-2 2s0.896 2 2 2zM32 26h-24c-1.104 0-2 0.894-2 2s0.896 2 2 2h24c1.106 0 2-0.894 2-2s-0.894-2-2-2z"
              />
            </g>
            <g id="icon-arrow-left">
              <path
                className="path1"
                d="M22.874 9.032c-0.836 0.816-9.004 9.392-9.004 9.392-0.446 0.436-0.668 1.006-0.668 1.576s0.222 1.14 0.668 1.576c0 0 8.168 8.576 9.004 9.39 0.836 0.816 2.34 0.872 3.232 0 0.89-0.87 0.96-2.084-0.002-3.15l-7.494-7.816 7.494-7.816c0.962-1.068 0.892-2.282 0.002-3.152-0.894-0.87-2.398-0.816-3.232 0z"
              />
            </g>
            <g id="icon-arrow-right">
              <path
                className="path1"
                d="M17.126 9.032c0.836 0.816 9.004 9.392 9.004 9.392 0.448 0.436 0.67 1.006 0.67 1.576s-0.222 1.14-0.67 1.576c0 0-8.168 8.576-9.004 9.39-0.836 0.816-2.338 0.872-3.232 0-0.892-0.87-0.962-2.084 0-3.15l7.496-7.816-7.494-7.816c-0.962-1.068-0.892-2.282 0-3.152s2.396-0.816 3.23 0z"
              />
            </g>
            <g id="icon-arrow-left2">
              <path
                className="path1"
                d="M28.798 34.836c0.536 0.542 0.536 1.416 0 1.958s-1.402 0.542-1.938 0l-15.66-15.814c-0.536-0.542-0.536-1.418 0-1.958l15.66-15.816c0.536-0.542 1.402-0.542 1.938 0s0.536 1.416 0 1.958l-14.28 14.836 14.28 14.836z"
              />
            </g>
            <g id="icon-arrow-left3">
              <path
                className="path1"
                d="M11.199 34.836c-0.536 0.542-0.536 1.416 0 1.958s1.402 0.542 1.938 0l15.66-15.814c0.536-0.542 0.536-1.418 0-1.958l-15.66-15.816c-0.536-0.542-1.402-0.542-1.938 0s-0.536 1.416 0 1.958l14.28 14.836-14.28 14.836z"
              />
            </g>
          </defs>
        </svg>
        <header id="masthead">
          <a href="#side-list" id="menu-toggle" onClick={this.props.toggleList}>
            <svg className="icon icon-list" viewBox="0 0 40 40">
              <use xlinkHref="#icon-list" />
            </svg>
          </a>

          <h1 className="site-title">
            <Link to="/">
              <img src={logo} alt="Page Design Group" />
            </Link>
          </h1>

          <nav id="pager" style={{ position: 'absolute', right: 0, top: 0 }}>
            <Link
              to={this.props.nextLink ? this.props.nextLink : '/'}
              className="next"
            >
              <svg className="icon icon-arrow-right" viewBox="0 0 40 40">
                <use xlinkHref="#icon-arrow-right" />
              </svg>
            </Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
