import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(
  `{"name":"The Batman","summary":"<p>Hidden in the shadows, The Batman casts a protective eye while tracking the thugs, thieves and criminal masterminds that claim Gotham City's dark alleys each night. In one magnificent swoop, he descends up on opponents and battles with a fierceness that seems almost inhuman. This is the young Bruce Wayne who assumes the role of Gotham's greatest defender in a fresh retelling of the Dark Knight's beginnings.</p><p>With incredible gadgets, awesome animation and a cool new vibe, these 13 exciting episodes from the hit series showcase The Batman taking on your favourite villains – The Joker, The Penguin, Mr. Freeze, Catwoman, Bane – and new crazies you'll love to hate!</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/3/9370.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/3/9370.jpg"}}`
)

const Post481 = props => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post481
