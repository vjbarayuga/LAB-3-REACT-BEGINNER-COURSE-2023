import "./App.css";
import { User } from "./User";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lukas"];

  const users = [
    {name: "Pedrito", age: 21},
    {name: "Jakes", age: 25},
    {name: "Jessicana", age: 45},
  ];

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
    
    <h1> {names[0]} </h1>

    {names.map((name, key) => {
      return <h1 key={key}> {name} </h1>;

    })}

      {/* you can do it this way or 
      do it the other way, check the react way below */}

      {/* {users.map((user, key) => {
        return (
          <div> 
          {user.pangalan} {user.age} 
          </div>
        );

      })} */}

      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
     

    </div>

   
    

  );
}



export default App;