import React from "react";
import Dropdown from "./Dropdown";

export default function NavbarDrop() {
  return (
    <>
      <a href="/" className="feverdream-banner-container">
        <h1 className="feverdream-banner">(feverdream)</h1>
      </a>
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
        <a href="/" className="navbar-feverdream">
          <h3>feverdream</h3>
        </a>
        <Dropdown
          label={<h3 className="navbar-about">about</h3>}
          content={["mission statement", "vision", "board"]}
          links={["/#mission", "/#vision", "/#board"]}
        />
        <Dropdown
          label={<h3 className="navbar-residency">residency</h3>}
          content={["goal", "about", "facilities", "residents", "faq"]}
          links={[
            "/residency#goal",
            "/residency#about",
            "/residency#facilities",
            "/residency#residents",
            "/residency#faq",
          ]}
        />
        {/* <Dropdown
          label={<h3 className="navbar-dreamjournal">dreamjournal</h3>}
          content={["dreamjournal", "news", "archive"]}
          links={[
            "/dreamjournal#dreamjournal",
            "/dreamjournal#news",
            "/dreamjournal#archive",
          ]}
        /> */}
        <a href="/support">
          <h3 className="navbar-support">support</h3>
        </a>
      </nav>
    </>
  );
}
