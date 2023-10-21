
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextForm from './components/TextForm';
import React , {useState} from "react";

function App() {
  const[mode,setMode]=useState('light');
  const toggle=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="gray";
      document.title= "TextUtils - Dark Mode"
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.title= "TextUtils - Light Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleBtn={toggle}/>
      <div className='container my-3'>
{/*         
          <Switch>
          <Route path="/about" component={About} /> */}
            
            {/* <Route path="/"> */}
              <TextForm heading="Enter the text to analyze" mode={mode}/>
            {/* </Route>
          </Switch> */}
      </div>
      
      {/* </Router> */}
    </>
  );
}

export default App;
