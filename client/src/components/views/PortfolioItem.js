import React, { Component } from "react";
import PortfolioItemBody from "../parts/PortfolioItemBody/PortfolioItemBody";
import PortfolioWriteComment from "../parts/PortfolioWriteComment/PortfolioWriteComment";
import PortfolioItemComments from "../parts/PortfolioItemComments/PortfolioItemComments";
class PortfolioItem extends Component {
	render() {
		return (
			<div>
				<PortfolioItemBody />
				<PortfolioItemComments />
				<PortfolioWriteComment />
			</div>
		);
	}
}

export default PortfolioItem;
