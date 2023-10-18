import React,{useState} from 'react'

export default function TextForm(props) {

  function handleUpClick(){
    let text2= text.toUpperCase();
    setText(text2)
  }
  function handleLoClick(){
    let text2= text.toLowerCase();
    setText(text2)
  }
  const handleOnChage= (event) =>{
    setText(event.target.value)
  }
  const handleCopy=()=>{
     let text2 =document.getElementById("myBox");
     text2.select();
     navigator.clipboard.writeText(text2.value); //use copy text API
  }
  function handleClearClick(){
    let text2= '';
    setText(text2)
  }
    const[text, setText]=useState("");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className='form-control' onChange={handleOnChage} value={text} id="myBox" rows="8"></textarea>
      </div>
        <button className='btn btn-primary mx-1 mb-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1 mb-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1 mb-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 mb-1' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container'>
      <h2>Text Summary</h2>
      <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> Characters</p>
      <p><b>{0.008 * text.split(" ").length}</b>Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
