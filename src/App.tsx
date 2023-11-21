import React from 'react'
import Navbar from './components/custom/Navbar/Navbar'
import Banner from './components/custom/Banner/Banner'
import Collection from './components/Collection/Collection'

const App = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Collection collection_name='{Mens Collection}'/>
    </main>
  )
}

export default App