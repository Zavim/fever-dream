import React, { useState } from "react";

export default function Dropdown(props) {
  const { label, content } = props;
  const [open, setOpen] = useState(false);

  const toggle = (open) => {
    setOpen(!open);
  };

  return (
    <nav className="dropdown" onClick={() => toggle(open)}>
      <nav className="label">{label}</nav>
      <nav className={open ? "content open" : "content"}>
        {content.map((item) => (
          <a>{item}</a>
        ))}
      </nav>
    </nav>
  );
}
