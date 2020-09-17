import React, { Component } from "react";
import a from "./HomeJumbotron.scss";
import {Link} from "react-router-dom"

class HomeJumbotron extends Component {
	render() {
		return (
			<>
				<section className="jumbotron home-jumbotron">
					<div className="container ">
						<div className="row">
							<div className="image-box col-md-5 ml-5">
								<img
									className="about-me-image-detail about-me-image img-fluid"
									src="https://via.placeholder.com/1920"
									alt="Responsive image"
								/>
							</div>
							<div className="col-md-6 home-text text-left mt-5 font-poppins">
								<h4>Developer</h4>
								<h1>Rıza Mert Yağcı</h1>
								<p className="text-left bio">
									I'm a button away for any project idea.
								</p>
								<div className="row">
									<Link to="contact">
									<button
										type="button"
										className="ml-2 btn btn-dark contact-btn"
									>Contact
									</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default HomeJumbotron;
