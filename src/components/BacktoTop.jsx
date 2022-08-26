import React from "react";

export default function BacktoTop() {
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

  return (
    <>
      <button
        onClick={backToTop}
        className="back-to-top-button"
        id="back-to-top-button"
      >
        TOP
      </button>
    </>
  );
}
