import React from "react";
import "../styling/GenderFiltersButton.css";

const GenderFilterButton = ({ filterFighters }) => {
  const weightClasses = [
    "Strawweight",
    "Flyweight",
    "Bantamweight",
    "Featherweight",
    "Lightweight",
    "Welterweight",
    "Middleweight",
    "Light Heavyweight",
    "Heavyweight",
  ];

  const handleSelectChange = (event) => {
    const selectedWeightClass = event.target.value;
    filterFighters(selectedWeightClass, null);
  };

  const handleGenderClick = (gender) => {
    filterFighters(null, gender);
  };

  return (
    <div className="gender-filter-buttons">
      <button className="all-button" onClick={() => filterFighters(null, null)}>
        <span>All Fighters</span>
      </button>
      <button className="male-button" onClick={() => handleGenderClick("Male")}>
        Male Fighters
      </button>

      <button
        className="female-button"
        onClick={() => handleGenderClick("Female")}
      >
        Female Fighters
      </button>
      <select onChange={handleSelectChange} className="select-dropdown">
        <option value={""}>Select Weight Class</option>
        {weightClasses.map((weightClass) => (
          <option key={weightClass} value={weightClass}>
            {weightClass}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenderFilterButton;
