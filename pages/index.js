import React from 'react'
import WrapLayout from '../components/WrapLayout'
import PrefixedLink from '../components/PrefixedLink'
// import axios from 'axios'

const axios = require('axios')

const Index = (props) => {
  const { shows } = props
  const dirName = '/show/'
  const p_id = '[id]'
  return (
    <WrapLayout>
      <h1>batman list</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <PrefixedLink href={`${dirName}${show.id}`} as={`${dirName}${show.id}`}>
              <a>{show.name}</a>
            </PrefixedLink>
          </li>
        ))}
      </ul>
    </WrapLayout>
  )

}

Index.getInitialProps = async function() {
  // const url = 'https://api.tvmaze.com/search/shows?q=batman'
  // const res = await fetch(url)
  // const data = await res.json()
  // console.log(`Show data fetched. Count: ${data.length}`)
  //
  // return {
  //   shows: data.map(entry => entry.show)
  // }

  const url = 'https://api.tvmaze.com/search/shows?q=batman'
  const res = await axios.get(url)
//  console.log(res)
  const data = res.data
  // console.log(data)
  const shows = data.map(entry => entry.show)
  // shows.forEach((show,index)=>{
  // console.log(index)
  // console.log(show)
  // })

  return { shows }
}

export default Index

// const shows = [
//   { id: 975, name: 'Batman' },
//   { id: 481, name: 'The Batman' },
//   { id: 504, name: 'Batman Beyond' },
//   { id: 757, name: 'Batman: The Animated Series' },
//   { id: 3557, name: 'Beware the Batman' },
//   { id: 11464, name: 'Batman Unlimited' },
//   { id: 900, name: 'Batman: The Brave and the Bold' },
//   { id: 22309, name: 'Batman: Black and White' },
//   { id: 5951, name: 'The New Batman Adventures' },
//   { id: 33618, name: 'The Adventures of Batman' }
// ]
