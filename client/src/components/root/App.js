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
import NotFound from "../views/NotFound";

function App() {
	return (
		<div
			style={{
				position: "relative",
				minHeight: 100 + "vh",
				paddingBottom: 3 + "rem",
			}}
		>
			<Navbar />
			<Switch>
				<Route exact path="/" component={AboutMe} />
				<Route exact path="/about-me" component={AboutMe} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/blogitem/:slug" component={PortfolioItem} />
				<Route exact path="/blogitem/:slug/:notFound" component={NotFound} />
				<Route exact path="/portfolioitem/:slug" component={BlogItem} />
				<Route exact path="/portfolioitem/:slug/:notFound" component={NotFound} />
				<Route exact path="*" exact={true} component={NotFound} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
