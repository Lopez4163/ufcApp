import { useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import fighterListArray from "./fighterlistArray.json";

import "./App.css";

function App() {
  const [fighterArray, setFighterArray] = useState(fighterListArray);
  const [filteredFighterListArray, setFilteredFighterListArray] =
    useState(fighterListArray);

  const maleFighterFilter = () => {
    const filteredList = fighterArray.filter(
      (fighter) => !fighter.weightClass.toLowerCase().includes("Women's"),
    );
    setFilteredFighterListArray(filteredList);
  };

  return (
    <div className="app-container">
      <Navbar onFilter={maleFighterFilter} />
      <Card onFilter={filteredFighterListArray} />
      {/*<Card onFilter={() => filteredFighterListArray} />*/}
    </div>
  );
}

export default App;
