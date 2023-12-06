import React from "react";
import "../styling/GenderFiltersButton.css";
const GenderFilterButton = ({ onShowAll, onShowMale, onShowFemale  }) => {
  return(
      <div className='gender-filter-buttons'>
        <button className='all-button' onClick={onShowAll}><span>All Fighters</span></button>
        <button className='male-button' onClick={onShowMale}>Male Fighters</button>
          <button className='female-button' onClick={onShowFemale}>Female Fighters</button>
      </div>

)
};

export default GenderFilterButton;
