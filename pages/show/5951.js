import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(
  `{"name":"The New Batman Adventures","summary":"<p><b>The New Batman Adventures</b> comes from the creators of Batman and Superman. This series was created because Fox had not lived up to the contract that they had given Batman, so the WB decided to give the show another chance. Bruce Timm then went back and decided to re-design all of the characters from Batman and ended up revamping the series all-together.</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/23/58624.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/23/58624.jpg"}}`
)

const Post5951 = props => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post5951
