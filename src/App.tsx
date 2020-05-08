import React from "react";
import "./App.css";

import { PetContainer } from "./components/PetContainer";
import StateDemo from "./components/StateDemo";
import EventDemo from "./components/EventDemo";

function App() {
  return (
    <div className="App">
      <PetContainer />
      <StateDemo />
      <EventDemo />
    </div>
  );
}

export default App;
