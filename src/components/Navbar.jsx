import React from "react";

export default function Navbar() {
	return (
		<>
			<nav className="navbar">
				<a href="/">
					<h3 className="navbar-button">feverdream</h3>
				</a>
				<a href="/about">
					<h3 className="navbar-button">about</h3>
				</a>
				<a href="/residency">
					<h3 className="navbar-button">residency</h3>
				</a>
				<a href="/dreamJournal">
					<h3 className="navbar-button">dreamjournal</h3>
				</a>
				<a href="/support">
					<h3 className="navbar-button">support</h3>
				</a>
			</nav>
		</>
	);
}
