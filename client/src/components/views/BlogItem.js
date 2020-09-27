import React, { Component } from "react";
import BlogItemPage from "../parts/BlogItemPage/BlogItemPage";
import PortfolioWriteComment from "../parts/PortfolioWriteComment/PortfolioWriteComment";
import { match, location } from "react-router-dom";

class BlogItem extends Component {
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
				<BlogItemPage data={this.state} />
			</div>
		);
	}
}

export default BlogItem;
