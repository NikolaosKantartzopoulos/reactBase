import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import cog from "./images/cog.png";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
	return (
		<>
			<div className="flex bg-red-500">
				<img src={cog} />
				<Navbar />
			</div>
			<Routes>
				<Route path="/dist/index.html" element={<Navigate replace to="/" />} />
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
