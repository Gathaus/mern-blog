import React, { Component } from "react";
import PortfolioFilter from "../parts/PortfolioFilter/PortfolioFilter";
import PortfolioItems from "../parts/PortfolioItems/PortfolioItems";

class Portfolio extends Component {

	render() {
		return (
			<>
				<PortfolioFilter />
				<PortfolioItems />
			</>
		);
	}
}

export default Portfolio;
