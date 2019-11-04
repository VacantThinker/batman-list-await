import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const axios = require('axios')

const Post757 = (props) => {
  const { show } = props
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

Post757.getInitialProps = async function(context) {
  const { id } = context.query
  const url = `https://api.tvmaze.com/shows/757`
  const res = await axios.get(url)
//  console.log(res)
  const show = res.data
  // console.log(data)

  console.log(`Fetched show: Batman: The Animated Series`)

  return { show }
}


export default Post757
