import React from "react";
import placeholder from "../images/image-placeholder.png";

export default function Residency() {
  return (
    <>
      <nav className="goal-container">
        <img src={placeholder} alt="placeholder"></img>
        <nav className="goal-container-text">
          <h2>goal</h2>
          <p>
            To provide space, time,
            <br /> and funds to support the <br /> imagination and creativity{" "}
            <br /> of emerging artists.{" "}
          </p>
        </nav>
      </nav>
      <nav className="about-container">
        <nav className="about-container-text">
          <h2>about</h2>
          <p>Residency Benefits</p>

          <ul>
            <li>
              2 Months dedicated to your art practice, creating a body of work
              you will keep.
              <li>A platform to showcase your work</li>
              <li>A $3000 stipend </li>
              <li>An $800 supply stipend</li>
              <li>
                Admission into a network of artists and creatives in Cleveland{" "}
              </li>
            </li>
          </ul>
          <p>Residency Responsibilities</p>
          <p>Eligibility</p>
          <p>Adjudication</p>
          <p>How to Apply</p>
          <p>FAQ</p>
        </nav>
        <img src={placeholder} alt="placeholder" />
      </nav>
      <nav className="facilities-container">
        <img src={placeholder} alt="placeholder" />
        <nav className="facilities-container-text">
          <h2>facilities</h2>
          <p>
            Fever Dream offers a x sq. ft studio space dedicated to be used by
            the resident. The studio space is equipped with the following:
            [pertinent studio equipment]. It also utilizes an exhibition space
            in the lobby of The Shoreway with x ft of wall space to exhibit the
            work done during the residency.
          </p>
        </nav>
      </nav>
      <nav className="residents-container">
        <img src={placeholder} alt="placeholder" />

        <nav className="residents-container-text">
          <h2>residents</h2>
          <p>
            Fever Dream is proud to <br />
            present [name] as its <br />
            current resident.
          </p>
          <nav className="residents-container-text-lower">
            <span>Click </span>
            <span className="residents-here-button"> here </span>
            <span>to become our</span> <br />
            <span>first resident!</span>
          </nav>
        </nav>
      </nav>
      <nav className="faq-container">
        <nav className="faq-container-text">
          <h2>frequently asked questions</h2>
          <p>
            Why is the program called Fever Dream? <button></button>
          </p>

          <p>Who is eligible to apply?</p>
          <p>
            What is the vaccination policy in regards to incoming residents?
          </p>
          <p>I'm still in school. Can I apply?</p>
          <p>How do I apply?</p>
          <p>How often can I apply?</p>
          <p>When are the deadlines and what are the residency seasons?</p>
          <p>How do I give myself the best chance to be selected?</p>
          <p>What is the cost of the residency?</p>
          <p>How long is the residency?</p>
          <p> How much is the stipend provided for the artist resident?</p>
          <p> Are supplies provided?</p>
          <p> Can I have guests in the studio?</p>
          <p> Does Fever Dream provide meals for the artist resident?</p>
          <p> How long after the deadline will my residency begin?</p>
          <p> Who reviews my application?</p>
          <p>
            I applied and was not offered the residency. How do I make my
            application stronger?
          </p>
          <p>
            I applied and was not offered the residency. Can I reapply next time
            applications open?
          </p>
        </nav>
      </nav>
      <nav className="apply-button">
        <h2>apply</h2>
      </nav>
    </>
  );
}
