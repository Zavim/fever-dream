import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* <div className="dropdown"> */}
        {/* <a href="/">
          <h3 className="navbar-feverdream">feverdream</h3>
        </a> */}
        {/* <div className="dropdown-menu">content</div> */}
        {/* </div> */}
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
