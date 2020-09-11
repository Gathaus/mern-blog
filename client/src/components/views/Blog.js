import React, { Component } from "react";
import BlogFilter from "../parts/BlogFilter/BlogFilter";
import BlogItems from "../parts/BlogItems/BlogItems";

class Blog extends Component {

	render() {
		return (
			<>
				<BlogFilter />
				<BlogItems />

			</>
		);
	}
}

export default Blog;
