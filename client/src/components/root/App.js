import React from "react";
import AboutMe from "../views/AboutMe";
import Portfolio from "../views/Portfolio";
import Blog from "../views/Blog";
import BlogItem from "../views/BlogItem";
import PortfolioItem from "../views/PortfolioItem";
import Contact from "../views/Contact";
import Navbar from "../parts/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Footer from "../parts/Footer/Footer";

function App() {
	return (
			<div style={{position: "relative", minHeight: 100 + "vh"}}>
				<Navbar />
				<Switch>
					<Route exact path="/" component={AboutMe} />
					<Route exact path="/about-me" component={AboutMe} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/blogitem" component={BlogItem} />
					<Route exact path="/portfolioitem" component={PortfolioItem} />

				</Switch>
				<Footer />
			</div>
	);
}

export default App;
