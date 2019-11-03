import WrapLayout from '../../components/WrapLayout'
import React from 'react'
import fetch from 'isomorphic-unfetch'

const Post5951 = props => {
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
  const res = await fetch(`https://api.tvmaze.com/shows/5951`)
  const show = await res.json()
  // const show = shows.get(id)
  console.log(`Fetched show: The New Batman Adventures`)

  return { show }
}

export default Post5951
