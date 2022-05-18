import React from "react";
import facebook from "../images/logos/fb.png";
import instagram from "../images/logos/insta.png";
import linkedIn from "../images/logos/li.png";
import youtube from "../images/logos/yt.png";

export default function Footer() {
	return (
		<>
			<footer>
				<nav className="footer-contact">
					<p>(feverdream)</p>
					<a href="#">contact us</a>
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
					<img src={instagram} alt="instagram icon" />
					<img src={youtube} alt="youtube icon" />
					<img src={linkedIn} alt="linkedIn icon" />
					<img src={facebook} alt="facebook icon" />
				</nav>
			</footer>
		</>
	);
}
