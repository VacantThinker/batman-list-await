import React from 'react'
import WrapLayout from '../components/WrapLayout'
// import PrefixedLink from '../components/PrefixedLink'
import PrefixedLink from '../components/PrefixedLink'

class Index extends React.Component {
  render() {
    const shows = [
      { id: 975, name: 'Batman' },
      { id: 481, name: 'The Batman' },
      { id: 504, name: 'Batman Beyond' },
      { id: 757, name: 'Batman: The Animated Series' },
      { id: 3557, name: 'Beware the Batman' },
      { id: 11464, name: 'Batman Unlimited' },
      { id: 900, name: 'Batman: The Brave and the Bold' },
      { id: 22309, name: 'Batman: Black and White' },
      { id: 5951, name: 'The New Batman Adventures' },
      { id: 33618, name: 'The Adventures of Batman' }
    ]
    const dirName = '/show/'
    const p_id = '[id]'
    return (
      <WrapLayout>
        <h1>batman list</h1>
        <ul>
          {shows.map(show => (
            <li key={show.id}>
              <PrefixedLink href={`${dirName}${show.id}`}>
                <a>{show.name}</a>
              </PrefixedLink>
            </li>
          ))}
        </ul>
      </WrapLayout>
    )
  }
}

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const jsonArr = await res.json()
//
//   console.log(`Show data fetched. Count: ${jsonArr.length}`)
//
//   return {
//     shows: jsonArr.map(entry => entry.show)
//   }
// }

export default Index
