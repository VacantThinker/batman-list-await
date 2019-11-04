import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const axios = require('axios')

const Post5951 = (props) => {
  const { show } = props
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

Post5951.getInitialProps = async function(context) {
  const { id } = context.query
  const url = `https://api.tvmaze.com/shows/5951`
  const res = await axios.get(url)
//  console.log(res)
  const show = res.data
  // console.log(data)

  console.log(`Fetched show: The New Batman Adventures`)

  return { show }
}


export default Post5951
