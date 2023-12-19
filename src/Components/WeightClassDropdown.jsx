// WeightClassDropdown.jsx
import React from "react";
import "../styling/Navbar.css";

const WeightClassDropdown = ({ weightClasses, onSelectWeightClass }) => {
    const handleSelectChange = (e) => {
        const selectedWeightClass = e.target.value;
        onSelectWeightClass(selectedWeightClass);
    };

    return (
        <select className='drop-down' onChange={handleSelectChange}>
            <option value="">Select Weight Class</option>
            {weightClasses.map((weightClass) => (
                <option key={weightClass} value={weightClass}>
                    {weightClass}
                </option>
            ))}
        </select>
    );
};

export default WeightClassDropdown;
