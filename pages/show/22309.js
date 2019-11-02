import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(
  `{"name":"Batman: Black and White","summary":"<p>This collection includes animated adaptations of ten short stories, bundled into five episodes, that take place in and around Gotham City, featuring Batman and his nefarious villains. Each story comes from the unique perspective of different writers and artists, applying their spin on the Batman universe.</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/204143.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/81/204143.jpg"}}`
)

const Post22309 = props => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post22309
