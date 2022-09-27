import React from "react";
import support from "/images/support.png";
import instaPink from "/images/logos/insta-pink.png";
import fbPink from "/images/logos/fb-pink.png";
import liPink from "/images/logos/li-pink.png";

export default function Support() {
  return (
    <>
      <nav className="container">
        <nav className="contact-container">
          <nav className="contact-container-text">
            <h2>contact</h2>
            <p>
              Keep up to date with feverdream by following us on social media.
              There we will announce open calls, residency finalists, and
              updates on our current residents.
              <br />
              <nav className="socials-container">
                <a href="https://www.instagram.com/feverdream.gallery?igshid=YmMyMTA2M2Y=">
                  <img
                    src={instaPink}
                    alt="instagram logo"
                    className="social-icon"
                  />
                </a>
                <a href="https://www.facebook.com/feverdreamresidency">
                  <img
                    src={fbPink}
                    alt="facebook logo"
                    className="social-icon"
                  />
                </a>
                <a href="https://www.linkedin.com/company/feverdream/">
                  <img
                    src={liPink}
                    alt="linkedIn  logo"
                    className="social-icon"
                  />
                </a>
              </nav>
              <p>
                For assistance and questions please email
                <a
                  href="mailto:hello@feverdream.co?subject=feverdream%20artist%20inquiry&body=First%20Name%0ALast%20Name%0AYour message here%21"
                  className="email"
                >
                  <strong> hello@feverdream.co</strong>
                </a>
              </p>
            </p>
            {/* <form action="" className="contact-form" id="contact-form">
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
                  <input type="text" name="last-name" />
                </label>
              </div>
              <div>
                <label>
                  Email <span className="asterisk">*</span>
                  <br />
                  <input type="text" name="email" />
                </label>
              </div>
              <button className="" id="submit-form" type="submit">
                Submit
              </button>
            </form> */}
          </nav>
          <nav className="contact-img-container">
            <img src={support} alt="placeholder"></img>
          </nav>
        </nav>
      </nav>
    </>
  );
}
