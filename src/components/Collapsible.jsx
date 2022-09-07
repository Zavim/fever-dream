import React, { useState } from "react";
import triButtonUp from "/images/tri-button-up.png";
import triButtonDown from "/images/tri-button-down.png";
import triButtonUpGreen from "/images/tri-button-up-green.png";
import triButtonDownGreen from "/images/tri-button-down-green.png";

export default function Collapsible(props) {
  const { question, answer, triType } = props;
  const [open, setOpen] = useState(false);

  const toggle = (open) => {
    setOpen(!open);
  };

  return (
    <div className="question" onClick={() => toggle(open)}>
      <nav className="question-text">
        {question}
        <img
          className="dropdown-button"
          src={open ? triButtonUpGreen : triButtonDownGreen}
          alt="triangular button"
        ></img>
      </nav>
      <nav className={open ? "answer open" : "answer"}>{answer}</nav>
    </div>
  );
}
