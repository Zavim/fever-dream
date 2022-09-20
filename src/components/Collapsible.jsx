import React, { useState } from "react";

export default function Collapsible(props) {
  const { question, answer, triButtonUp, triButtonDown } = props;
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
          src={open ? triButtonUp : triButtonDown}
          alt="triangular button"
        ></img>
      </nav>
      <nav className={open ? "answer open" : "answer"}>{answer}</nav>
    </div>
  );
}
