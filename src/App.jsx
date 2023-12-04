import { useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import fighterListArray from "./fighterlistArray.json";
import "./App.css";


function App( ) {
  const [fighterArray, setFighterArray] = useState(fighterListArray);
  const [filteredFighterListArray, setFilteredFighterListArray] = useState(
      fighterListArray
  );
  const showAllFighters = () => {
    setFilteredFighterListArray(fighterArray);

  };
  const showMaleFighters = () => {
    const maleFighters = fighterArray.filter(
        (fighter) =>
            !fighter.weightClass.includes("Women's")
    );
    setFilteredFighterListArray(maleFighters);
  };
  const showFemaleFighters = () => {
    const femaleFighters = fighterArray.filter(
        (fighter) =>
            fighter.weightClass.includes("Women's")
    );
    setFilteredFighterListArray(femaleFighters);
  };
  const searchFighters = (searchTerm) => {
    const filteredFighters = fighterArray.filter((fighter) =>
        Object.values(fighter).some((value) =>
        value.toLowerCase().includes(searchTerm)
        )
    )
    setFilteredFighterListArray(filteredFighters);
  }

  return (
      <div className="app-container">
        <Navbar
            onShowAll={showAllFighters}
            onShowMale={showMaleFighters}
            onShowFemale={showFemaleFighters}
            onSearch={searchFighters}
        />
        <Card fighters={filteredFighterListArray} />
      </div>
  );
}

export default App;
