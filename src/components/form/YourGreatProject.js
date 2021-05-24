import React,{useState} from 'react'

function YourGreatProject() {
    const [records, setRecords] = useState({
        name: "",
        company: "",
        email: "",
        budget: "",
        textarea: "",
        timeframe: "1",
        projects: []
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
        if(records.budget==""){
            return false;
        }
        if(records.company==""){
            return false;
        }
        return true;
    }
    
    const handleProject = e =>{
        const value = e.target.value;
        if(e.target.checked){
            records.projects.push(value);
        }
        else{
            const index = records.projects.indexOf(value);
            records.projects.splice(index,1);
        }
        
    }

    return (
        <div className="form-back">
            <p className="super-bold">Let's craft your product.</p>
            <form>
                <div className="container">
                    <div>
                        <h1>Timeframe</h1>
                        <div>
                            <input type="radio" onChange={handleInput} id="timeframe1" name="timeframe" value="1"/>
                            <label className="text-back" htmlFor="timeframe1">1 month</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleInput} id="timeframe2" name="timeframe" value="3"/>
                            <label className="text-back" htmlFor="timeframe2">2-3 month</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleInput} id="timeframe3" name="timeframe" value="4"/>
                            <label className="text-back" htmlFor="timeframe3">4+ month</label>
                        </div>

                        <h1>Project type</h1>
                        <div>
                            <input type="checkbox" onChange={handleProject} id="project1" name="desktop" value="desktop"/>
                            <label className="text-back" htmlFor="project1">Desktop</label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={handleProject} id="project2" name="web" value="web"/>
                            <label className="text-back" htmlFor="project2">Web</label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={handleProject} id="project3" name="mobile" value="mobile"/>
                            <label className="text-back" htmlFor="project3">Mobile</label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={handleProject} id="project4" name="other" value="other"/>
                            <label className="text-back" htmlFor="project4">Other</label>
                        </div>
                    </div>
                    <div>
                        <h1>Personal Details</h1>
                        <div>
                            <input className="text-back" type="text" onChange={handleInput} value={records.name} name="name" placeholder="Name" required/>
                        </div>
                        <div>
                            <input className="text-back" type="text" onChange={handleInput} value={records.company} name="company" placeholder="Company" required/>
                        </div>
                        <div>
                            <input className="text-back" type="email" onChange={handleInput} value={records.email} name="email" placeholder="Email" required/>
                        </div>
                        <div>
                            <input className="text-back" type="text" onChange={handleInput} value={records.budget} name="budget" placeholder="Budget" required/>
                        </div>
                    </div>
                    <div style={{"paddingTop": "5.3em"}}>
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

export default YourGreatProject
