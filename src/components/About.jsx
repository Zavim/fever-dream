import React from "react";
import placeholder from "../images/image-placeholder.png";
import placeholderVert from "../images/image-placeholder-vert.png";

export default function About() {
	//make this a drop down with focus
	return (
		<>
			<nav className="mission-container">
				<nav className="mission-container-text">
					<h2>mission statement</h2>
					<p>
						Fever Dream is dedicated to supporting the careers of artists, in
						turn, cultivating and advancing fine art in Cleveland.
					</p>
				</nav>
				<img src={placeholder} alt="placeholder"></img>
			</nav>
			<nav className="vision-container">
				<img src={placeholder} alt="placeholder" />
				<nav className="vision-container-text">
					<h2>vision</h2>
					<p>
						Fever Dream’s vision is to fill a niche within the artistic
						community of Cleveland as an experimental space for artists to
						thrive and grow, celebrating the following values: creative
						development, collaboration, learning, and community. At the heart of
						this vision lies the Fever Dream Residency program which offers
						artists time, space, and funds to pursue the work they’re passionate
						about. The program is particularly geared towards young, emerging 2D
						artists within the scope of painting and drawing. Resident artists’
						practices will thrive within the Fever Dream. And their admittance
						into the program in addition to their contributions to Fever Dreams
						ongoing projects will key them into a network of artists for a
						lifetime.
					</p>
					<h3>creative development</h3>
					<p>
						Providing the tools for career and research mobility to emerging
						artists as well as celebrating their artistic practices.
					</p>
					<h3>collaboration</h3>
					<p>
						Passionately listening to, working with, and supporting others to
						achieve a common goal.
					</p>
					<h3>learning</h3>
					<p>
						Remaining open-minded for the sake of positive growth to better
						serve artists. Experimenting with new ideas and models.
					</p>
					<h3>community</h3>
					<p>
						Vitalizing the creative community of Cleveland by bringing members
						closer together and supporting them.{" "}
					</p>
				</nav>
			</nav>
			<h2 className="board-title">board</h2>
			<nav className="board-container">
				<nav className="board-bio">
					<nav className="board-bio-image-container">
						<img src={placeholderVert} alt="placeholder" />
						<h3>jesse grant</h3>
						<h4>Founder, Head of the board</h4>
					</nav>
					<nav className="haiku-container">
						<p className="haiku">
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
						<img src={placeholderVert} alt="placeholder" />
						<h3>christine grant</h3>
						<h4>Founder, Head of the board</h4>
					</nav>
					<nav className="haiku-container">
						<p className="haiku">
							the universe in a spirited silhouette with a beating heart.
						</p>
						<p className="haiku-more">More</p>
					</nav>
				</nav>
				<nav className="board-bio">
					<nav className="board-bio-image-container">
						<img src={placeholderVert} alt="placeholder" />
						<h3>erin guido</h3>
						<h4>Founder</h4>
					</nav>
					<nav className="haiku-container">
						<p className="haiku">
							the universe in a spirited silhouette with a beating heart.
						</p>
						<p className="haiku-more">More</p>
					</nav>
				</nav>
				<nav className="board-bio">
					<nav className="board-bio-image-container">
						<img src={placeholderVert} alt="placeholder" />
						<h3>john paul costello</h3>
						<h4>Founder</h4>
					</nav>
					<nav className="haiku-container">
						<p className="haiku">
							the universe in a spirited silhouette with a beating heart.
						</p>
						<p className="haiku-more">More</p>
					</nav>
				</nav>
				<nav className="board-bio">
					<nav className="board-bio-image-container">
						<img src={placeholderVert} alt="placeholder" />
						<h3>maxmillian peralta</h3>
						<h4>Program director</h4>
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
			<footer>
				<nav className="footer-contact">
					<p>(feverdream)</p>
					<a href="#">contact us</a>
				</nav>
				<nav className="footer-links">
					<p>about</p>
					<p>residency</p>
					<p>dreamjournal</p>
				</nav>
				<nav className="footer-socials">
					<img src={placeholder} alt="placeholder" />
				</nav>
			</footer>
		</>
	);
}
