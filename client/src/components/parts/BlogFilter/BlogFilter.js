import React, { Component } from 'react'

export default class BlogFilter extends Component {
    render() {
        return (
            <div className="container">
				<div className="row d-flex justify-content-end mt-4 mr-5">
					<ul className="portfolio-list">
						<li className="portfolio-link">
							<a className="portfolio-link-item">All</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">Programming</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">Data Structure & algorithm</a>
						</li>
						<li className="portfolio-link">
							<a className="portfolio-link-item">Real Life</a>
						</li>
					</ul>
				</div>
			</div>
        )
    }
}
