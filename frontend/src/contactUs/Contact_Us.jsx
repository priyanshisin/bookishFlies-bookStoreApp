import React from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import ContactUs from '../components/ContactUs'

function Contact_Us() {
    return (<>
        <TopBar />
        <div className='min-h-screen'>
            <ContactUs />
        </div>
        <BottomBar /> 
    </>)
}

export default Contact_Us