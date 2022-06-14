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
        <div className="dropdown">
          <a href="#">
            <h3 className="navbar-feverdream">feverdream</h3>
          </a>
          <div className="dropdown-menu">content</div>
        </div>
        <a href="#">
          <h3 className="navbar-about">about</h3>
        </a>
        <a href="#">
          <h3 className="navbar-residency">residency</h3>
        </a>
        <a href="#">
          <h3 className="navbar-dreamjournal">dreamjournal</h3>
        </a>
        <a href="#">
          <h3 className="navbar-support">support</h3>
        </a>
      </nav>
    </>
  );
}
