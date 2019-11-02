import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(
  `{"name":"Batman: The Brave and the Bold","summary":"<p>Batman isn't going at it alone this time! From Warner Bros. Animation comes the latest interpretation of the classic Batman franchise. Our caped crusader is teamed up with heroes from across the DC Universe, delivering nonstop action and adventure with a touch of comic relief. Blue Beetle, Green Arrow, Aquaman and countless others will get a chance to uphold justice alongside Batman. Though still based in Gotham, Batman will frequently find himself outside city limits, facing situations that are both unfamiliar and exhilarating. With formidable foes around every corner, Batman will still rely on his stealth, resourcefulness and limitless supply of cool gadgets to bring justice home.</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/16001.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/16001.jpg"}}`
)

const Post900 = props => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post900
