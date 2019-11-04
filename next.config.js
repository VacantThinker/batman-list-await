
const { backend_url } = require('./env.config')
const fetch = require('isomorphic-unfetch')

const axios = require('axios')

module.exports = {
  assetPrefix: backend_url,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }

    const url = 'https://api.tvmaze.com/search/shows?q=batman'
    const res = await axios.get(url)
    // console.log(res)
    const data = res.data
    // console.log(data)
    const shows = data.map(entry => entry.show)
    const dirName = '/show/'
    const p_id = '[id]'
    shows.forEach((show, index) => {
      const id = show.id
      const _path = `${dirName}${id}`
      paths[_path] = {
        // page: `${dirName}${p_id}`,
        // query: { id: id }
        page: _path
      }
    })

    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    // const data = await res.json()
    // console.log(`Show data fetched. Count: ${data.length}`)
    //
    // const shows = data.map(entry => entry.show)
    // const dirName = '/show/'
    // const p_id = '[id]'
    // shows.map(show => {
    //   const id = show.id
    //   const _path = `${dirName}${id}`
    //   paths[_path] = {
    //     page: `${dirName}${p_id}`,
    //     query: { id: id }
    //   }
    // })

    return paths
  }
}
