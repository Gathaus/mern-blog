import React, { Component } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg navbar-dark pt-5">
					<a className="navbar-brand" href="/#">
						<div className="brand-margin">
							<span className="logo-symbol">R</span>
							<div className="logo-text">
								Rıza
								<span className=""> Mert</span>
							</div>
						</div>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse mr-5"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link text-center" href="/#">
									About Me <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link" href="/#">
									Porfolio
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link" href="/#">
									Blog
								</a>
							</li>
							<li className="nav-item text-center">
								<a className="nav-link" href="/#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default Navbar;
