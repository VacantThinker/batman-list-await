import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(`{"name":"Batman Beyond","summary":"<p><b>Batman Beyond</b> tells the story of Terry McGinnis was just an ordinary teenager...until his father was mysteriously murdered. Suspecting foul play at his father's company Wayne/Powers Corporation, Terry meets Bruce Wayne and learns a secret identity hidden for decades. Now too old to battle injustice, Wayne is a bitter shell of his former self and refuses to help. So Terry does what any brash young kid would do: steal the Batsuit and take matters into his own hands! Vowing to avenge his father's death, Terry dons the high-tech suit - tricked out with jetpacks for flying, a supersensitive microphone for eavesdropping and even camouflage capabilities - in search of his father's assassin.</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/4/10842.jpg"}}`)

const Post504 = (props) => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post504

