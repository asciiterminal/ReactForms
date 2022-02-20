import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    //Event is the event that
    //got triggered by {onChange}
    console.log(event.target.value);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
    //What the event is able to target
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
    //Note: when adding variables for example if you
    //put {headingText} then pass it as a JS object
    //in curly {} into html otherwise you can just pass (name) as
    //a property.
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      {/* {name} shows real-time entry of {setName} target value but doesn't save it 
    since its {onChange} but {headingText} saves the Entry once the "submit" button is triggered
    since it takes {name} but is from {onClick} */}
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
        // These are called controlled components
      />
      <button onClick={handleClick}>Submit</button>
    </div>
    //We used to put input tags into html <form/> tags
    //but by default everything in the "form" refreshes the
    //trigger effects to refresh the page in order to create
    //a POST request hence it being a "form" but we are
    //not using such methods in this project because we are not
    //making any requests at the moment.
    //Although if you do use "forms" and avoid any requests then use the command
    //{event.preventDefault()}
  );
}

export default App;

//setName
