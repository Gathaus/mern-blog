import React, { Component } from "react";
import PortfolioItemBody from "../parts/PortfolioItemBody/PortfolioItemBody";
import PortfolioWriteComment from "../parts/PortfolioWriteComment/PortfolioWriteComment";
import PortfolioItemComments from "../parts/PortfolioItemComments/PortfolioItemComments";
import { match, location } from "react-router-dom";
class PortfolioItem extends Component {
	constructor({ match, location }) {
		super(null);
		this.state = {
			match,
			location,
		};
	}
	render() {
		return (
			<div>
				<PortfolioItemBody data={this.state}/>
				<PortfolioItemComments />
				<PortfolioWriteComment />
			</div>
		);
	}
}

export default PortfolioItem;
