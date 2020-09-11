import React, { Component } from "react";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faCode,  faMobileAlt, faDesktop} from "@fortawesome/free-solid-svg-icons";

class skills extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row block-title">
						<div className="col-md-3 font-poppins">
							<h2 className="text-center mr-4">My Skills</h2>
						</div>
					</div>
					<div className="row">
						<div className="astrodivider col-md-3">
							<div class="astrodividermask"></div>
							<span></span>
						</div>
					</div>
				</div>
				<div className="container skill-part font-poppins">
					<div className="row">
						<div className="col-md-5 ml-5">
							<FontAwesomeIcon className="skills-icon" icon={faLayerGroup} />
							<h4 className="skill-title">Full-Stack Web Development</h4>
							<p>
								Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
								Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
								vitae lacinia maximus, risus velit vehicula odio, a tincidunt
								turpis turpis tempus ex.
							</p>
						</div>
						<div className="col-md-5 ml-5">
							<FontAwesomeIcon className="skills-icon" icon={faMobileAlt} />
							<h4 className="skill-title">Mobile App Development</h4>
							<p>
								Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
								Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
								vitae lacinia maximus, risus velit vehicula odio, a tincidunt
								turpis turpis tempus ex.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 ml-5">
							<FontAwesomeIcon className="skills-icon" icon={faDesktop} />
							<h4 className="skill-title">Desktop App Development</h4>
							<p>
								Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
								Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
								vitae lacinia maximus, risus velit vehicula odio, a tincidunt
								turpis turpis tempus ex.
							</p>
						</div>
						<div className="col-md-5 ml-5">
							<FontAwesomeIcon className="skills-icon" icon={faCode} />
							<h4 className="skill-title">Problem Solving</h4>
							<p>
								Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
								Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
								vitae lacinia maximus, risus velit vehicula odio, a tincidunt
								turpis turpis tempus ex.
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default skills;
