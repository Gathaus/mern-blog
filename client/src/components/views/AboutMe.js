import React, { Component } from "react";
import HomeJumbotron from "../parts/HomeJumbotron/HomeJumbotron";
import Skills from "../parts/skills/Skills";
import FunFacts from "../parts/FunFacts/FunFacts";

class AboutMe extends Component {
	render() {
		return (
			<>
				<HomeJumbotron />
				<Skills />
				<FunFacts />
			</>
		);
	}
}

export default AboutMe;
