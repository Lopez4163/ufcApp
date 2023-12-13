import { useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import fighterListArray from "./fighterlistArray.json";
import "./App.css";


function App( ) {
  const [fighterArray, setFighterArray] = useState(fighterListArray);
  const [filteredFighterListArray, setFilteredFighterListArray] = useState(fighterListArray);
  const [selectedCard, setSelectedCard] = useState(null);


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

  const showStrawWeight = () => {
    const strawWeight = fighterArray.filter(
        (fighter) =>
            fighter.weightClass.includes("Strawweight")
    );
    setFilteredFighterListArray(strawWeight);
  };
  const showFlyWeight = () => {
    const flyWeight = fighterArray.filter(
        (fighter) =>
            fighter.weightClass.includes("Flyweight")
    );
    setFilteredFighterListArray(flyWeight);
  }
  const showBantamWeight = () => {
    const bantamWeight = fighterArray.filter(
        (fighter) =>
            fighter.weightClass.includes("Bantamweight")
    );
    setFilteredFighterListArray(bantamWeight);
  }
  const showFeatherWeight = () => {
    const featherWeight = fighterArray.filter(
        (fighter) =>
            fighter.weightClass.includes("Featherweight")
    );
    setFilteredFighterListArray(featherWeight);
  }
  const showLightWeight = () => {
        const lightWeight = fighterArray.filter(
            (fighter) =>
                fighter.weightClass.includes("Lightweight")
        );
        setFilteredFighterListArray(lightWeight);
    }
    const showWelterWeight = () => {
        const welterWeight = fighterArray.filter(
            (fighter) =>
                fighter.weightClass.includes("Welterweight")
        );
        setFilteredFighterListArray(welterWeight);
    }
    const showMiddleWeight = () => {
        const middleWeight = fighterArray.filter(
            (fighter) =>
                fighter.weightClass.includes("Middleweight")
        );
        setFilteredFighterListArray(middleWeight);
    }
    const showLightHeavyWeight = () => {
        const lightHeavyWeight = fighterArray.filter(
            (fighter) =>
                fighter.weightClass.includes("Light Heavyweight")
        );
        setFilteredFighterListArray(lightHeavyWeight);
    }
    const showHeavyWeight = () => {
        const heavyWeight = fighterArray.filter(
            (fighter) =>
                fighter.weightClass.includes("Heavyweight")
        );
        setFilteredFighterListArray(heavyWeight);
    }
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
            onShowStrawWeight={showStrawWeight}
            onShowFlyWeight={showFlyWeight}
            onShowBantamWeight={showBantamWeight}
            onShowFeatherWeight={showFeatherWeight}
            onShowLightWeight={showLightWeight}
            onShowWelterWeight={showWelterWeight}
            onShowMiddleWeight={showMiddleWeight}
            onShowLightHeavyWeight={showLightHeavyWeight}
            onShowHeavyWeight={showHeavyWeight}
            onSearch={searchFighters}

        />
        <Card
            fighters={filteredFighterListArray}
            setSelectedCard={setSelectedCard}
        />
      </div>
  );
}

export default App;
