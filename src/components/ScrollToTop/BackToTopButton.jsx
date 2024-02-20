import React from "react";
import { useEffect, useState } from "react";
import "./BackToTopButton.css";

function BackToTopButton() {
  const [backtoTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Button2">
      {backtoTopButton && (
        <button className="Button" onClick={scrollUp}>
          <i class="fa-solid fa-jet-fighter"></i>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
