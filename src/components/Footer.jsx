import React from "react";
import facebook from "/images/logos/fb.png";
import instagram from "/images/logos/insta.png";
import linkedIn from "/images/logos/li.png";
import youtube from "/images/logos/yt.png";

export default function Footer() {
  return (
    <>
      <footer>
        <nav className="footer-contact">
          <a href="/">
            <p className="footer-feverdream">(feverdream)</p>
          </a>
          <a className="contact-us" href="#">
            contact us
          </a>
        </nav>
        <nav className="footer-links">
          <a href="/about">about</a>
          <br />
          <a href="/residency">residency</a>
          <br />
          <a href="/dreamJournal">dreamjournal</a>
          <br />
        </nav>
        <nav className="footer-socials">
          <a href="https://www.instagram.com/feverdream.gallery?igshid=YmMyMTA2M2Y=">
            <img
              className="footer-socials-icon"
              src={instagram}
              alt="instagram icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCxAuN_qvuMhPgm4ymiHndUw">
            <img
              className="footer-socials-icon"
              src={youtube}
              alt="youtube icon"
            />
          </a>
          <a href="https://www.linkedin.com/company/feverdream/">
            <img
              className="footer-socials-icon"
              src={linkedIn}
              alt="linkedIn icon"
            />
          </a>
          <a href="https://www.facebook.com/feverdreamresidency">
            <img
              className="footer-socials-icon"
              src={facebook}
              alt="facebook icon"
            />
          </a>
        </nav>
      </footer>
    </>
  );
}
