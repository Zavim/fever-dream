import React, { useState } from "react";

export default function Curtain(props) {
  const { curtain, curtainContent } = props;
  const [open, setOpen] = useState(false);

  const toggle = (open) => {
    setOpen(!open);
  };

  return (
    <div className="curtain" onClick={() => toggle(open)}>
      {!open ? <nav className="curtain-text">{curtain}</nav> : <></>}
      <nav
        className={open ? "curtain-content open" : "curtain-content"}
        onClick={() => toggle(open)}
      >
        {curtainContent}
      </nav>
    </div>
  );
}
