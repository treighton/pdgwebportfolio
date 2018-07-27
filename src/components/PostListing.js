import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Date = styled.div`
  font-style: italic;
  font-size: 1rem;
  font-weight: 100;
  margin-top: 15px;
`

const PostListing = props => (
  <li>
    <Link to={props.post.fields.slug} onClick={props.toggleList}>
      <img src={props.post.frontmatter.image} className="tmb-left" />
      Sample {props.post.frontmatter.sample}
      <strong>{props.post.frontmatter.title}</strong>
    </Link>
  </li>
)

export default PostListing
