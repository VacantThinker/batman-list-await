import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(
  `{"name":"Beware the Batman","summary":"<p>In this new interpretation of the Batman legend, Bruce Wayne has recently returned to Gotham. With the aide of his butler and former SAS operative Alfred Pennyworth, Bruce takes on the guise of Batman and fights the villains of Gotham City. Helping him is Katana, a young martial artist who Alfred hires to assist Bruce when he realizes that he's too old to serve in the field.</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/18/46698.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/18/46698.jpg"}}`
)

const Post3557 = props => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post3557
