import React from 'react'
import WrapLayout from '../components/WrapLayout'
import PrefixedLink from '../components/PrefixedLink'
import fetch from 'isomorphic-unfetch'

const Index = props => {
  const shows = props.shows
  const dirName = '/show/'
  const param_id = '[id]'
  return (
    <WrapLayout>
      <h1>batman list</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <PrefixedLink
              href={`${dirName}${show.id}`}
              as={`${dirName}${show.id}`}
            >
              <a>{show.name}</a>
            </PrefixedLink>
          </li>
        ))}
      </ul>
    </WrapLayout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const jsonArr = await res.json()

  console.log(`Show data fetched. Count: ${jsonArr.length}`)

  return {
    shows: jsonArr.map(entry => entry.show)
  }
}

export default Index
