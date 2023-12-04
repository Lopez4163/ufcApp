import React from "react";

const GenderFilterButton = ({ onShowAll, onShowMale, onShowFemale  }) => {
  return(
      <div className='gender-Filter-Buttons'>
        <button onClick={onShowAll}> All Fighters</button>
        <button onClick={onShowMale}>Male Fighters</button>
          <button onClick={onShowFemale}>Female Fighters</button>
      </div>

)
};

export default GenderFilterButton;
