const fs = require('fs')
const path = require('path')
const axios = require('axios').default
const fetch = require('isomorphic-unfetch')

const production = process.env.NODE_ENV === 'production'
const hostUrl = '/batman-list-await'
// const hostUrl = '';

const filePath = path.join(__dirname, '../_data/batman.json')
const fileSync = fs.readFileSync(filePath, 'utf8')
const jsonObj = JSON.parse(fileSync)

const showList = jsonObj.map(x => x.show)

function g_indexjs_ul_li() {
  let strToFile = ''
  showList.forEach(show => {
    const dirName = '/show/'
    const templateLi = `<li key={\`${show.id}\`}>
  <PrefixedLink href={\`${dirName}${show.id}\`}>
    <a>${show.name}</a>
  </PrefixedLink>
</li>
`
    // console.log(templateLi)
    strToFile = strToFile + templateLi
  })
  // console.log(strToFile)
  fs.writeFileSync(
    path.join(__dirname, '../_temp/indexjs_ul_li'),
    strToFile,
    'utf8'
  )
}

function g_nextconfigjs_pathmap_showid() {
  let strToFile = ''
  showList.forEach(val => {
    const dirName = '/show/'
    const page1 = `${dirName}${val.id}`
    const templateLi = `'${page1}' : {page : '${page1}'},
    `
    // console.log(templateLi)
    strToFile = strToFile + templateLi
  })
  // console.log(strToFile)
  fs.writeFileSync(
    path.join(__dirname, '../_temp/nextconfigjs_pathmap_showid'),
    strToFile,
    'utf8'
  )
}

function g_showdir_idjs() {
  showList.forEach(val => {
    const id = val.id
    const htmlImgUrl = `/static/${id}.jpg`

    const templatePost = `import WrapLayout from "../../components/WrapLayout"
import PrefixedImg from "../../components/PrefixedImg"
import React from "react"

const Post${val.id} = () => (
  <WrapLayout>
    <h1>${val.name}</h1>
    ${val.summary}
    <PrefixedImg alt='' src={\`${htmlImgUrl}\`} />
  </WrapLayout>
)

export default Post${val.id}
`

    // console.log(templatePost)
    fs.writeFileSync(
      path.join(__dirname, `../_temp/${id}.js`),
      templatePost,
      'utf8'
    )
  })
  console.log(`g_showdir_idjs end ---`)
}

function g_showdir_idjs_image() {
  showList.map(val => {
    // get image file
    const imgId = val.id
    const imgUrl = val.image.medium

    // GET request for remote image
    axios({
      method: 'get',
      url: imgUrl,
      responseType: 'stream'
    }).then(function(response) {
      const filePath = path.join(__dirname, `../public/static/${imgId}.jpg`)
      fs.writeFileSync(filePath, null, { encoding: 'utf8' })
      response.data.pipe(fs.createWriteStream(filePath))
      console.log(`${filePath} --- `)
      // fs.writeFile(filePath, null, err => {
      //   response.data.pipe(fs.createWriteStream(filePath))
      //   console.log(`${filePath} --- `)
      // })
    })
  })
}

async function g_showdir_idjs() {
  const url = 'https://api.tvmaze.com/search/shows?q=batman'
  const res = await fetch(url)
  const data = await res.json()
  const shows = data.map(entry => entry.show)

  shows.forEach(show => {
    // console.log(show)
    const show_new = {}
    show_new.name = show.name
    show_new.summary = show.summary
    show_new.image = show.image
    const showStr = JSON.stringify(show_new)
    const id = show.id
    // console.log(id)

    const templatePost = `
import WrapLayout from '../../components/WrapLayout'
import PrefixedImg from '../../components/PrefixedImg'
import React from 'react'
import fetch from 'isomorphic-unfetch'

const show = JSON.parse(\`${showStr}\`)

const Post${id} = (props) => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium} />
    </WrapLayout>
  )
}

export default Post${id}

  `
    const filePath = path.join(__dirname, `../pages/show/${show.id}.js`)
    console.log(filePath)
    const existsSync = fs.existsSync(filePath)
    if (existsSync) {
      fs.unlinkSync(filePath)
    }
    fs.writeFileSync(filePath, templatePost, 'utf8')
    // fs.writeFile(filePath, templatePost, err => {})
  })
}

// g_indexjs_ul_li()
// g_nextconfigjs_pathmap_showid()
// g_showdir_idjs()
// g_showdir_idjs_image()
g_showdir_idjs()
