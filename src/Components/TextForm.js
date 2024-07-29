import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("The button has been clicked"+ text);
    const NewText = text.toUpperCase();
    setText(NewText);
    props.ShowAlert('Text is converted to Uppercase','success');
  }
  const handleLowClick = ()=>{
    // console.log("The button has been clicked"+ text);
    const NewText = text.toLowerCase();
    setText(NewText);
    props.ShowAlert('Text is converted to Lowercase','success');
  }
  const handleTitleClick = ()=>{
    //This event function will convert text into Title case...
    const titlecase = (str)=>{
      return str.toLowerCase().split(' ').map(function (word){
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
    }
    const NewText = titlecase(text);
    setText(NewText);
    props.ShowAlert('Text is converted to Titlecase','success');
  }

  const handleClearClick=()=>{
    setText('');
    props.ShowAlert('Text is cleared','success');
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter Text Here:");

  //To calculate the words and characters
  const words = text.split(/\s+/).filter((element)=> element.length!==0).length;
  const char_c = text.length;
  return (
    <div>
      <h1 style={{color: props.mode==='light'?'#042743':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"  value = {text}
          id="myBox" onChange={handleOnChange}
          rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert text to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert text to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Convert text to Titlecase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

      <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
      <h1>{props.subheading}</h1>
      
      <p> {words} and {char_c} characters</p>
      <p>{words * 0.008} Minutes required to read</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:'Write Something to Preview'}</p>

      </div>
    </div>
  );
}
