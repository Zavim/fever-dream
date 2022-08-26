import React from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <nav className="hamburger-dropdown">
          <Dropdown
            label={
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            }
            content={["home", "about", "residency", "support"]}
            links={["/", "/about", "/residency", "/support"]}
          />
        </nav>

        <a href="/about">
          <h3 className="navbar-about">about</h3>
        </a>
        <a href="/residency">
          <h3 className="navbar-residency">residency</h3>
        </a>
        {/* <a href="/dreamjournal">
          <h3 className="navbar-dreamjournal">dreamjournal</h3>
        </a> */}
        <a href="/support">
          <h3 className="navbar-support">support</h3>
        </a>
      </nav>
    </>
  );
}
