// FighterCard.jsx
import React from "react";
import ReactCardFlip from "react-card-flip";
import "../styling/Card.css";
let altImage = "src/assets/tonyAlt.jpg";

function FighterCard({ fighter, isFlipped, handleFlip }) {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className={`card card-front ${isFlipped ? 'card-flipped' : ''}`} onClick={() => handleFlip(fighter)}>
        <div className="fighter-image-wrapper">
          <img
            alt={fighter.name}
            className={`fight-card-image`}
            src={fighter.imgSrc}
            onError={(e) => {
              e.target.src = altImage;
              e.target.className = "broken-image";
              e.target.onerror = null;
            }}
          />
        </div>
        <div className="card-fighter-info">
          <h2 className="card-fighter-name">{fighter.name}</h2>{" "}
          <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
          <h5 className="card-fighter-weightclass">{fighter.weightClass}</h5>
          <p className="card-fighter-record">
            <span>{fighter.record}</span>
          </p>
        </div>
      </div>
      <div className={`card card-back ${isFlipped ? 'card-flipped' : ''}`} onClick={() => handleFlip(fighter)}>
      <div className="fighter-image-wrapper">
          <img
            alt={fighter.name}
            className={`fight-card-image`}
            src={fighter.imgSrc}
            onError={(e) => {
              e.target.src = altImage;
              e.target.className = "broken-image";
              e.target.onerror = null;
            }}
          />
        </div>
        <div className="card-fighter-info">
          <h2 className="card-fighter-name">{fighter.name}</h2>{" "}
          <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
          <h5 className="card-fighter-weightclass">{fighter.weightClass}</h5>
          <p className="card-fighter-record">
            <span>{fighter.record}</span>
          </p>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default FighterCard;
