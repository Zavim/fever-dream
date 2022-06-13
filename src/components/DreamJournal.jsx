import React from "react";
import placeholder from "/images/image-placeholder.png";

export default function DreamJournal() {
  return (
    <>
      <h2 className="journal-title">dream journal</h2>
      <nav className="journal-container">
        <nav className="journal-entry">
          <img src={placeholder} alt="entry-placeholder" />
          <nav className="entry-text">
            <p>
              Our Thoughts on [Artists Name]’s Newest Exhibition at [Gallery
              Name]
            </p>
            <p className="entry-readmore">Read More</p>
          </nav>
        </nav>
        <nav className="journal-entry">
          <img src={placeholder} alt="entry-placeholder" />
          <nav className="entry-text">
            <p>
              Our Thoughts on [Artists Name]’s Newest Exhibition at [Gallery
              Name]
            </p>
            <p className="entry-readmore">Read More</p>
          </nav>
        </nav>
      </nav>
      <p className="archive-button">Archive</p>
      <nav className="news-container">
        <h2>alumni news network</h2>
        <p>
          The feverdream “Dream Journal” is a platform made to showcase most
          recent work
          <br />
          and careers of past residents. feverdream is devoted to is continual
          support of those
          <br />
          who have been selected for the residency program.
        </p>
        <nav className="news-img-container">
          <img
            src={placeholder}
            alt="alumni placeholder"
            className="news-img"
          />
          <img
            src={placeholder}
            alt="alumni placeholder"
            className="news-img"
          />
          <img
            src={placeholder}
            alt="alumni placeholder"
            className="news-img"
          />
          <img
            src={placeholder}
            alt="alumni placeholder"
            className="news-img"
          />
          <img
            src={placeholder}
            alt="alumni placeholder"
            className="news-img"
          />
          <img
            src={placeholder}
            alt="alumni placeholder"
            className="news-img"
          />
        </nav>
      </nav>
      <p className="more-button">More</p>
    </>
  );
}
