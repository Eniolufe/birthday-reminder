import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./components/List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <section className="card">
        <h3 className="number">{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </div>
  );
}

export default App;
