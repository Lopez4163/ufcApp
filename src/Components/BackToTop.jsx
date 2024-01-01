// BackToTop.jsx
import React, { useState, useEffect } from "react";
import "../styling/BacktoTop.css";

const BackToTop = ({ fighterListRef }) => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (fighterListRef.current) {
        const threshold = 100;

        if (fighterListRef.current.scrollTop > threshold && !backToTop) {
          setBackToTop(true);
        } else if (fighterListRef.current.scrollTop <= threshold && backToTop) {
          setBackToTop(false);
        }
      }
    };

    if (fighterListRef.current) {
      fighterListRef.current.addEventListener("scroll", handleScroll);

      return () => {
        fighterListRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, [fighterListRef, backToTop]);

  const scrollUp = () => {
    if (fighterListRef.current) {
      fighterListRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`back-to-top-overlay ${backToTop ? "visible" : ""}`}>
      <button className="back-to-top" onClick={scrollUp}>
        Back to Top
      </button>
    </div>
  );
};

export default BackToTop;
