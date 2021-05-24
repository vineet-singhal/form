import React,{useState} from 'react';

const PlanAVideoCall = () =>{

    const [records, setRecords] = useState({
        name: "",
        email: "",
        textarea: ""
    });

    const handleInput = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setRecords({ ... records , [name]:[value]});
    }

    const handleSubmit = () =>{
        if(isValidForm())
            alert("Submitted successfully");
    }

    const isValidForm = () => {
        if(records.name=="")
            return false;
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(records.email))){
            return false;
        }
        if(records.textarea==""){
            return false;
        }
        return true;
    }
    
    return (
        <div className="form-back">
            <p className="super-bold">Let's plan a video call! 🎥</p>
            <h1>Personal Details</h1>
            <form>
                <div className="container">
                    <div>
                        <div>
                            <input className="text-back" type="text" onChange={handleInput} value={records.name} name="name" placeholder="Name" required/>
                        </div>
                        <div>
                            <input className="text-back" type="email" onChange={handleInput} value={records.email} name="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <textarea className="textarea-back" onChange={handleInput} value={records.textarea} name="textarea" placeholder="What do you want to talk about?" required></textarea>
                        </div>
                        <div>
                            <button type="submit" onClick={handleSubmit}>Send Inquiry</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default PlanAVideoCall
