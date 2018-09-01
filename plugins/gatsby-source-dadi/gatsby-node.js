const crypto = require("crypto");
const fetch = require("node-fetch");
const queryString = require("query-string");

exports.sourceNodes = (
  { boundActionCreators, createNodeId },
  configOptions
) => {
  const { createNode } = boundActionCreators

  delete configOptions.plugins

  const processData = data => {
    const nodeId = createNodeId(`dadi-data-${data.id}`)
    const nodeContent = JSON.stringify(data)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `dadiData`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    })

    return nodeData
  }

  const apiOptions = queryString.stringify(configOptions)

  const apiUrl = `http://api.dev.onebauer.media/1.0/one/articles?${apiOptions}`

  return (
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const nodeData = processData(data)
        createNode(nodeData)
      })
  )
}
