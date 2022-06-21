import React, { useState } from "react";
import triButtonUp from "/images/tri-button-up.png";
import triButtonDown from "/images/tri-button-down.png";

export default function Collapsible(props) {
  const { question, answer } = props;
  const [open, setOpen] = useState(false);

  const toggle = (open) => {
    setOpen(!open);
  };

  return (
    <div className="question" onClick={() => toggle(open)}>
      <nav className="question-text">
        <p>{question}</p>
        <img
          className="dropdown-button"
          src={open ? triButtonUp : triButtonDown}
          alt="triangular button"
        ></img>
      </nav>
      <nav className={open ? "answer open" : "answer"}>
        <p>{answer}</p>
      </nav>
    </div>
  );
}
