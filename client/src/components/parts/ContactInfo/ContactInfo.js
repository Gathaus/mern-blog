import React, { Component } from "react";
import "./ContactInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMobileAlt,
	faMapMarkerAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name: "",
			email: "",
			subject: "",
			message: "",
			isSubmitted: false,
		};
	}
	notify = () =>
		toast.success("Your Message Has Been Sent", {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	mySubmitHandler = (event) => {
		event.preventDefault();
		axios.put("http://localhost:5000/api/contactMessage", this.state);
		this.setState({
			isSubmitted: true,
		});
	};

	myChangeHandler = (event) => {
		let nam = event.target.name;
		let value = event.target.value;
		this.setState({
			[nam]: value,
		});
	};

	render() {
		return (
			<div className="container mt-5 contact-page pb-5">
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
							<p className="contact-part ml-3">I Currently Live in Istanbul</p>
						</div>
						<div className="col-md-12 mt-5">
							<FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
							<h5 className="contact-title ml-3">Rizamertyagci@gmail.com</h5>
							<p className="contact-part ml-3">
								You can also contact me via email
							</p>
						</div>
					</div>
					<div className="col-md-8">
						<div className="col-md-12">
							<h2 className="contact-title">How Can I Help You?</h2>
							<div className="row">
								<div className="astrodivider col-md-5">
									<div className="astrodividermask"></div>
									<span></span>
								</div>
							</div>
						</div>
						<form onSubmit={this.mySubmitHandler}>
							<div className="form-row ml-4">
								<div className="col-5">
									<input
										name="full_name"
										type="text"
										placeholder="Full Name"
										className="form-control mb-3 contact-input"
										required
										onChange={this.myChangeHandler}
									/>
									<input
										className="form-control mb-3 contact-input"
										name="email"
										type="email"
										placeholder="Email Address"
										required
										onChange={this.myChangeHandler}
									/>
									<input
										name="subject"
										type="text"
										placeholder="Subject"
										required
										error="Please leave a message"
										className="form-control mb-3 contact-input"
										onChange={this.myChangeHandler}
									/>
								</div>
								<div className="col-6 ml-4 mt-2">
									<textarea
										className="form-control text-input"
										id="exampleFormControlTextarea1"
										rows="5"
										name="message"
										type="text"
										placeholder="Message"
										required
										onChange={this.myChangeHandler}
									></textarea>
								</div>
								<div className="contact-button-container">
									<button
										type="submit"
										className="btn btn-dark contact-btn"
										onClick={this.notify}
									>
										Send a Message
									</button>
									{this.state.isSubmitted === true ? (
										<ToastContainer
											position="bottom-center"
											autoClose={5000}
											hideProgressBar
											newestOnTop={false}
											closeOnClick
											rtl={false}
											pauseOnFocusLoss
											draggable
											pauseOnHover
											limit={1}
										/>
									) : null}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactInfo;
