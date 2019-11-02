import WrapLayout from '../components/WrapLayout'
import PrefixedImg from '../components/PrefixedImg'
import React from 'react'
import fetch from 'isomorphic-unfetch'

const Post = (props) => {
  const show = props.show
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      <div>{show.summary}</div>
      <PrefixedImg alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
