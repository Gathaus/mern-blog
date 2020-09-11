import React, { Component } from "react";
import a from "./HomeJumbotron.scss";

class HomeJumbotron extends Component {
	render() {
		return (
			<>
				<section className="jumbotron home-jumbotron">
					<div className="container">
						<div className="row">
							<div className="image-box col-md-5 ml-5">
								<img
									className="about-me-image-detail about-me-image img-fluid"
									src="https://via.placeholder.com/500"
									alt="Responsive image"
								/>
							</div>
							<div className="col-md-6 home-text text-left mt-5 font-poppins">
								<h4>Developer</h4>
								<h1>Rıza Mert Yağcı</h1>
								<p className="text-left bio">
									I'm a computer engineering student in Istanbul<br/>
									and a button away for any app idea.
								</p>
								<div className="row">
									<button
										type="button"
										className="ml-2 btn btn-dark contact-btn"
									>
										Contact
									</button>
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
