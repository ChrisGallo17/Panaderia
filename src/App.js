import React, { useState} from 'react';
import Pastry from './components/pastry';
import Home from './Home'
import './App.css';

let pastryList = [
  { name: "Canoli", calories: 200, description: 'Italian pastries consisting of tube-shaped shells of fried pastry dough, filled with a sweet, creamy filling'},
  { name: "Napoleon", calories: 300, description: 'A light buttery flakey pastry filled with bavarian creme'},
  { name: "Croissant", calories: 150, description: 'A buttery, flaky, viennoiserie pastry'}
]

function App() {
  const [pastries, setPastries] = useState(pastryList);

  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <h1>Panaderia</h1>
      </header>
      <div className="pastryList">
        {
          pastries.map((v, i) => {
            return <Pastry key={'${i}${v.name}'} name={v.name} calories={v.calories} description={v.description} />
          })
        }
      </div>
    </div>
  );
}

export default App;
