import React from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import AboutUs from '../components/AboutUs'

function About_Us() {
    return (<>
        <TopBar />
        <div className='min-h-screen'>
            <AboutUs />
        </div>
        <BottomBar /> 
    </>)
}

export default About_Us