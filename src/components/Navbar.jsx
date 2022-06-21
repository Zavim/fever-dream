import React from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Dropdown
          label={<h3 className="navbar-about">about</h3>}
          content={["mission statement", "vision", "board"]}
        />
        {/* <Collapsible question="home" answer="lemons" /> */}
        {/* <a href="/about">
          <h3 className="navbar-about">about</h3>
        </a> */}
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
