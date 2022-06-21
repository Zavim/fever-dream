import React from "react";
import goal from "/images/goal.jpg";
import residents from "/images/residents.jpg";
import about from "/images/about.jpg";
import facilities from "/images/facilities.jpg";

import Collapsible from "./Collapsible";

export default function Residency() {
  return (
    <>
      <nav className="goal-container">
        <img src={goal} alt="placeholder"></img>
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
        <img src={about} alt="placeholder" />
      </nav>
      <nav className="facilities-container">
        <img src={facilities} alt="placeholder" />
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
        <img src={residents} alt="placeholder" />
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
          <Collapsible
            question="Why is the program called Fever Dream?"
            answer="😏"
          />
          <Collapsible
            question="Who is eligible to apply?"
            answer="The scope of Fever Dream includes any young, local, emerging artists with high potential that showcase excellence in the mediums of painting and drawing. Local is defined as Ohio-based within a 2 hour radius. Artist collectives will not be eligible. Fever Dream is an open call for artists to apply where they will be adjudicated on the quality and promise of their proposal."
          />
          <Collapsible
            question="What is the vaccination policy in regards to incoming residents?"
            answer="To ensure the safety of the local community and the safety of Fever Dream staff, the program requires the resident to be vaccinated."
          />
          <Collapsible
            question="I'm still in school. Can I apply?"
            answer="Yes, but Fever Dream requires that the artist applying be graduated from undergrad by the start of their residency term."
          />
          <Collapsible
            question="How do I apply?"
            answer="The Fever Dream application can be found [here]."
          />
          <Collapsible
            question="How often can I apply?"
            answer="There is no limit to how often one can apply but if you get selected you are no longer allowed to apply."
          />
          <Collapsible
            question="When are the deadlines and what are the residency seasons?"
            answer="Applications will be open for 2 months. The Phase One 2 month sessions are on a dynamic calendar where the break between each session can be at least a month or more. Be sure to join our email list to be notified when applications for the next session go live."
          />
          <Collapsible
            question="How do I give myself the best chance to be selected?"
            answer="The best advice to follow is that all applicants should make sure their applications are complete, their proposal is clear, and that the submitted work is strong and documented in a professional manner."
          />
          <Collapsible
            question="What is the cost of the residency?"
            answer="There is no cost associated with your participation as a resident. There is a nonrefundable application fee of $10 that is waivable if you are in need of financial assistance."
          />
          <Collapsible
            question="How long is the residency?"
            answer="The residency is 2 months long."
          />
          <Collapsible
            question="How much is the stipend provided for the artist resident?"
            answer="The stipend provided by Fever Dream is $3000."
          />
          <Collapsible
            question="Are supplies provided?"
            answer="Some supplies are provided in the studio space. We ask that the resident brings as much material as they can. If more supplies are needed Fever Dream will reimburse residents' costs up to $800."
          />
          <Collapsible
            question="Can I have guests in the studio?"
            answer="The only guests allowed into the studio are guests who can provide formal artist's studio visits."
          />
          <Collapsible
            question="Does Fever Dream provide meals for the artist resident?"
            answer="No, Fever Dream does not provide meals. There are plenty of dining options in the vicinity. A map of some of those establishments can be found [here.]"
          />
          <Collapsible
            question="How long after the deadline will my residency begin?"
            answer="There is roughly 1 month between when you are notified as being the final selected resident and when your residency starts. But because of our dynamic Phase One calendar there may be more time. You will be notified when your session will start if you are the selected resident."
          />
          <Collapsible
            question="Who reviews my application?"
            answer="The applications are reviewed by the board. The board is made up of Jesse Grant, Christine Grant, Maxmillian Peralta, Erin Guido, and John Paul Costello."
          />
          <Collapsible
            question="I applied and was not offered the residency. How do I make my application stronger?"
            answer="We are not able to provide specific individual feedback to applicants. To reiterate what was previously mentioned, make sure your application is complete , your proposal is clear, and the submitted work is strong and documented in a professional manner."
          />
          <Collapsible
            question="I applied and was not offered the residency. Can I reapply next time applications open?"
            answer="Yes, you can apply for the next season."
          />
        </nav>
      </nav>
      <button className="apply-button">apply</button>
    </>
  );
}
