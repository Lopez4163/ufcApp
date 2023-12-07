import React from "react";
import fighterListArray from "../fighterlistArray.json";
import "../styling/Card.css";
let altImage = "src/assets/tonyAlt.jpg";

// eslint-disable-next-line react/prop-types
function Card({ fighters }) {
  return (
    <div className="fighterList">
      {fighters.length === 0 ? (
        <div className="none-found">
          {/*<p className="none-found-text">No fighters found</p>*/}
          <iframe
            src="https://giphy.com/embed/qrr9p5kGVbEeq9Dmcq"
            frameBorder="0"
            className="none-found-giphy"
            allowFullScreen
          ></iframe>
          <h2 className="giphy-text">404 ERROR: NO FIGHTERS FOUND</h2>
        </div>
      ) : (
        fighters.map((fighter) => (
          <div key={fighter.name} className="fighter-card">
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

            <div className="card-fighter-info">
              <h2 className="card-fighter-name">{fighter.name}</h2>{" "}
              <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
              <h5 className="card-fighter-weightclass">
                {fighter.weightClass}
              </h5>
              <p className="card-fighter-record">
                <span>{fighter.record}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
