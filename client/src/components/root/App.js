import React from "react";
import AboutMe from "../views/AboutMe";
import Portfolio from "../views/Portfolio";
import Navbar from "../parts/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Footer from "../parts/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={AboutMe} />
				<Route exact path="/about-me" component={AboutMe} />
				<Route exact path="/portfolio" component={Portfolio} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
