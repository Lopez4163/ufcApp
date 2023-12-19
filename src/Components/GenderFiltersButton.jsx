import React, { useState} from "react";
import WeightClassDropdown from "./WeightClassDropdown"; // Import the WeightClassDropdown component
import "../styling/GenderFiltersButton.css";

const GenderFilterButton = ({
                                onShowAll,
                                onShowMale,
                                onShowFemale,
                                onShowStrawWeight,
                                onShowFlyWeight,
                                onShowBantamWeight,
                                onShowFeatherWeight,
                                onShowLightWeight,
                                onShowWelterWeight,
                                onShowMiddleWeight,
                                onShowLightHeavyWeight,
                                onShowHeavyWeight,
                            }) => {
const weightClasses = [
    { name: 'Strawweight', handler: onShowStrawWeight },
    { name: 'Flyweight', handler: onShowFlyWeight },
    { name: 'Bantamweight', handler: onShowBantamWeight },
    { name: 'Featherweight', handler: onShowFeatherWeight },
    { name: 'Lightweight', handler: onShowLightWeight },
    { name: 'Welterweight', handler: onShowWelterWeight },
    { name: 'Middleweight', handler: onShowMiddleWeight },
    { name: 'Light Heavyweight', handler: onShowLightHeavyWeight },
    { name: 'Heavyweight', handler: onShowHeavyWeight },
];

    const handleSelectChange = (event) => {
        const selectedWeightClass = event.target.value;
        const weightClass = weightClasses.find(
            (weightClass) => weightClass.name === selectedWeightClass
        );

        if (weightClass) {
            weightClass.handler();
        } else {
            onShowAll();
        }
    };
    return (
        <div className="gender-filter-buttons">
            <button className="all-button" onClick={onShowAll}>
                <span>All Fighters</span>
            </button>
            <button className="male-button" onClick={onShowMale}>
                Male Fighters
            </button>
            <button className="female-button" onClick={onShowFemale}>
                Female Fighters
            </button>
            <select onChange={handleSelectChange} className='selecrt-dropdown'>
                <option value="">Select Weight Class</option>
                {weightClasses.map((weightClass) => (
                    <option key={weightClass.name} value={weightClass.name}>
                        {weightClass.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default GenderFilterButton;
