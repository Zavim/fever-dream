import React from "react";
import goal from "/images/goal.jpg";
import residents from "/images/residents.jpg";
import about from "/images/about.jpg";
import facilities from "/images/facilities.jpg";

import triButtonUp from "/images/tri-button-up-green.png";
import triButtonDown from "/images/tri-button-down-green.png";

import Collapsible from "./Collapsible";
import LaxAnimController from "./LaxAnimController";
import Curtain from "./Curtain";

export default function Residency() {
  return (
    <>
      <LaxAnimController />
      <nav className="container" id="goal">
        <nav className="goal-container">
          <img
            src={goal}
            id="parallax-img"
            alt="AI generated image of a room containing what appears to be a clock on a chair and stacks of cash on the floor, a door is open to the surreal landscape outside"
          ></img>
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
      <hr className="border" />
      <nav className="container" id="about">
        <nav className="about-container">
          <nav className="about-container-text">
            <h2>about</h2>
            <Curtain
              curtain={<p>Residency Benefits</p>}
              curtainContent={
                // <ul>
                //   <li>
                //     2 Months dedicated to your art practice, creating a body of
                //     work you will keep.
                //   </li>
                //   <li>A platform to showcase your work</li>
                //   <li>A $3000 stipend </li>
                //   <li>An $800 supply stipend</li>
                // </ul>
                <>
                  <p>
                    2 Months dedicated to your art practice, creating a body of
                    work you will keep.
                  </p>
                  <p>A platform to showcase your work</p>
                  <p>A $3000 stipend </p>
                  <p>An $800 supply stipend</p>
                </>
              }
            />
            <Curtain
              curtain={<p>Residency Responsibilities</p>}
              curtainContent={
                // <ul>
                //   <li>Create a self-directed body of work for The Shoreway</li>
                //   <li>Cooperate with Fever Dream marketing efforts </li>
                //   <li>Donate a one-off tiger related artwork </li>
                // </ul>
                <>
                  <p>Create a self-directed body of work for The Shoreway</p>
                  <p>Cooperate with Fever Dream marketing efforts </p>
                  <p>Donate a one-off tiger related artwork </p>
                </>
              }
            />
            <Curtain
              curtain={<p>Eligibility</p>}
              curtainContent={
                // <ul>
                //   <li>You must be 21 years old or older </li>
                //   <li>
                //     We strongly encourage applicants have an undergraduate BFA
                //     degree, although not required{" "}
                //   </li>
                //   <li>
                //     You must be an emerging artist (defined as an aspiring
                //     professional artist early into their career).{" "}
                //   </li>
                //   <li>No artist collective groups </li>
                //   <li>You must have the ability to commute to the studio </li>
                // </ul>
                <>
                  <p>You must be 21 years old or older </p>
                  <p>
                    We strongly encourage applicants have an undergraduate BFA
                    degree, although not required{" "}
                  </p>
                  <p>
                    You must be an emerging artist (defined as an aspiring
                    professional artist early into their career).{" "}
                  </p>
                  <p>No artist collective groups </p>
                  <p>You must have the ability to commute to the studio </p>
                </>
              }
            />
            <Curtain
              curtain={<p>Adjudication</p>}
              curtainContent={
                // <ul>
                //   <li>
                //     The final candidate for the residency program is decided by
                //     the board. If you are selected for the final round of the
                //     adjudication process you will be contacted via text/email
                //     for a final interview which will aide the final decision.{" "}
                //   </li>
                // </ul>
                <>
                  <p>
                    The final candidate for the residency program is decided by
                    the board. If you are selected for the final round of the
                    adjudication process you will be contacted via text/email
                    for a final interview which will aide the final decision.{" "}
                  </p>
                </>
              }
            />
            <Curtain
              curtain={<p>Apply</p>}
              curtainContent={
                // <ul>
                //   <li>
                //     Submit an application to become the next Fever Dream
                //     resident
                //   </li>
                //   <li>
                //     As an applicant you should be aware we require the following
                //     information within the application: <br /> <br /> Personal
                //     Details, Contact Info, Educational Background, Resume/CV,
                //     Slideshow of 8 - 12 Works, Statement, and Proposal
                //   </li>
                // </ul>
                <>
                  <p>
                    Submit an application to become the next Fever Dream
                    resident
                  </p>
                  <p>
                    As an applicant you should be aware we require the following
                    information within the application: <br /> <br /> Personal
                    Details, Contact Info, Educational Background, Resume/CV,
                    Slideshow of 8 - 12 Works, Statement, and Proposal
                  </p>
                </>
              }
            />
          </nav>
          <img
            src={about}
            id="parallax-img"
            alt="AI generated image of colored absctract painstrokes"
          />
        </nav>
      </nav>
      <hr className="border" />
      <nav className="container" id="facilities">
        <nav className="facilities-container">
          <img
            src={facilities}
            id="parallax-img"
            alt="AI generated image of a painting of a surreal art building"
          />
          <nav className="facilities-container-text">
            <h2>facilities</h2>
            <p>
              feverdream offers a robust studio space located in Tremont
              dedicated to be used by the resident. The space is equipped with
              plenty of workspace, printers, TVs, bathrooms, a full kitchen, a
              slop sink, plus dining and lounge areas.
            </p>
          </nav>
        </nav>
      </nav>
      <hr className="border" />
      <nav className="container" id="residents">
        <nav className="residents-container">
          <img
            src={residents}
            id="parallax-img"
            alt="AI generated image of a colorful finger painting accentuated with two black hand shapes"
          />
          <nav className="residents-container-text">
            <h2>residents</h2>
            <p>
              feverdream is proud to <br />
              present{" "}
              <a
                href="https://instagram.com/nobrainmycar?igshid=YzA2ZDJiZGQ="
                target="_blank"
                className="resident-link"
              >
                Nolan Meyer
              </a>{" "}
              as its <br />
              current resident.
            </p>
            <nav className="residents-container-text-lower">
              <span>Click </span>
              <a
                href="https://feverdream.slideroom.com/#/Login"
                className="residents-here-button"
              >
                {" "}
                here{" "}
              </a>
              <span>to become our</span> <br />
              <span>next resident!</span>
            </nav>
          </nav>
        </nav>
      </nav>
      <hr className="faq-border" />
      <nav className="container" id="faq">
        <nav className="faq-container">
          <nav className="faq-container-text">
            <h2>frequently asked questions</h2>
            <Collapsible
              question={<p>Why is the program called feverdream?</p>}
              answer={<p>😏</p>}
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            {/* <Collapsible
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            /> */}
            <Collapsible
              question={<p>I'm still in school. Can I apply?</p>}
              answer={
                <p>
                  Yes, but feverdream requires that the artist applying be
                  graduated from undergrad by the start of their residency term.
                </p>
              }
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            <Collapsible
              question={<p>How do I apply?</p>}
              answer={
                <p>
                  The feverdream application can be found{" "}
                  <a
                    href="https://feverdream.slideroom.com/#/Login"
                    className="faq-here-link"
                  >
                    {" "}
                    here
                  </a>
                  .
                </p>
              }
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            <Collapsible
              question={<p>How often can I apply?</p>}
              answer={
                <p>
                  There is no limit to how often one can apply but if you get
                  selected you are no longer allowed to apply.
                </p>
              }
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            <Collapsible
              question={<p>How long is the residency?</p>}
              answer={<p>The residency is 2 months long.</p>}
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            <Collapsible
              question={
                <p>How much is the stipend provided for the artist resident?</p>
              }
              answer={<p>The stipend provided by feverdream is $3000.</p>}
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            <Collapsible
              question={<p>Can I have guests in the studio?</p>}
              answer={
                <p>
                  The only guests allowed into the studio are guests who can
                  provide formal artist's studio visits.
                </p>
              }
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            <Collapsible
              question={
                <p>Does feverdream provide meals for the artist resident?</p>
              }
              answer={
                <p>
                  No, feverdream does not provide meals. There are plenty of
                  dining options in the vicinity.
                </p>
              }
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
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
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
            <Collapsible
              question={
                <p>
                  I applied and was not offered the residency. Can I reapply
                  next time applications open?
                </p>
              }
              answer={<p>Yes, you can apply for the next season.</p>}
              triButtonUp={triButtonUp}
              triButtonDown={triButtonDown}
            />
          </nav>
        </nav>
        {/* <button className="apply-button" id="apply">
          apply
        </button> */}
      </nav>
    </>
  );
}
