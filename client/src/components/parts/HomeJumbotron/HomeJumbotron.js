import React, { Component } from "react";
import a from "./HomeJumbotron.css";

class HomeJumbotron extends Component {
	render() {
		return (
			<>
				<section className="jumbotron">
					<div className="container">
						<div className="row">
							<div className="image-box col-md-5">
								<img
									className="about-me-image-detail about-me-image img-fluid"
									src="https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/cesar-rincon-1024x1024.jpg"
									alt="Responsive image"
								/>
							</div>
							<div className="col-md-7 home-text text-left mt-2">
								<h4>Developer</h4>
								<h1>Rıza Mert Yağcı</h1>
								<p className="text-left">
									Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
									convallis, risus non condimentum gravida, odio mauris
									ullamcorper felis, ut venenatis purus ex eu mi. Quisque
									imperdiet lacinia urna, a placerat sapien pretium eu.
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
