import "./App.css";
import { useState } from "react";

function App() {
  // This only applies to vanilla javascript
  // let age = 0;
  
  // const increaseAge = () => {
  //   age = age + 1;
  //   console.log(age);
  // };

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  //state for input value
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setInputValue(event.target.value);

  };

  //state for show or hide text
  const [showText, setShowText] = useState(true);


  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

      {count}

      {/* This only applies to vanilla javascript */}
      {/* {age}
      <button onClick={increaseAge}> Increase Age </button> */}

      <input type="text" onChange={handleInputChange}/>
      {inputValue}

      <button onClick={() => {setShowText(!showText)}}> Show/Hide Text </button>
      {showText === true && <h1> HI MY NAME IS VJ </h1>}
    </div>
  );
}

export default App;
