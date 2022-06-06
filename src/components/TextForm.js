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
  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      setText(event.target.result);
    };
    reader.readAsText(file);
  };

  const SenCase = () => {
    let firstchar = text.charAt(0);
    let newText = firstchar.toUpperCase();
    setText(newText + text.slice(1));
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };
  const speak = () => {
    let message = new SpeechSynthesisUtterance();
    message.text = text;
    window.speechSynthesis.speak(message);
  };
  const copyIt = (event) => {
    setText(event.target.value);
    let newtext = navigator.clipboard.writeText(text);
    console.log(newtext);
    alert("text copied successfully");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'#1f2023'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <input
            type="file"
            className="btn btn-secondary my-3"
            accept="text/plain"
            onChange={readTxt}
          />
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode==='dark'?'#1f2023':'white',color: props.mode==='dark'?'white':'#1f2023'}}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={SenCase}>
          Convert To Sentence Case
        </button>

        <button className="btn btn-success mx-2 my-2" onClick={copyIt}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-4" style = {{color: props.mode==='dark'?'white':'#1f2023'}}>
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter(function (n) {
              return n !== "";
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter(function (n) {
              return n !== "";
            }).length}{" "}
          minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
