import React from 'react'

export default ({data}) => (
  <div>Features page
    <pre><code>{ JSON.stringify(data) }</code></pre>
  </div>
)

export const query = graphql`
query Articles {
  allDadiData {
    edges {
      node {
        results {
          subtitle
          furl
          title
        }
      }
    }
  }
}
`
