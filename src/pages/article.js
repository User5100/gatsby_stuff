



/*
query Article {
  allDadiData(filter: { results: { in: { furl: { eq: "started-rumour"}}}}) {
    edges {
      node {
        results {
          subtitle
          furl
          title
          _layout {
            name
          }
        }
      }
    }
  }
}
*/
