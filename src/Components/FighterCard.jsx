// FighterCard.jsx
import React, { useState } from "react";
import countryFlagEmoji from "country-flag-emoji";
import ReactCardFlip from "react-card-flip";
import "../styling/FighterCard.css";
import tonyAlt from "../assets/tonyAlt.png";

function FighterCard({ fighter, isFlipped, handleFlip }) {
  return (
    // <div className="card-wrapper">
    //   <ReactCardFlip
    //     isFlipped={isFlipped}
    //     flipDirection="horizontal"
    //     behavior="click"
    //     flipSpeedBackToFront={0.6}
    //     flipSpeedFrontToBack={0.6}
    //   >
    //     <div
    //       className={`card card-front ${isFlipped ? "card-hidden" : ""}`}
    //       onClick={() => handleFlip(fighter)}
    //     >
    //       <div className="card-fighter-info-front">
    //         <div className="fighter-image-wrapper">
    //           <img
    //             alt={fighter.name}
    //             className={`fight-card-image`}
    //             src={fighter.imgSrc}
    //             onError={(e) => {
    //               e.target.src = altImage;
    //               e.target.className = "broken-image";
    //               e.target.onerror = null;
    //             }}
    //           />
    //         </div>
    //         <div className="card-fighter-info">
    //           <h2 className="card-fighter-name">{fighter.name}</h2>{" "}
    //           <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
    //           <h5 className="card-fighter-weightclass">
    //             {fighter.weightClass}
    //           </h5>
    //           <p className="card-fighter-record">
    //             <span>{fighter.record}</span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className={`card card-back ${isFlipped ? "card-hidden" : ""}`}
    //       onClick={() => handleFlip(fighter)}
    //     >
    //       <div className="card-fighter-info-back">
    //         <div className="card-fighter-info">
    //           <h>{fighter.POB}</h>
    //           <h4>{fighter.nickname}</h4>
    //           <h5>{fighter.weightClass}</h5>
    //           <p>
    //             <span>{fighter.record}</span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </ReactCardFlip>
    // </div>
    <div>
      <ReactCardFlip flipDirection={"horizontal"} isFlipped={isFlipped}>
        <div className="card" onClick={() => handleFlip(fighter)}>
          <div className="card-fighter-front-info">
            <div className="fighter-image-wrapper">
              <img
                alt={fighter.name}
                className={`fighter-card-front-image ${
                  fighter.imgError ? "broken-image" : ""
                }`}
                src={fighter.imgSrc}
                onError={(e) => {
                  e.target.src = tonyAlt;
                  e.target.className = "broken-image";
                  e.target.onerror = null;
                }}
              />
            </div>
            <div className="card-fighter-front-stats">
              <h2 className="card-fighter-front-name">{fighter.name}</h2>
              <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
              <h5 className="card-fighter-weightclass">
                {fighter.weightClass}
              </h5>
              <p className="card-fighter-record">
                <span>{fighter.record}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card-back" onClick={() => handleFlip(fighter)}>
          <div className="card-fighter-back-info">
            <div className="special-stas">
              {" "}
              <h3
                className={`special-stat ${
                  fighter.SpecialStatsOne === "N/A" ? "hidden" : ""
                }`}
              >
                {fighter.SpecialStatsOne} 👊
              </h3>
              <h3
                className={`special-stat ${
                  fighter.SpecialStatTwo === "N/A" ? "hidden" : ""
                }`}
              >
                {fighter.SpecialStatTwo} 💀
              </h3>
              <div className="representing-pob">
                <div className="stat-label">
                  <h4 className="label">Representing:</h4>
                </div>
                <div className="stat">
                  <h3 className="row representing-pob">{fighter.POB}</h3>
                </div>
              </div>
            </div>
            <div className="row age">
              <div className="stat-label">
                <h3 className="label">Age:</h3>
              </div>
              <div className="stat">
                <h3 className="age">{fighter.age}</h3>
              </div>
            </div>

            <div className="row striking-accuracy">
              <div className="stat-label">
                <h3 className="label">Striking Accuracy 🎯:</h3>
              </div>
              <div className="stat">
                <h3 className="striking-accuracy">{fighter.strikeAccuracy}</h3>
              </div>
            </div>

            <div className="row sig-strikes-attempted">
              <div className="stat-label">
                <h3 className="label">Sig. Strikes Attempted:</h3>
              </div>
              <div className="stat">
                <h3 className="sig-strikes-attempted">
                  {fighter.sigStrikesAttempt}
                </h3>
              </div>
            </div>

            <div className="row sig-strikes-landed-per-min">
              <div className="stat-label">
                <h3 className="label">Sig. Strikes Landed PM:</h3>
              </div>
              <div className="stat">
                <h3 className="sig-strikes-landed-per-min">
                  {fighter.sigStrikesLandedPM}
                </h3>
              </div>
            </div>

            <div className="row sig-strike-defense">
              <div className="stat-label">
                <h3 className="label">Sig. Strike Defense🛡:</h3>
              </div>
              <div className="stat">
                <h3 className="sig-strike-defense">{fighter.sisStrDefense}</h3>
              </div>
            </div>

            <div className="row average-fight-time">
              <div className="stat-label">
                <h3 className="label">Average Fight Time ⏱:</h3>
              </div>
              <div className="stat">
                <h3 className="average-fight-time">
                  {fighter.averageFightTime}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FighterCard;
