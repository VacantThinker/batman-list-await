import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(
  `{"name":"Batman Unlimited","summary":"<p>A webseries began airing on DC Kids' YouTube channel on May 4, 2015.</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/38/96515.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/38/96515.jpg"}}`
)

const Post11464 = props => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post11464
