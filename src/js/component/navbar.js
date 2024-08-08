import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark  mb-3 sticky-top">
			<Link to="/" className="text-decoration-none ms-3">
				<button className="btn btn-success">Come back home</button>
			</Link>
			<Link to="/" className="text-decoration-none">
				<p className="text-center text-white fs-1 ">Welcome to the contact list</p>
			</Link>
			<div className="me-3">
				<Link to="/contactform">
					<button className="btn btn-success">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};
