import React, { Component } from "react";
import "./PortfolioItems.scss";

class PortfolioItems extends Component {
	render() {
		return (
			<div className="container pb-5 pt-5">
				<div className="row">
					<div className="col-md-4">
						<div class="blog-card">
							<div class="blog-card-image">
								<a href="#">
									<img
										class="portfolio-img"
										src="https://picsum.photos/id/1084/536/354?grayscale"
									/>
								</a>
								<div class="ripple-cont"></div>
							</div>
							<div class="blog-table">
								<h6 class="blog-category blog-text-success">
									<i class="far fa-newspaper"></i> News
								</h6>

								<p class="blog-card-description">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
								<div class="ftr">
									<div class="author">
										<a href="#">
											<span>Mern</span>
										</a>
									</div>
									<div class="stats">
										<i class="far fa-clock"></i> 10 min
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div class="blog-card">
							<div class="blog-card-image">
								<a href="#">
									<img
										class="portfolio-img"
										src="https://picsum.photos/id/1084/536/354?grayscale"
									/>
								</a>
								<div class="ripple-cont"></div>
							</div>
							<div class="blog-table">
								<h6 class="blog-category blog-text-success">
									<i class="far fa-newspaper"></i> News
								</h6>

								<p class="blog-card-description">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
								<div class="ftr">
									<div class="author">
										<a href="#">
											<span>Java</span>
										</a>
									</div>
									<div class="stats">
										<i class="far fa-clock"></i> 10 min
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-md-4"></div>
				</div>
			</div>
		);
	}
}

export default PortfolioItems;
