import React from 'react'
import Back from './Back'
import ChooseForm from './ChooseForm'

function Form(props) {
    return (
        <div className="container">
            <Back setValue={props.setValue}/>
            <ChooseForm value={props.value}/>
        </div>
    )
}

export default Form
