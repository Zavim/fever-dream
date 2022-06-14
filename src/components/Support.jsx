import React from "react";
import placeholder from "/images/image-placeholder.png";

export default function Support() {
  return (
    <>
      <nav className="contact-container">
        <nav className="contact-container-text">
          <h2>contact</h2>
          <p>
            Keep up to date with <br />
            feverdream by filling out
            <br />
            the simple contact form <br /> below to join our email list. <br />
            <br />
            For assistance please email <br />
            <span className="email">
              <strong> hello@feverdream.co</strong>
            </span>
          </p>
          <form action="" className="contact-form">
            <div>
              <label>
                First Name <span className="asterisk">*</span>
                <br />
                <input type="text" name="first-name" />
              </label>
            </div>
            <div>
              <label>
                Last Name <span className="asterisk">*</span>
                <br />
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Email <span className="asterisk">*</span>
                <br />
                <input type="text" email="email" />
              </label>
            </div>
          </form>
        </nav>
        <nav className="contact-img-container">
          <img src={placeholder} alt="placeholder"></img>
          <img src={placeholder} alt="placeholder"></img>
        </nav>
      </nav>
    </>
  );
}
