const { backend_url } = require('./env.config')
const fetch = require('isomorphic-unfetch')
const fs = require('fs')
const path = require('path')
const axios = require('axios').default

module.exports = {
  assetPrefix: backend_url,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }

    const url = 'https://api.tvmaze.com/search/shows?q=batman'
    const res = await fetch(url)
    const data = await res.json()

    const shows = data.map(entry => entry.show)
    shows.forEach(show => {
      const id = show.id

      // next export, 导出时
      // paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } }
      paths[`/show/${id}`] = { page: `/show/${id}` }
    })

    return paths
  }
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/show/975': { page: '/show/975' },
  //     '/show/481': { page: '/show/481' },
  //     '/show/504': { page: '/show/504' },
  //     '/show/757': { page: '/show/757' },
  //     '/show/3557': { page: '/show/3557' },
  //     '/show/11464': { page: '/show/11464' },
  //     '/show/900': { page: '/show/900' },
  //     '/show/22309': { page: '/show/22309' },
  //     '/show/5951': { page: '/show/5951' },
  //     '/show/33618': { page: '/show/33618' }
  //   };
  // },
  // target: 'serverless',
  // env: {
  //   linkPrefix: production ? `${backend_url}` : ''
  // }
  // webpack: (config, { defaultLoaders }) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       defaultLoaders.babel,
  //       {
  //         loader: require('styled-jsx/webpack').loader,
  //         options: {
  //           type: 'scoped'
  //         }
  //       }
  //     ]
  //   });
  //
  //   return config;
  // }
  //
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.md$/,
  //     use: 'raw-loader'
  //   });
  //
  //   return config;
  // }
}

// module.exports = {
//   exportsPathMap: function () {
//     return {
//       '/': {page : '/'}
//     }
//   }
// }
