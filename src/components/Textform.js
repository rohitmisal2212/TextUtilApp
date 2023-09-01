import React, { useState } from "react";

export default function Textform(props) {

  const copy = () => {
    navigator.clipboard.writeText(text)
  }
  const handleUPClick = () => {
    console.log("Upper case Was click\n" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Converted to  Uppercase ")
    document.title = "Upper case hit"
  };
  const onChangeFunction = (event) => {
    console.log("on change value");
    setText(event.target.value);
  };
  const handleLOWClick = () => {
    console.log("Lower case Was click\n" + text);
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("success", "Converted to Lowercase ")
  };
  const [text, setText] = useState("");
  // text = "new  set text "
  // setText("new text");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "#cea978" }} onChange={onChangeFunction} id="exampleFormControlTextarea1" rows="8">
          </textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUPClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLOWClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={copy}>
          Copy
        </button>
      </div>
      <div className="container">
        <h4 className="my-2">YOUR TEXT SUMMERY</h4>
        <p>
          YOUR WORD {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} NUMBER OF WORDS {text.length}
        </p>
        <p>YOUR READ TIME IS {text.split(" ").filter((element) => { return element }).length * 0.25} SECONDS</p>
        <h3>Previvew</h3>
        <h5>{text.length > 0 ? text : "Nothing to previvew"}</h5>
      </div>
    </>
  );
}
