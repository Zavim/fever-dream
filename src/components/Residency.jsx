import React from "react";
import goal from "/images/goal.jpg";
import residents from "/images/residents.jpg";
import about from "/images/about.jpg";
import facilities from "/images/facilities.jpg";

import Collapsible from "./Collapsible";

export default function Residency() {
  return (
    <>
      <nav className="container">
        <nav className="goal-container" id="goal">
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
      </nav>
      <nav className="container">
        <nav className="about-container" id="about">
          <nav className="about-container-text">
            <h2>about</h2>
            <Collapsible
              question={<p>Residency Benefits</p>}
              answer={
                <ul>
                  <li>
                    2 Months dedicated to your art practice, creating a body of
                    work you will keep.
                  </li>
                  <li>A platform to showcase your work</li>
                  <li>A $3000 stipend </li>
                  <li>An $800 supply stipend</li>
                  <li>
                    Admission into a network of artists and creatives in
                    Cleveland{" "}
                  </li>
                </ul>
              }
            />
            <Collapsible
              question={<p>Residency Responsibilities</p>}
              answer={
                <ul>
                  <li>Create a self-directed body of work for The Shoreway</li>
                  <li>Cooperate with Fever Dream marketing efforts </li>
                  <li>Donate a one-off tiger related artwork </li>
                </ul>
              }
            />
            <Collapsible
              question={<p>Eligibility</p>}
              answer={
                <ul>
                  <li>You must be 21 years old or older </li>
                  <li>
                    We strongly encourage applicants have an undergraduate BFA
                    degree, although not required{" "}
                  </li>
                  <li>
                    You must be an emerging artist (defined as an aspiring
                    professional artist early into their career).{" "}
                  </li>
                  <li>No artist collective groups </li>
                  <li>You must have the ability to commute to the studio </li>
                </ul>
              }
            />
            <Collapsible
              question={<p>Adjudication</p>}
              answer={
                <ul>
                  <li>
                    The final candidate for the residency program is decided by
                    the board. If you are selected for the final round of the
                    adjudication process you will be contacted via text/email
                    for a final interview which will aide the final decision.{" "}
                  </li>
                </ul>
              }
            />
            <Collapsible
              question={<p>Apply</p>}
              answer={
                <ul>
                  <li>
                    Submit an application to become the next Fever Dream
                    resident [here]
                  </li>
                  <li>
                    As an applicant you should be aware we require the following
                    information within the application:{" "}
                    <ul>
                      <li>Personal Details</li>
                      <li>Contact Info</li>
                      <li>Educational Background</li>
                      <li>Resume/CV</li>
                      <li>Slideshow of 8 - 12 Works</li>
                      <li>Statement</li>
                      <li>Proposal</li>
                    </ul>
                  </li>
                </ul>
              }
            />
            {/* <Collapsible
              question={<a href="/residency#apply">How to Apply</a>}
            />
            <Collapsible question={<a href="/residency#faq">FAQ</a>} /> */}
          </nav>
          <img src={about} alt="placeholder" />
        </nav>
      </nav>
      <nav className="container">
        <nav className="facilities-container" id="facilities">
          <img src={facilities} alt="placeholder" />
          <nav className="facilities-container-text">
            <h2>facilities</h2>
            <p>
              feverdream offers a x sq. ft studio space dedicated to be used by
              the resident. The studio space is equipped with the following:
              [pertinent studio equipment]. It also utilizes an exhibition space
              in the lobby of The Shoreway with x ft of wall space to exhibit
              the work done during the residency.
            </p>
          </nav>
        </nav>
      </nav>
      <nav className="container">
        <nav className="residents-container" id="residents">
          <img src={residents} alt="placeholder" />
          <nav className="residents-container-text">
            <h2>residents</h2>
            <p>
              feverdream is proud to <br />
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
      </nav>
      <nav className="container">
        <nav className="faq-container" id="faq">
          <nav className="faq-container-text">
            <h2>frequently asked questions</h2>
            <Collapsible
              question={<p>Why is the program called feverdream?</p>}
              answer={<p>😏</p>}
            />
            <Collapsible
              question={<p>Who is eligible to apply?</p>}
              answer={
                <p>
                  The scope of feverdream includes any young, local, emerging
                  artists with high potential that showcase excellence in the
                  mediums of painting and drawing. Local is defined as
                  Ohio-based within a 2 hour radius. Artist collectives will not
                  be eligible. feverdream is an open call for artists to apply
                  where they will be adjudicated on the quality and promise of
                  their proposal.
                </p>
              }
            />
            <Collapsible
              question={
                <p>
                  What is the vaccination policy in regards to incoming
                  residents?
                </p>
              }
              answer={
                <p>
                  To ensure the safety of the local community and the safety of
                  feverdream staff, the program requires the resident to be
                  vaccinated.
                </p>
              }
            />
            <Collapsible
              question={<p>I'm still in school. Can I apply?</p>}
              answer={
                <p>
                  Yes, but feverdream requires that the artist applying be
                  graduated from undergrad by the start of their residency term.
                </p>
              }
            />
            <Collapsible
              question={<p>How do I apply?</p>}
              answer={<p>The feverdream application can be found [here].</p>}
            />
            <Collapsible
              question={<p>How often can I apply?</p>}
              answer={
                <p>
                  There is no limit to how often one can apply but if you get
                  selected you are no longer allowed to apply.
                </p>
              }
            />
            <Collapsible
              question={
                <p>
                  When are the deadlines and what are the residency seasons?
                </p>
              }
              answer={
                <p>
                  Applications will be open for 2 months. The Phase One 2 month
                  sessions are on a dynamic calendar where the break between
                  each session can be at least a month or more. Be sure to join
                  our email list to be notified when applications for the next
                  session go live.
                </p>
              }
            />
            <Collapsible
              question={
                <p>How do I give myself the best chance to be selected?</p>
              }
              answer={
                <p>
                  The best advice to follow is that all applicants should make
                  sure their applications are complete, their proposal is clear,
                  and that the submitted work is strong and documented in a
                  professional manner.
                </p>
              }
            />
            <Collapsible
              question={<p>What is the cost of the residency?</p>}
              answer={
                <p>
                  There is no cost associated with your participation as a
                  resident. There is a nonrefundable application fee of $10 that
                  is waivable if you are in need of financial assistance.
                </p>
              }
            />
            <Collapsible
              question={<p>How long is the residency?</p>}
              answer={<p>The residency is 2 months long.</p>}
            />
            <Collapsible
              question={
                <p>How much is the stipend provided for the artist resident?</p>
              }
              answer={<p>The stipend provided by feverdream is $3000.</p>}
            />
            <Collapsible
              question={<p>Are supplies provided?</p>}
              answer={
                <p>
                  Some supplies are provided in the studio space. We ask that
                  the resident brings as much material as they can. If more
                  supplies are needed feverdream will reimburse residents' costs
                  up to $800.
                </p>
              }
            />
            <Collapsible
              question={<p>Can I have guests in the studio?</p>}
              answer={
                <p>
                  The only guests allowed into the studio are guests who can
                  provide formal artist's studio visits.
                </p>
              }
            />
            <Collapsible
              question={
                <p>Does feverdream provide meals for the artist resident?</p>
              }
              answer={
                <p>
                  No, feverdream does not provide meals. There are plenty of
                  dining options in the vicinity. A map of some of those
                  establishments can be found [here.]
                </p>
              }
            />
            <Collapsible
              question={
                <p>How long after the deadline will my residency begin?</p>
              }
              answer={
                <p>
                  There is roughly 1 month between when you are notified as
                  being the final selected resident and when your residency
                  starts. But because of our dynamic Phase One calendar there
                  may be more time. You will be notified when your session will
                  start if you are the selected resident.
                </p>
              }
            />
            <Collapsible
              question={<p>Who reviews my application?</p>}
              answer={
                <p>
                  The applications are reviewed by the board. The board is made
                  up of Jesse Grant, Christine Grant, Maxmillian Peralta, Erin
                  Guido, and John Paul Costello.
                </p>
              }
            />
            <Collapsible
              question={
                <p>
                  I applied and was not offered the residency. How do I make my
                  application stronger?
                </p>
              }
              answer={
                <p>
                  We are not able to provide specific individual feedback to
                  applicants. To reiterate what was previously mentioned, make
                  sure your application is complete , your proposal is clear,
                  and the submitted work is strong and documented in a
                  professional manner.
                </p>
              }
            />
            <Collapsible
              question={
                <p>
                  I applied and was not offered the residency. Can I reapply
                  next time applications open?
                </p>
              }
              answer={<p>Yes, you can apply for the next season.</p>}
            />
          </nav>
        </nav>
        <button className="apply-button" id="apply">
          apply
        </button>
      </nav>
    </>
  );
}
