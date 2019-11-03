import WrapLayout from '../../components/WrapLayout'
import React from 'react'
import fetch from 'isomorphic-unfetch'

const Post33618 = props => {
  const { show } = props
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

Post33618.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/33618`)
  const show = await res.json()
  // const show = shows.get(id)
  console.log(`Fetched show: The Adventures of Batman`)

  return { show }
}

export default Post33618
