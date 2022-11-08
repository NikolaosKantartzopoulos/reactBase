import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<ul className="bg-black text-red-500 text-center p-2 justify-center">
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
		</ul>
	);
}

export default Navbar;
