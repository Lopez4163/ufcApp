// import React, { useState } from "react";
// import fighterListArray from "../fighterlistArray.json";
// import "../styling/Card.css";
// import ReactCardFlip from "react-card-flip";
// let altImage = "src/assets/tonyAlt.jpg";

// // eslint-disable-next-line react/prop-types
// function Card({ fighters, setSelectedCard }) {
//   const [flippedCardId, setFlippedCardId] = useState(null);

//   const handleFlip = (fighter) => {
//     setFlippedCardId((prevFlippedCardId) =>
//       prevFlippedCardId === fighter.id ? null : fighter.id
//     );
//     setSelectedCard(fighter);
//   };

//   return (
//     <div className="fighterList">
//       {fighters.length === 0 ? (
// <div className="none-found">
//   {/*<p className="none-found-text">No fighters found</p>*/}
//   <iframe
//     src="https://giphy.com/embed/qrr9p5kGVbEeq9Dmcq"
//     frameBorder="0"
//     className="none-found-giphy"
//     allowFullScreen
//   ></iframe>
//   <h2 className="giphy-text">404 ERROR: NO FIGHTERS FOUND</h2>
// </div>
//       ) : (
//           // eslint-disable-next-line react/prop-types
//         fighters.map((fighter) => (

//           <ReactCardFlip
//           key={fighter.id} isFlipped={fighter.id === flippedCardId} flipDirection="horizontal"
//           >
//               <div key={fighter.name} className='card'>
//                   <div className="card-front" onClick={() => handleFlip(fighter)}>
//                    <div className='fighter-image-wrapper'>
//                     <img
//                         alt={fighter.name}
//                         className={`fight-card-image`}
//                         src={fighter.imgSrc}
//                         onError={(e) => {
//                           e.target.src = altImage;
//                           e.target.className = "broken-image";
//                           e.target.onerror = null;
//                         }}
//                     />
//                   </div>
//                   <div className="card-fighter-info">
//                     <h2 className="card-fighter-name">{fighter.name}</h2>{" "}
//                     <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
//                     <h5 className="card-fighter-weightclass">
//                       {fighter.weightClass}
//                     </h5>
//                     <p className="card-fighter-record">
//                       <span>{fighter.record}</span>
//                     </p>
//                   </div>
//                 </div>
//                 </div>
//                 <div className="card card-back " onClick={() => handleFlip(fighter)}>
//                 <div className="card-fighter-info">
//                     <h2 className="card-fighter-name">{fighter.name}</h2>{" "}
//                     <h4 className="card-fighter-nickname">{fighter.nickname}</h4>
//                     <h5 className="card-fighter-weightclass">
//                       {fighter.weightClass}
//                     </h5>
//                     <p className="card-fighter-record">
//                       <span>{fighter.record}</span>
//                     </p>
//                   </div>
//                 </div>
//           </ReactCardFlip>
//         ))
//       )}
//     </div>
//   );
// }

// export default Card;

// Card.jsx
import React, { useState, useEffect, useRef } from "react";
import FighterCard from "./FighterCard";
import BackToTop from "./BackToTop.jsx";
import "../styling/Card.css";

function Card({ fighters, setSelectedCard }) {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const fighterListRef = useRef(null); // Initialize the ref with null

  const handleFlip = (clickedFighter) => {
    setFlippedCardId((prevFlippedCardId) =>
      prevFlippedCardId === clickedFighter.name ? null : clickedFighter.name,
    );
  };

  return (
    <div className="fighterList-wrapper">
      <div className="fighterList" ref={fighterListRef}>
        {fighters.length === 0 ? (
          <div className="none-found-wrapper">
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
          </div>
        ) : (
          fighters.map((fighter) => (
            <div
              key={fighter.name}
              className="fighter-card-component"
              ref={fighterListRef}
            >
              <FighterCard
                fighter={fighter}
                isFlipped={fighter.name === flippedCardId}
                handleFlip={() => handleFlip(fighter)}
              />
            </div>
          ))
        )}
        <BackToTop fighterListRef={fighterListRef} />
      </div>
    </div>
  );
}

export default Card;
