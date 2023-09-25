import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const navbar = () => {
	return (
		<div className="navbar">
			<h2>Manga.Manga</h2>
			<div className="links">
				<Link to="/development">Development</Link>
				<Link to="/">Shop</Link>
				<Link to="/cart">Cart</Link>
			</div>
		</div>
	);
};

export default navbar;
