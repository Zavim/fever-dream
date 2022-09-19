import React, { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isADropdownOpen } from "../isADropdownOpenStore";

export default function Dropdown(props) {
  const { label, content, links } = props;
  const [open, setOpen] = useState(false);
  const $isADropdownOpen = useStore(isADropdownOpen);

  const toggle = (open) => {
    setOpen(!open);
    isADropdownOpen.set(!open);
  };

  return (
    <nav className="dropdown" onClick={() => toggle(open)}>
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
