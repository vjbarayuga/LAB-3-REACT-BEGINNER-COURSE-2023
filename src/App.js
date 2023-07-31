import "./App.css";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];

  return (
    <div className="App">
      {planets.map(
        (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
      )
      }

      {/* //OR
      <div className="App">
        {planets.map((planet,key)=>{
            if (planet.isGasPlanet) return <h1>{planet.name}</h1>
        })}
      </div> */}
    
    <h1> {names[1]} </h1>

    </div>

    
  );
}

export default App;