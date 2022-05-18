import React from "react";
import placeholder from "../images/image-placeholder.png";
import placeholderVert from "../images/image-placeholder-vert.png";

import Footer from "./Footer.jsx";

export default function DreamJournal() {
	//make this a drop down with focus
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
			<nav className="news-container">
				<h2>alumni news network</h2>
				<p>
					The Fever Dream “Dream Journal” is a platform made to showcase most
					recent work and careers of past residents. Fever Dream is devoted to
					is continual support of those who have been selected for the residency
					program.
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
			<Footer />
		</>
	);
}
