import React, { useEffect } from "react";
import lax from "lax.js";

import backToTopWrapperRes from "/images/back-to-top-ring-res.png";
import backToTopWrapperAbt from "/images/back-to-top-ring-abt.png";

export default function BacktoTop(props) {
  const { page } = props;
  //   let topButton;

  //   window.onscroll = () => {
  //     topButton = document.getElementById("back-to-top-button");
  //     scrollFunction(topButton);
  //   };

  const showButton = (topButton) => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    //setup lax
    window.lax = { presets: lax.presets };
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });
  }, []);

  return (
    <nav className="back-to-top-wrapper">
      {page === "about" ? (
        <img
          className="back-to-top-ring"
          src={backToTopWrapperAbt}
          alt="text saying about, wrapped in a rotating circle"
          id="spinner"
        />
      ) : (
        <></>
      )}
      {page === "residency" ? (
        <img
          className="back-to-top-ring"
          src={backToTopWrapperRes}
          alt="text saying residency, wrapped in a rotating circle"
          id="spinner"
        />
      ) : (
        <></>
      )}
      <button
        onClick={backToTop}
        className="back-to-top-button"
        id="back-to-top-button"
      >
        top
      </button>
    </nav>
  );
}
