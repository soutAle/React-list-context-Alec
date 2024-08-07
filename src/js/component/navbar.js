import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Come back to contacts list</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contactform">
					<button className="btn btn-success">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};
