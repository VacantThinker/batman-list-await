import React from 'react'
// import Axios from 'axios'

// const axios = require('axios')
//
// const Post = (props) => {
//   const { show } = props
//   return (
//     <WrapLayout>
//       <h1>{show.name}</h1>
//       <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//       <img alt="" src={show.image.medium}/>
//     </WrapLayout>
//   )
// }
//
// Post.getInitialProps = async function(context) {
//   // const { id } = context.query
//   // const url = `https://api.tvmaze.com/shows/${id}`
//   // const res = await fetch(url)
//   // const show = await res.json()
//   // // const show = shows.get(id)
//   // console.log(`Fetched show: ${show.name}`)
//   //
//   // return { show }
//
//   const { id } = context.query
//   const url = `https://api.tvmaze.com/shows/${id}`
//   const res = await axios.get(url)
// //  console.log(res)
//   const show = res.data
//   // console.log(data)
//
//   return {show}
// }
//
// export default Post
export default function Post() {
  return (<div/>)
}

// const shows = new Map([
//     [
//       '975',
//       {
//         'name': '`Batman`',
//         'summary': '`<p>Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including Catwoman, Egghead, The Joker, King Tut, The Penguin, and The Riddler.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/6/16463.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/6/16463.jpg'
//         }
//       }
//     ],
//     [
//       '481',
//       {
//         'name': '`The Batman`',
//         'summary': '`<p>Hidden in the shadows, The Batman casts a protective eye while tracking the thugs, thieves and criminal masterminds that claim Gotham City\'s dark alleys each night. In one magnificent swoop, he descends up on opponents and battles with a fierceness that seems almost inhuman. This is the young Bruce Wayne who assumes the role of Gotham\'s greatest defender in a fresh retelling of the Dark Knight\'s beginnings.</p><p>With incredible gadgets, awesome animation and a cool new vibe, these 13 exciting episodes from the hit series showcase The Batman taking on your favourite villains – The Joker, The Penguin, Mr. Freeze, Catwoman, Bane – and new crazies you\'ll love to hate!</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/3/9370.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/3/9370.jpg'
//         }
//       }
//     ],
//     [
//       '504',
//       {
//         'name': '`Batman Beyond`',
//         'summary': '`<p><b>Batman Beyond</b> tells the story of Terry McGinnis was just an ordinary teenager...until his father was mysteriously murdered. Suspecting foul play at his father\'s company Wayne/Powers Corporation, Terry meets Bruce Wayne and learns a secret identity hidden for decades. Now too old to battle injustice, Wayne is a bitter shell of his former self and refuses to help. So Terry does what any brash young kid would do: steal the Batsuit and take matters into his own hands! Vowing to avenge his father\'s death, Terry dons the high-tech suit - tricked out with jetpacks for flying, a supersensitive microphone for eavesdropping and even camouflage capabilities - in search of his father\'s assassin.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/4/10842.jpg'
//         }
//       }
//     ],
//     [
//       '757',
//       {
//         'name': '`Batman: The Animated Series`',
//         'summary': '`<p>Experience the thrills of vigilante justice as millionaire playboy Bruce Wayne and alter-ego Batman protect the streets of Gotham City from a host of villains including archnemesis The Joker, deadly-beautiful Poison Ivy and primitive Killer Croc in a fresh take on super hero storytelling. Intelligent, dramatic stories, unique characters and sharp dialog shaped this edgy TV series into an Emmy®-winning powerhouse that brought the Caped Crusader out of the dark alleys of TV history and into the present for fans of all ages.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/80/202273.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/80/202273.jpg'
//         }
//       }
//     ],
//     [
//       '3557',
//       {
//         'name': '`Beware the Batman`',
//         'summary': '`<p>In this new interpretation of the Batman legend, Bruce Wayne has recently returned to Gotham. With the aide of his butler and former SAS operative Alfred Pennyworth, Bruce takes on the guise of Batman and fights the villains of Gotham City. Helping him is Katana, a young martial artist who Alfred hires to assist Bruce when he realizes that he\'s too old to serve in the field.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/18/46698.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/18/46698.jpg'
//         }
//       }
//     ],
//     [
//       '11464',
//       {
//         'name': '`Batman Unlimited`',
//         'summary': '`<p>A webseries began airing on DC Kids\' YouTube channel on May 4, 2015.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/38/96515.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/38/96515.jpg'
//         }
//       }
//     ],
//     [
//       '900',
//       {
//         'name': '`Batman: The Brave and the Bold`',
//         'summary': '`<p>Batman isn\'t going at it alone this time! From Warner Bros. Animation comes the latest interpretation of the classic Batman franchise. Our caped crusader is teamed up with heroes from across the DC Universe, delivering nonstop action and adventure with a touch of comic relief. Blue Beetle, Green Arrow, Aquaman and countless others will get a chance to uphold justice alongside Batman. Though still based in Gotham, Batman will frequently find himself outside city limits, facing situations that are both unfamiliar and exhilarating. With formidable foes around every corner, Batman will still rely on his stealth, resourcefulness and limitless supply of cool gadgets to bring justice home.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/6/16001.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/6/16001.jpg'
//         }
//       }
//     ],
//     [
//       '22309',
//       {
//         'name': '`Batman: Black and White`',
//         'summary': '`<p>This collection includes animated adaptations of ten short stories, bundled into five episodes, that take place in and around Gotham City, featuring Batman and his nefarious villains. Each story comes from the unique perspective of different writers and artists, applying their spin on the Batman universe.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/81/204143.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/81/204143.jpg'
//         }
//       }
//     ],
//     [
//       '5951',
//       {
//         'name': '`The New Batman Adventures`',
//         'summary': '`<p><b>The New Batman Adventures</b> comes from the creators of Batman and Superman. This series was created because Fox had not lived up to the contract that they had given Batman, so the WB decided to give the show another chance. Bruce Timm then went back and decided to re-design all of the characters from Batman and ended up revamping the series all-together.</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/23/58624.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/23/58624.jpg'
//         }
//       }
//     ],
//     [
//       '33618',
//       {
//         'name': '`The Adventures of Batman`',
//         'summary': '`<p><b>The Adventures of Batman</b>, with Robin, the Boy Wonder! Batman and Robin, the Dynamic Duo against crime and corruption, whose real identities as millionaire philanthropist Bruce Wayne and his young ward Dick Grayson and known only to Alfred, the faithful butler. Ever alert, they respond swiftly to a signal from the police, and moments later, from the secret Batcave deep beneath Wayne Manor, they roar out to protect life, limb and property as Batman and Robin, caped crimefighters! Batman and Robin, scourge of Gotham City\'s kooky criminals: The Joker, Clown Prince of Crime - The Penguin, pudgy purveyor of perfidy - and the cool, cruel, Mr. Freeze! Watch out, villains, here come... Batman and Robin!</p>`',
//         'image': {
//           'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/136/342479.jpg',
//           'original': 'http://static.tvmaze.com/uploads/images/original_untouched/136/342479.jpg'
//         }
//       }
//     ]
//   ]
// )
