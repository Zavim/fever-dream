import React from "react";
import Dropdown from "./Dropdown";

export default function NavbarDrop() {
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <h3 className="navbar-feverdream">feverdream</h3>
        </a>
        <Dropdown
          label={<h3 className="navbar-about">about</h3>}
          content={["mission statement", "vision", "board"]}
          links={["/about#mission", "/about#vision", "/about#board"]}
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
        <Dropdown
          label={<h3 className="navbar-dreamjournal">dreamjournal</h3>}
          content={["dreamjournal", "news", "archive"]}
          links={[
            "/dreamjournal#dreamjournal",
            "/dreamjournal#news",
            "/dreamjournal#archive",
          ]}
        />
        <a href="/support">
          <h3 className="navbar-support">support</h3>
        </a>
      </nav>
    </>
  );
}
