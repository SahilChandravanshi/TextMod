import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
        </button>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(function(n) { return n !== '' })
       .length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(function(n) { return n !== '' })
       .length } minutes to read</p>
        <h3>Preview</h3>
        <p>{ text}</p>
      </div>
    </>
  );
}
