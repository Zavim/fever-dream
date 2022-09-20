import React, { useState, useRef, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isADropdownOpen } from "../isADropdownOpenStore";

export default function Dropdown(props) {
  const { label, content, links } = props;
  const [open, setOpen] = useState(false);
  const dropdown = useRef(null);
  const $isADropdownOpen = useStore(isADropdownOpen);

  const toggle = (open) => {
    setOpen(!open);
    isADropdownOpen.set(!open);
  };

  const closeOpenDropdowns = (e) => {
    if (dropdown.current && !open && !dropdown.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenDropdowns);
  }, []);

  return (
    <nav className="dropdown" onClick={() => toggle(open)} ref={dropdown}>
      <nav className="label">{label}</nav>
      <nav className={open ? "content open" : "content"}>
        {content.map((item, i) => (
          <a href={links[i]} key={i}>
            {item}
          </a>
        ))}
      </nav>
    </nav>
  );
}
