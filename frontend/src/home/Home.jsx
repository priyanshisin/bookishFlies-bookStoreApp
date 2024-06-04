import React from 'react'
import TopBar from '../components/TopBar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import AboutUs from '../components/AboutUs'
import BottomBar from '../components/BottomBar'

function Home() {
  return (<>
    <TopBar />
    <Banner />
    <Freebook />
    <AboutUs />
    <BottomBar /> 
  </>)
}

export default Home