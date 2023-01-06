import React, { useEffect } from "react";
import lax from "lax.js";

export default function LaxAnimController(props) {
  const { elements } = props;
  useEffect(() => {
    //setup lax
    window.lax = { presets: lax.presets };
    lax.init();

    lax.addDriver(
      "scrollY",
      function () {
        return window.scrollY;
      },
      { inertiaEnabled: true }
    );

    //add elements
    lax.addElements("#spinner", {
      scrollY: {
        rotate: [
          [0, "pageHeight/1.2"],
          [0, 360],
        ],
      },
    });

    lax.addElements(".back-to-top-wrapper", {
      scrollY: {
        opacity: [
          [0, "screenHeight"],
          [0, 1],
        ],
      },
    });

    lax.addElements("#parallax-img", {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          ["screenHeight/10", "-screenHeight/10"],
          {
            inertia: -0.5,
          },
        ],
        // opacity: [
        //   ["elInY", "elCenterY", "elOutY"],
        //   [0, 1, 0.5],
        //   {
        //     easing: "easeInOutCubic",
        //   },
        // ],
      },
    });
  }, []);

  return <>{elements}</>;
}
