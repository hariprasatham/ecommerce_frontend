import React from 'react'
import styled from 'styled-components'

import Banner from './Banner/Banner'
import Category from './Category/Category'
import DynamicSection from './DynamicSection/DynamicSection'


const Home = () => {
  return (
    <HomeSection>
        <Banner/>
        <Category/>
        <DynamicSection/>
    </HomeSection>
  )
}

export default Home

const HomeSection = styled.section`
`;