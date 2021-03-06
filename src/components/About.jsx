import React from "react";
import mission from "/images/mission.jpg";
import vision from "/images/vision.jpg";
import jesse from "/images/jesse.jpg";
import christine from "/images/christine.jpg";
import erin from "/images/erin.jpg";
import johnPaul from "/images/johnPaul.jpg";
import maxmillian from "/images/maxmillian.jpg";

import Collapsible from "./Collapsible";

export default function About() {
  //make this a drop down with focus
  return (
    <>
      <nav className="mission-container" id="mission">
        <nav className="mission-container-text">
          <h2>mission statement</h2>
          <p>
            feverdream is dedicated to supporting the careers of artists, in
            turn, cultivating and advancing fine art in Cleveland.
          </p>
        </nav>
        <img src={mission} alt="placeholder"></img>
      </nav>
      <nav className="vision-container" id="vision">
        <img src={vision} alt="placeholder" />
        <nav className="vision-container-text">
          <h2>vision</h2>
          <p>
            feverdream’s vision is to fill a niche within the artistic community
            of Cleveland as an experimental space for artists to thrive and
            grow, celebrating the following values: creative development,
            collaboration, learning, and community. At the heart of this vision
            lies the feverdream Residency program which offers artists time,
            space, and funds to pursue the work they’re passionate about. The
            program is particularly geared towards young, emerging 2D artists
            within the scope of painting and drawing. Resident artists’
            practices will thrive within the feverdream. And their admittance
            into the program in addition to their contributions to feverdream's
            ongoing projects will key them into a network of artists for a
            lifetime.
          </p>
          <Collapsible
            question={<h3>creative development</h3>}
            answer={
              <p>
                Providing the tools for career and research mobility to emerging
                artists as well as celebrating their artistic practices.
              </p>
            }
          />
          <Collapsible
            question={<h3>collaboration</h3>}
            answer={
              <p>
                Passionately listening to, working with, and supporting others
                to achieve a common goal.
              </p>
            }
          />
          <Collapsible
            question={<h3>learning</h3>}
            answer={
              <p>
                Remaining open-minded for the sake of positive growth to better
                serve artists. Experimenting with new ideas and models.
              </p>
            }
          />
          <Collapsible
            question={<h3>community</h3>}
            answer={
              <p>
                Vitalizing the creative community of Cleveland by bringing
                members closer together and supporting them.{" "}
              </p>
            }
          />
        </nav>
      </nav>
      <h2 className="board-title">board</h2>
      <nav className="board-container" id="board">
        <nav className="board-bio">
          <nav className="board-bio-image-container">
            <img src={jesse} alt="placeholder" />
            <h3>jesse grant</h3>
            <h4>Founder, Head of the Board</h4>
          </nav>
          <nav className="haiku-container">
            <p className="jesse-haiku">
              <span>the universe in</span>
              <br />
              <span>a spirited silhouette</span>
              <br />
              <span>with a beating heart.</span>
            </p>
            <p className="haiku-more">More</p>
          </nav>
        </nav>
        <nav className="board-bio">
          <nav className="board-bio-image-container">
            <img src={christine} alt="placeholder" />
            <h3>christine grant</h3>
            <h4>Founder</h4>
          </nav>
          <nav className="haiku-container">
            <p className="haiku">
              <span>unicorn shaped by</span>
              <br />
              <span>too many worlds. Now waiting</span>
              <br />
              <span>for invitation</span>
            </p>
            <p className="haiku-more">More</p>
          </nav>
        </nav>
        <nav className="board-bio">
          <nav className="board-bio-image-container">
            <img src={erin} alt="placeholder" />
            <h3>erin guido</h3>
            <h4>Founder</h4>
          </nav>
          <nav className="haiku-container">
            <p className="haiku">
              <span>have you ever seen</span>
              <br />
              <span>magic shapes dancing at night</span>
              <br />
              <span>slowly fade away</span>
            </p>
            <p className="haiku-more">More</p>
          </nav>
        </nav>
        <nav className="board-bio">
          <nav className="board-bio-image-container">
            <img src={johnPaul} alt="placeholder" />
            <h3>john paul costello</h3>
            <h4>Founder</h4>
          </nav>
          <nav className="haiku-container">
            <p className="haiku">
              <span>dark eternity</span>
              <br />
              <span>strong mind, unable to write</span>
              <br />
              <span>into the paper</span>
              <br />
            </p>
            <p className="haiku-more">More</p>
          </nav>
        </nav>
        <nav className="board-bio">
          <nav className="board-bio-image-container">
            <img src={maxmillian} alt="placeholder" />
            <h3>maxmillian peralta</h3>
            <h4>Program Director</h4>
          </nav>
          <nav className="haiku-container">
            <p className="haiku">
              <span>skating above ground</span>
              <br />
              <span>as if i’m underwater</span>
              <br />
              <span>the sun bleeds through waves</span>
            </p>
            <p className="haiku-more">More</p>
          </nav>
        </nav>
      </nav>
    </>
  );
}
