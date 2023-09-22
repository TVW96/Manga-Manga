import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const navbar = () => {
	return (
		<div className="navbar">
			<div className="links">
				<Link to="/development">Development</Link>
				<Link to="/">Shop</Link>
				<Link to="/cart">Cart</Link>
			</div>
		</div>
	);
};

export default navbar;
