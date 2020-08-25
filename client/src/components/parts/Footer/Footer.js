import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
	render() {
		return (
			<>
				<footer className="footer pt-2">
					<div className="container mt-2">
						<div className="row d-flex justify-content-between">
							<div className="col-md-3 footer-links text-center">
								<div className="container ">
									<a className="">Github</a>
									<a className="">Instagram</a>
									<a className="">Linkedin</a>
								</div>
							</div>
							<div className="col-md-5 text-right footer-text-container">
								<p className="footer-text">  © 2020 All rights reserved by Rıza Mert Yağcı</p>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}
