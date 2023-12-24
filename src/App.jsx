import { useState } from "react";
import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import CookieConsent from "./Components/CookieConsent.jsx";
import fighterListArray from "./fighterlistArray.json";
import "./App.css";

function App() {
    const [fighterArray, setFighterArray] = useState(fighterListArray);
    const [filteredFighterListArray, setFilteredFighterListArray] = useState(fighterListArray);
    const [selectedCard, setSelectedCard] = useState(null);
    const [gender, setGender] = useState(null); // Add a gender state

    const filterFighters = (weightClass, gender) => {
        console.log("Filtering fighters:", weightClass, gender);
        let filteredFighters = [...fighterArray];

        if (weightClass) {
            filteredFighters = filteredFighters.filter((fighter) =>
                fighter.weightClass.includes(weightClass)
            );
        }

        if (gender) {
            if (weightClass === null) {
                filteredFighters = filteredFighters.filter((fighter) =>
                    gender === "Male" ? !fighter.weightClass.includes("Women's") : fighter.weightClass.includes("Women's")
                );
            } else if (weightClass === "Flyweight") {
                const flyweightArray = filteredFighters.filter((fighter) => fighter.weightClass.includes("Flyweight"));
                if (gender === 'Female') {
                    filteredFighters = flyweightArray.filter(
                        (fighter) => fighter.weightClass.includes('Women\'s Flyweight')
                    );
                }
            } else if (weightClass === "Bantamweight") {
                filteredFighters = filteredFighters.filter((fighter) =>
                    gender === "Male" ? !fighter.weightClass.includes("Women's") : fighter.weightClass.includes("Bantamweight")
                );
            }
        }
        console.log("Filtered fighters:", filteredFighters);
        setFilteredFighterListArray(filteredFighters);
    };

    const searchFighters = (searchTerm) => {
        const filteredFighters = fighterArray.filter((fighter) =>
            Object.values(fighter).some((value) =>
                value.toLowerCase().includes(searchTerm)
            )
        );
        setFilteredFighterListArray(filteredFighters);
    };

    return (
        <div className="app-container">
            <Navbar
                filterFighters={filterFighters}
                onShowAll={() => filterFighters(null, null)}
                onShowMale={() => filterFighters(null, "Male")}
                onShowFemale={() => filterFighters(null, "Female")}
                onShowStrawWeight={() => filterFighters("Strawweight", gender)}
                onShowFlyWeight={() => filterFighters("Flyweight", gender)}
                onShowBantamWeight={() => filterFighters("Bantamweight", gender)}
                onShowFeatherWeight={() => filterFighters("Featherweight", gender)}
                onShowLightWeight={() => filterFighters("Lightweight", gender)}
                onShowWelterWeight={() => filterFighters("Welterweight", gender)}
                onShowMiddleWeight={() => filterFighters("Middleweight", gender)}
                onShowLightHeavyWeight={() => filterFighters("Light Heavyweight", gender)}
                onShowHeavyWeight={() => filterFighters("Heavyweight", gender)}
                onSearch={searchFighters}
            />
            <Card
                fighters={filteredFighterListArray}
                setSelectedCard={setSelectedCard}
            />
            <CookieConsent />
        </div>
    );
}

export default App;