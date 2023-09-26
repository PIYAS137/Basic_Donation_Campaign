
import React from 'react'
import Cards from '../components/allcards/Cards'
import SearchArea from '../components/searchArea/SearchArea'

const Home = () => {
  return (
     <React.Fragment>
      <SearchArea/>
      <Cards/>
     </React.Fragment>
  )
}

export default Home