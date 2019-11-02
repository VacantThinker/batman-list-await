import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(`{"name":"Batman: The Animated Series","summary":"<p>Experience the thrills of vigilante justice as millionaire playboy Bruce Wayne and alter-ego Batman protect the streets of Gotham City from a host of villains including archnemesis The Joker, deadly-beautiful Poison Ivy and primitive Killer Croc in a fresh take on super hero storytelling. Intelligent, dramatic stories, unique characters and sharp dialog shaped this edgy TV series into an Emmy®-winning powerhouse that brought the Caped Crusader out of the dark alleys of TV history and into the present for fans of all ages.</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/80/202273.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/80/202273.jpg"}}`)

const Post757 = (props) => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post757

