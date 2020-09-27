import React, { Component } from "react";
import "./BlogItemPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as portfolioActions from "../../../redux/actions/portfolioActions";
import { bindActionCreators } from "redux";
const { Link, Redirect } = require("react-router-dom");

class BlogItemPage extends Component {
	constructor({ match, location }) {
		super(null);
	}

	componentDidMount() {
		console.log(this.props.data.match.params.id);
		this.props.actions.portfolioGetSingleItem(
			this.props.data.match.params.slug
		);
	}

	isEmpty = (obj) => {
		if (obj) return true;
		else return false;
	};

	isActive = (index) => {
		console.log("İNDEX");
		console.log(index);
		if (index == 0) {
			return "carousel-item active";
		} else return "carousel-item";
	};

	render() {
		return (
			<>
				{this.props.portfolioSingleItem.content == "ERROR" ? (
					<Redirect to={this.props.data.match.url + "/NotFound"}></Redirect>
				) : null}
				<div className="container blog-item-page mt-5 pb-5">
					<div className="row">
						<div className="col-md-8 mb-4 text-center">
							<h1>{this.props.portfolioSingleItem.title}</h1>
							<div
								id="carouselExampleIndicators"
								className="carousel slide mt-5"
								data-ride="carousel"
							>
								<ol class="carousel-indicators">
									{this.isEmpty(this.props.portfolioSingleItem.images)
										? this.props.portfolioSingleItem.images.map(
												(image, index) => (
													<li
														data-target="#carouselExampleIndicators"
														data-slide-to={index}
														className="active"
													></li>
												)
										  )
										: console.log("2")}
								</ol>
								<div className="carousel-inner">
									{this.isEmpty(this.props.portfolioSingleItem.images)
										? this.props.portfolioSingleItem.images.map(
												(image, index) => (
													<div className={this.isActive(index)}>
														<img
															className="d-block w-100"
															src={image}
															alt="First slide"
														/>
													</div>
												)
										  )
										: console.log("2")}
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									></span>
									<span className="sr-only">Previous</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
							<p className="project-full-description mt-5">
								{this.props.portfolioSingleItem.content}
							</p>
						</div>
						<div
							className="col-md-4 project-description-container"
							onClick={() => {
								console.log(this.props.portfolioSingleItem);
							}}
						>
							<div className="container project-description">
								<div className="blog-title mt-4 ml-3">
									<h3>Description</h3>
								</div>
								<ul className="project-general-info ml-3 ">
									{this.isEmpty(this.props.portfolioSingleItem.links)
										? this.props.portfolioSingleItem.links.map(
												(link, index) => (
													<li>
														<p>
															<FontAwesomeIcon
																className="icon-project-info "
																icon={faLink}
															/>
															<a
																href={link.linkUrl}
																target="_blank"
																className="ml-1"
															>
																{link.linkname}
															</a>
														</p>
													</li>
												)
										  )
										: console.log("2")}

									<li>
										<p>
											<FontAwesomeIcon
												className="icon-project-info "
												icon={faCalendarAlt}
											/>
											<span className="project-date ml-2">
												{this.props.portfolioSingleItem.date}
											</span>
										</p>
									</li>
									<div className="text-justify project-short-description mr-2 mt-2">
										<p>{this.props.portfolioSingleItem.shortDescription2}</p>
									</div>
									<div className="blog-title">
										<h3>Technology</h3>
									</div>
									<ul class="project-tags">
										{this.isEmpty(this.props.portfolioSingleItem.technologies)
											? this.props.portfolioSingleItem.technologies.map(
													(technology, index) => (
														<li>
															<a>{technology}</a>
														</li>
													)
											  )
											: console.log("2")}
									</ul>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		portfolioSingleItem: state.portfolioSingleItemReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			portfolioGetSingleItem: bindActionCreators(
				portfolioActions.portfolioGetSingleItem,
				dispatch
			),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogItemPage);
