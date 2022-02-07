import React, { useState } from 'react'


export default function Textutils(props) {
    const [text, setText] = useState('');

    const toUpper = () => {
        console.log(text);
        if (text === undefined || text === "" || text === " ") {
            alert("Enter some text first");
        }
        else {
            console.log("Uppercase was clicked");
            let newText = text.toUpperCase();
            setText(newText);
            // originalText = text.toLower();
        }
    }

    const toLower = () => {
        if (text === undefined || text === "" || text === " ") {
            alert("Enter some text first");
        }
        else {
            console.log("Lowercase was clicked");
            let newText = text.toLowerCase();
            setText(newText);
        }
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const countWords = () => {
        if (text === undefined || text === "") {
            console.log();
            return 0;
        }
        else {
            return text.split(" ").filter((element)=> {return element.length!==0}).length;
        }
    }

    function countCharacters() {
        if (text === undefined || text === "") {
            console.log();
            return 0;
        }
        else {
            return text.length;
        }
    }

    const removeSpaces = ()=>{
        if (text === undefined || text === "") {
            alert("Enter some text first");

        }
        // let text = document.getElementById("exampleFormControlTextarea1").value;
        else{
            let newText = text.split(/[ ]+/);
            console.log(newText);
        setText(newText.join(" "));
        }
    }

    const copyText = ()=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        console.log(text);
        // text.select();
        navigator.clipboard.writeText(text.value);
        // text.getSelection().removeSelect();
    }

    const clearText = ()=>{
        setText("");
    }

    return (
        <>
           
            <div className='container' style={{color : props.Mode === 'dark'?'white':'#050554'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-2" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor : props.Mode === 'dark'?'#050554':'white',color:props.Mode==='dark'?'white':'#050554' }} placeholder='Enter text'  rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " disabled = {text.length === 0} onClick={toUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" disabled = {text.length === 0} onClick={toLower}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" disabled = {text.length === 0} onClick={removeSpaces}>Remove extra spaces</button>
                <button className="btn btn-primary mx-2 my-2" disabled = {text.length === 0} onClick={copyText}>Copy text</button>
                <button className="btn btn-primary mx-2 my-2" disabled = {text.length === 0} onClick={clearText}>Clear text</button>
                


            </div>
            <div className="container my-4 " style={{color: props.Mode==='light'?'#050554':'white'}}>
                <div className="summary" >

                    <h2>Text Summary</h2>
                    <p>{countWords()} words, {countCharacters()} charatcters</p>
                    <p>Estimated time required to read: {0.008 * countWords()} mins</p>
                </div>
                <div className="preview my-3">
                    <h2>Text Preview</h2>
                    {console.log(text)}
                    <p>{text.length?"No preview.":text}</p>

                </div>
            </div>
        </>
    )
}

