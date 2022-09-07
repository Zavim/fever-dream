import React, { useEffect } from "react";
import lax from "lax.js";

export default function LaxAnimController(props) {
  const { elements } = props;
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
    lax.addElements(".mission-container", {
      scrollY: {
        opacity: [
          ["elInY/5", "elOutY"],
          [1, 0],
        ],
      },
    });
    lax.addElements(".vision-container", {
      scrollY: {
        opacity: [
          ["elHeight", "elHeight*2.4"],
          [1, 0],
        ],
      },
    });
    lax.addElements("#jesse-board-bio", {
      scrollY: {
        opacity: [
          [1900, 2100],
          [1, 0],
        ],
      },
    });
    lax.addElements("#christine-board-bio", {
      scrollY: {
        opacity: [
          [2300, 2500],
          [1, 0],
        ],
      },
    });
    lax.addElements("#erin-board-bio", {
      scrollY: {
        opacity: [
          [2900, 3100],
          [1, 0],
        ],
      },
    });
    lax.addElements("#johnPaul-board-bio", {
      scrollY: {
        opacity: [
          [3400, 3600],
          [1, 0],
        ],
      },
    });
    lax.addElements("#maxmillian-board-bio", {
      scrollY: {
        opacity: [
          [4000, 4200],
          [1, 0],
        ],
      },
    });
  }, []);

  return <>{elements}</>;
}
