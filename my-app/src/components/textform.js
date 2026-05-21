import React, { useState } from 'react';

export default function TextForm() {
    const [text, setText] = useState("");

    const handleUppercase = () => {
        const textarea = document.getElementById("my box");
        const upperText = textarea.value.toUpperCase();
        setText(upperText);
        textarea.value = upperText;
    };
    const handleLowercase = () => {
        const textarea = document.getElementById("my box");
        const lowerText = textarea.value.toLowerCase();
        setText(lowerText);
        textarea.value = lowerText;
    };
    const handleClearText = () => {
        setText("");
        const textarea = document.getElementById("my box");
        textarea.value = "";
    };

    return (
        <div className="container">
            <h1>Enter text to analyze</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">type here</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="my box" rows="8" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>  
            </form>
            <button className="btn mx-2" onClick={handleUppercase}>Convert to Uppercase</button>
            <button className="btn mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
            <button className="btn mx-2" onClick={handleClearText}>Clear Text</button>

            <div className="container my-3">
                <h1>Text Analysis</h1>
                <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
            </div>
        </div>
    );
}