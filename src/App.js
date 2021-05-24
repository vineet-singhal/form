import React,{useState} from "react";
import './App.css';
import HomeContact from './components/contact/HomeContact';
import Form from "./components/form/Form";

function App() {
  const [value, setValue] = useState("")

  const handleSetValue = value1 =>{
    setValue(value1);
  }

  return (
    <>
    {value==""?<HomeContact setValue={handleSetValue}/>:<Form value={value} setValue={handleSetValue}/>}
    </>
  );
}

export default App;
