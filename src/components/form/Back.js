import React from 'react'

function Back(props) {
    return (
        <div>
            <h1 className="contactus cur" onClick={()=>props.setValue("")}>→</h1>
        </div>
    )
}

export default Back
