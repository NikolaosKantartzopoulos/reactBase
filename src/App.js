import React, { Component } from "react";
import cog from "./images/cog.png";

class App extends Component {
	render() {
		return (
			<div className="flex bg-red-500">
				<img src={cog} />
				<h1 className="bg-black text-red-500 text-center p-2"> Hello world!</h1>
			</div>
		);
	}
}

export default App;
