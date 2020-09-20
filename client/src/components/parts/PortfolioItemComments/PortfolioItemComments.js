import React, { Component } from "react";
import "./PortfolioItemComments.scss";

class PortfolioItemComments extends Component {
	render() {
		return (
			<div className="portfolio-item-comments mx-auto pb-5 pt-5">
				<div className="container">
					<div className="block-title">
						<h3>1 Comments</h3>
					</div>
				</div>
				<div className="container">
					<div className="row">
						{/* <div className="col-md-1">
							<img
								className="portfolio-item-comment-avatar"
								src="https://via.placeholder.com/1920"
							></img>
						</div> */}
						<div className="col-md-10 ml-4">
							<div className="row">
								<div className="portfolio-item-comment-author">
									<span>Rıza Mert Yağcı</span>
								</div>
								<div className="portfolio-item-comment-data pl-2 ml-2">
									<time datetime="2020-09-13T00:28:31+00:00">
										September 13, 2020 at 12:28 am{" "}
									</time>
								</div>
								<div className="portfolio-item-comment-checked">
									<em>
										Your comment is awaiting moderation. This is a preview, your
										comment will be visible after
									</em>
								</div>
							</div>
							<div className="row">
								<div className="portfolio-item-comment-content mt-2">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioItemComments;