import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { isACurtainOpen } from "../isACurtainOpenStore";

export default function Curtain(props) {
  const { curtain, curtainContent } = props;
  const [open, setOpen] = useState(false);
  const $isACurtainOpen = useStore(isACurtainOpen);

  const toggle = (open) => {
    setOpen(!open);
    isACurtainOpen.set(!open);
  };

  return !$isACurtainOpen ? (
    <div className="curtain" onClick={() => toggle(open)}>
      {!open ? <nav className="curtain-text">{curtain}</nav> : <></>}
      {/* <nav
        className={open ? "curtain-content open" : "curtain-content"}
        onClick={() => toggle(open)}
      >
        {curtainContent}
      </nav> */}
    </div>
  ) : (
    <nav
      className={open ? "curtain-content open" : "curtain-content"}
      onClick={() => toggle(open)}
    >
      {curtainContent}
    </nav>
  );
}
