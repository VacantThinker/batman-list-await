import WrapLayout from '../../components/WrapLayout'
import React from 'react'

const show = JSON.parse(
  `{"name":"The Adventures of Batman","summary":"<p><b>The Adventures of Batman</b>, with Robin, the Boy Wonder! Batman and Robin, the Dynamic Duo against crime and corruption, whose real identities as millionaire philanthropist Bruce Wayne and his young ward Dick Grayson and known only to Alfred, the faithful butler. Ever alert, they respond swiftly to a signal from the police, and moments later, from the secret Batcave deep beneath Wayne Manor, they roar out to protect life, limb and property as Batman and Robin, caped crimefighters! Batman and Robin, scourge of Gotham City's kooky criminals: The Joker, Clown Prince of Crime - The Penguin, pudgy purveyor of perfidy - and the cool, cruel, Mr. Freeze! Watch out, villains, here come... Batman and Robin!</p>","image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/136/342479.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/136/342479.jpg"}}`
)

const Post33618 = props => {
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      {show.summary}
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

export default Post33618
