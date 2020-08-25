import React, { Component } from "react";
import Navbar from "../parts/navbar/Navbar";
import HomeJumbotron from "../parts/HomeJumbotron/HomeJumbotron";
import Skills from "../parts/skills/Skills";
import FunFacts from "../parts/FunFacts/FunFacts";
import Footer from "../parts/Footer/Footer";

class AboutMe extends Component {
	render() {
		return (
			<>
				<Navbar />
				<HomeJumbotron />
				<Skills />
				<FunFacts />
				<Footer />
			</>
		);
	}
}

export default AboutMe;
