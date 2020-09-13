import React, { Component } from "react";
import "./PortfolioWriteComment.scss";

export default class PortfolioWriteComment extends Component {
	render() {
		return (
			<>
				<div className="portfolio-write-comment-page">
					<div className="container-fluid portfolio-item-comment-title">
						<div className="row">
							<div className="col-md-3">
								<h2 className="portfolio-title">Leave a Comment</h2>
								<div className="row">
									<div className="astrodivider">
										<div class="astrodividermask"></div>
										<span></span>
									</div>
								</div>
							</div>
						</div>
						<div class="portfolio-page-comment-box-container mt-3">
							<textarea
								name="comment"
								type="text"
								class="form-control portfolio-input portfolio-page-message-box"
								placeholder="Your Comment"
								aria-label="comment"
								required
							></textarea>
						</div>
                        <div class="mt-4">
								<input
									name="full_name"
									type="text"
									class="form-control portfolio-input"
									placeholder="Full Name"
									aria-label="full_name"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div class="mt-4">
								<input
									name="email"
									type="email"
									class="form-control portfolio-input"
									placeholder="Email Address"
									aria-label="email"
									aria-describedby="basic-addon1"
								/>
							</div>
                            <div className="portfolio-button-container">
							<button type="button" className="btn btn-dark portfolio-btn mt-4">
								Send a Message
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}
