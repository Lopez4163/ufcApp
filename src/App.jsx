import { useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import fighterListArray from "./fighterlistArray.json";
import "./App.css";

function App() {
  const [fighterArray, setFighterArray] = useState(fighterListArray);
  const [filteredFighterListArray, setFilteredFighterListArray] = useState(
      fighterListArray
  );
  const showAllFighters = () => {
    setFilteredFighterListArray(fighterArray);
    console.log(fighterArray)
  };
  const showMaleFighters = () => {
    const maleFighters = fighterArray.filter(
        (fighter) =>
            !fighter.weightClass.includes("Women's")
    );
    setFilteredFighterListArray(maleFighters);
    console.log(maleFighters);
  };
  const showFemaleFighters = () => {
    const femaleFighters = fighterArray.filter(
        (fighter) =>
            fighter.weightClass.includes("Women's")
    );
    setFilteredFighterListArray(femaleFighters);
    console.log(femaleFighters);
  };

  return (
      <div className="app-container">
        <Navbar
            onShowAll={showAllFighters}
            onShowMale={showMaleFighters}
            onShowFemale={showFemaleFighters}
        />
        <Card fighters={filteredFighterListArray} />
      </div>
  );
}

export default App;
