import React, { Component } from "react";
import Navbar from "../parts/navbar/Navbar";
import HomeJumbotron from "../parts/HomeJumbotron/HomeJumbotron";
import Skills from "../parts/skills/Skills";

class AboutMe extends Component {
	render() {
		return (
			<>
				<Navbar />
				<HomeJumbotron />
				<Skills />
			</>
		);
	}
}

export default AboutMe;
