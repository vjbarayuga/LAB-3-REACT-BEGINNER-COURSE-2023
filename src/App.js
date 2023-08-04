import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const [catFact, setCatFact] = useState("");
  
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then(
      (res) => {
        setCatFact(res.data.fact);
      }
    );
  }

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };



  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <button onClick={() => fetchCatFact()}> 
      <h1> Generate Cat Fact </h1></button>

      <p> {generatedExcuse} </p>
      <p> {catFact} </p>
    </div>
  );
}

export default App;