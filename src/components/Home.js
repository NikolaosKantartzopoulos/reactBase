import React from "react";
import { Link } from "react-router-dom";
import Button from "../styles/Button";

function Home() {
	return (
		<>
			<div>Home</div>
			<Link to="about">About</Link>
			<Button>Test button</Button>
		</>
	);
}
export default Home;
