// WeightClassDropdown.jsx

import React from "react";

const WeightClassDropdown = ({ weightClasses, onSelectWeightClass }) => {
    const handleSelectChange = (e) => {
        const selectedWeightClass = e.target.value;
        onSelectWeightClass(selectedWeightClass);
    };

    return (
        <select onChange={handleSelectChange}>
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
