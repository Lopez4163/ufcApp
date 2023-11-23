import React from "react";
import pageData from "../pageData.json";
import "../styling/Card.css";
let altImage = "src/assets/tonyAlt.jpg";

function Card() {
  return (
    <div className="fighterList">
      {pageData.map((fighter) => (
        <div key={fighter.name} className="fighter-card">
          <img
            alt={fighter.name}
            className={`fight-card-image ${fighter.alt ? "alt-image" : ""}`}
            src={fighter.imgSrc}
            onError={(e) => {
              e.target.src = altImage;
              e.target.onerror = null;
            }}
          />

          <div className="card-fighter-info">
            <h2 className="card-fighter-name">{fighter.name}</h2>{" "}
            <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
            <h5 className="card-fighter-weightclass">{fighter.weightClass}</h5>
            <p className="card-fighter-record">
              <span>{fighter.record}</span>
            </p>
            {/* Other properties */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
