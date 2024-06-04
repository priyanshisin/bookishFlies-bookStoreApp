import React from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import Course from '../components/Course'

function Courses() {
    
    return (<>
        <TopBar />
        <div className='min-h-screen'>
            <Course />
        </div>
        <BottomBar /> 
    </>)
}

export default Courses