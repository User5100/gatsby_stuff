import React from 'react'
import Link from 'gatsby-link'
import Features from '../pages/movies/features'
import News from '../pages/movies/news'
import Reviews from '../pages/movies/reviews'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const { pathname } = location
    let renderChildren
    switch(pathname) {
      case '/movies/news':
        renderChildren = News
        break
      case '/movies/features':
        renderChildren = Features
        break
      case '/movies/reviews':
        renderChildren =  Reviews
        break
      default:
        renderChildren = children
    }

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      { renderChildren() }
      </div>
    )
  }
}

export default Template
