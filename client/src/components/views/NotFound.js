import React, { Component } from "react";
import "./NotFound.scss";

export default class NotFound extends Component {
	render() {
		return (
			<div className="container notfound-page">
				<div className="row text-center d-block ">
					<h1>404</h1>
					<p>It looks like nothing was found at this location.</p>
				</div>
			</div>
		);
	}
}
