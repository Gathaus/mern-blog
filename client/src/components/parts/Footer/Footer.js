import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
	render() {
		return (
			<>
				<footer className="footer pt-2 ">
					<div className="container mt-2">
						<div className="row d-flex justify-content-between">
							<div className="col-md-4 footer-links text-center">
								<div className="container">
									<a href="https://github.com/Gathaus" target="_blank" className="">Github</a>
									<a href="https://www.instagram.com/rizamertyagci/" target="_blank">Instagram</a>
									<a href="https://www.linkedin.com/in/rmy1/" target="_blank">Linkedin</a>
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
