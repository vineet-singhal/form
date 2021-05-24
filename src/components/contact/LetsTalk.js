import React,{useState} from 'react'

function LetsTalk(props) {
    const [value, setValue] = useState("");

    const handleInput = e => {
        setValue(e.target.value);
    }

    return (
        <div className="form-back">
            <p className="super-bold">Let's talk.</p>
            <p>Share your excitement with us.</p>
            <a href="mailto:info@yummygum.com">info@yummygum.com</a>
            <div>
                <h1>Let's talk about</h1>
                <div>
                    <input type="radio" onChange={handleInput} id="options1" name="options" value="1"/>
                    <label className="text-back" htmlFor="options1">Your great project</label>
                </div>
                <div>
                    <input type="radio" onChange={handleInput} id="options2" name="options" value="2"/>
                    <label className="text-back" htmlFor="options2">Meeting for a coffee</label>
                </div>
                <div>
                    <input type="radio" onChange={handleInput} id="options3" name="options" value="3"/>
                    <label className="text-back" htmlFor="options3">Birds and bees</label>
                </div>
                <div>
                    <input type="radio" onChange={handleInput} id="options4" name="options" value="4" />
                    <label className="text-back" htmlFor="options4">Plan a video call</label>
                </div>
                <div>
                    <button className="contact-button" onClick={()=>{props.setValue(value)}}>Next</button>
                </div>
            </div>
        </div>  
    )
}

export default LetsTalk
