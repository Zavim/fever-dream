import React, { useEffect } from "react";
import lax from "lax.js";

import backToTopWrapperRes from "/images/back-to-top-ring-res.png";

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

    //add elements
    lax.addElements("#spinner", {
      scrollY: {
        rotate: [
          [0, "pageHeight/1.2"],
          [0, 360],
        ],
      },
    });
  }, []);

  return (
    <>
      {page === "about" ? (
        <img
          className="back-to-top-wrapper"
          src={backToTopWrapperAbout}
          alt="text saying about, wrapped in a rotating circle"
          id="spinner"
        />
      ) : (
        <></>
      )}
      {page === "residency" ? (
        <img
          className="back-to-top-wrapper"
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
    </>
  );
}
