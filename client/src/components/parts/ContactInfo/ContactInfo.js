import React, { Component } from "react";
import "./ContactInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMobileAlt,
	faMapMarkerAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class ContactInfo extends Component {
	render() {
		return (
			<div className="container mt-5 contact-page">
				<div className="row">
					<div className="col-md-4">
						{/* <div className="col-md-12">
							<FontAwesomeIcon className="contact-icons" icon={faMobileAlt} />
							<h5 className="contact-title ml-3">415-832-2000</h5>
							<p className="contact-part ml-3">
								Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
								dui.
							</p>
						</div> */}
						<div className="col-md-12 mt-5">
							<FontAwesomeIcon
								className="contact-icons"
								icon={faMapMarkerAlt}
							/>
							<h5 className="contact-title ml-3">Turkey</h5>
							<p className="contact-part ml-3">
								I Currently Live in Istanbul
							</p>
						</div>
						<div className="col-md-12 mt-5">
							<FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
							<h5 className="contact-title ml-3">Rizamertyagci@gmail.com</h5>
							<p className="contact-part ml-3">
								You can also contact me via email
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="col-md-12">
							<h2 className="contact-title">How Can I Help You?</h2>
							<div className="row">
								<div className="astrodivider col-md-10">
									<div class="astrodividermask"></div>
									<span></span>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div class="input-group ml-3">
								<input
									name="full_name"
									type="text"
									class="form-control contact-input"
									placeholder="Full Name"
									aria-label="full_name"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div class="input-group ml-3 mt-4">
								<input
									name="email"
									type="email"
									class="form-control contact-input"
									placeholder="Email Address"
									aria-label="email"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div class="input-group ml-3 mt-4">
								<input
									name="subject"
									type="text"
									class="form-control contact-input"
									placeholder="Subject"
									aria-label="subject"
									aria-describedby="basic-addon1"
									required
									error="Please leave a message"
								/>
							</div>
						</div>
						<div className="contact-button-container">
							<button type="button" className="btn btn-dark contact-btn mt-5">
								Send a Message
							</button>
						</div>
					</div>

					<div className="col-md-4">
						<div class="input-group ml-3 mt-5 contact-page-message-box-container">
							<textarea
								name="message"
								type="text"
								class="form-control contact-input contact-page-message-box"
								placeholder="Message"
								aria-label="message"
								required
							></textarea>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactInfo;
