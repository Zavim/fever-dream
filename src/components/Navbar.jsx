import React from "react";

export default function Navbar() {
  // let dropDowns = document.getElementsByClassName("dropDownButton");

  // for (let i = 0; i < dropDowns.length; i++) {
  //   dropDowns[i].addEventListener("click", function () {
  //     this.classList.toggle("active");
  //     let content = this.nextElementSibling;
  //     if (content.style.display === "block") {
  //       content.style.display = "none";
  //     } else {
  //       content.style.display = "block";
  //     }
  //   });
  // }
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <h3 className="navbar-feverdream">feverdream</h3>
        </a>
        <a href="/about">
          <h3 className="navbar-about">about</h3>
        </a>
        <a href="/residency">
          <h3 className="navbar-residency">residency</h3>
        </a>
        <a href="/dreamJournal">
          <h3 className="navbar-dreamjournal">dreamjournal</h3>
        </a>
        <a href="/support">
          <h3 className="navbar-support">support</h3>
        </a>
      </nav>
    </>
  );
}
