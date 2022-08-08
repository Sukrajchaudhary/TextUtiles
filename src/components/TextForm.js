import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        var NewText = text.toUpperCase();
        setText(NewText);
    }

    const handleLoClick = () => {
        console.log("Uppercase was clicked");
        var NewText = text.toLowerCase();
        setText(NewText);
        props.showAlert("Lower Case is Alert","success");
    }

    const handleClearClick = () => {
        console.log("Uppercase was clicked");
        var NewText = '';
        setText(NewText);
    }

     const handleOnChange = (events) => {
         console.log("on change");
        setText(events.target.value);
     }
    // Button
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3 xm-12">
                    <h1  className="my-2">{props.heading}</h1>
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button className="btn btn-success shadow-lg  rounded mx-2"  onClick={handleUpClick}>Change INTO Uppercase</button>
                <button className="btn btn-success shadow-lg  rounded mx-2" onClick={handleLoClick}>Change INTO Lowecase</button>
                <button className="btn btn-success shadow-lg  rounded mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h4>Text Summary</h4>
                <p>No of Words: {text.split(" ").length} <br /> No of Characters: {text.length} </p>
                <p> Time To Reads: {0.0088 * text.split(" ").length} Minutes</p>
                <h3>Preview</h3>
                <p> {text.length>0?text:"Enter Your Text"}</p>
                

            </div>
        </>
    )
}
