import React from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="/about">
          <h3 className="navbar-about">about</h3>
        </a>
        <a href="/residency">
          <h3 className="navbar-residency">residency</h3>
        </a>
        <a href="/dreamjournal">
          <h3 className="navbar-dreamjournal">dreamjournal</h3>
        </a>
        <a href="/support">
          <h3 className="navbar-support">support</h3>
        </a>
      </nav>
    </>
  );
}
