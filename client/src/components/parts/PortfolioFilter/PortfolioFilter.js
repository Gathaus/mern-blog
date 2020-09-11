import React, { Component } from "react";
import "./PortfolioFilter.scss";

class PortfolioFilter extends Component {
	render() {
		return (
			<div className="container">
				<div className="row d-flex justify-content-end mt-4 mr-5">
					<ul className="portfolio-list">
						<li className="portfolio-link">
							<a className="portfolio-link-item">All</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">Mern-Stack</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">React</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">React-Native</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">Bootstrap</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">Spring</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">Android</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default PortfolioFilter;
