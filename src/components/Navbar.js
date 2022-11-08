import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
	return (
		<ul className="bg-black text-red-500 text-center p-2 justify-center">
			<NavLink
				to="/"
				className={(navData) => (navData.isActive ? "activeTab" : "")}
			>
				Home
			</NavLink>
			<NavLink
				to="about"
				className={(navData) => (navData.isActive ? "activeTab" : "")}
			>
				About
			</NavLink>
		</ul>
	);
}

export default Navbar;
