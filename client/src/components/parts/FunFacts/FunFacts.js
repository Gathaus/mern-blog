import React, { Component } from "react";
import "./Funfacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode,faMugHot} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

class FunFacts extends Component {
	render() {
		return (
			<>
				<div className="mt-4">
					<div className="container">
						<div className="row block-title">
							<div className="col-md-3">
								<h2 className="text-center mr-4">Fun Facts</h2>
							</div>
						</div>
						<div className="row">
							<div className="astrodivider col-md-3">
								<div class="astrodividermask"></div>
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div className="container pb-5 ">
					<div className="row cards d-flex justify-content-around">
						<div className="col-md-3 text-center mb-4">
							<div className="fun-card ">
								<FontAwesomeIcon className="icon-funfacts  mt-4" icon={faClock} />
								<br></br>
								<h4 className="mt-2">Working Hours</h4>
								<span className="">320</span>
							</div>
						</div>
						<div className="col-md-3 text-center mb-4">
							<div className="fun-card">
								<FontAwesomeIcon className="icon-funfacts mt-2" icon={faCode} />
								<br></br>
								<h4 className="mt-2">Lines of Code<br/> Written</h4>
								<span className="">22,312</span>
							</div>
						</div>
						<div className="col-md-3 text-center mb-4">
							<div className="fun-card">
								<FontAwesomeIcon className="icon-funfacts  mt-4" icon={faMugHot} />
								<br></br>
								<h4 className="mt-2">Coffe Consumed</h4>
								<span className="">780</span>
							</div>
						</div>
						
					</div>
				</div>
			</>
		);
	}
}

export default FunFacts;
