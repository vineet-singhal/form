import React from 'react'
import ContactUs from './ContactUs'
import LetsTalk from './LetsTalk'

function HomeContact({setValue}) {
    return (
        <div className="container">
            <ContactUs/>
            <LetsTalk setValue={setValue}/>
        </div>
    )
}

export default HomeContact
