import React, { Component } from "react";
import "./Funfacts.css";

class FunFacts extends Component {
	render() {
		return (
			<>
				<div className="row mt-4">
					<div className="container">
						<div className="row block-title">
							<div className="col-md-3">
								<h2 className="text-center mr-4">Fun Facts</h2>
							</div>
						</div>
						<div className="row">
							<div className="astrodivider col-md-3">
								<div class="astrodividermask"></div>
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row cards">
						<div className="col-md-4">
							<div class="card"></div>
						</div>
						<div className="col-md-4"></div>
						<div className="col-md-4"></div>
					</div>
				</div>
			</>
		);
	}
}

export default FunFacts;
