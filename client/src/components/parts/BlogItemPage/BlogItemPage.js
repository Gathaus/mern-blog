import React, { Component } from "react";
import "./BlogItemPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

class BlogItemPage extends Component {
	render() {
		return (
			<div className="container blog-item-page mt-5">
				<div className="row">
					<div className="col-md-8 mb-4">
						<h1>Project Name</h1>
						<div
							id="carouselExampleIndicators"
							className="carousel slide mt-5"
							data-ride="carousel"
						>
							<ol class="carousel-indicators">
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="0"
									className="active"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="1"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="2"
								></li>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										className="d-block w-100"
										src="https://via.placeholder.com/1920"
										alt="First slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="https://via.placeholder.com/1920"
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="https://via.placeholder.com/1920"
										alt="Third slide"
									/>
								</div>
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
							Pellentesque tristique viverra augue vitae faucibus. Orci varius
							natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Maecenas aliquet massa ac lectus tristique
							convallis. Nam auctor vitae ipsum id dignissim. <br/><br/>Nam nec felis
							neque. Donec efficitur egestas lacus, et pretium libero aliquam
							vel. Sed dolor diam, dictum eget consectetur vel, malesuada non
							lorem. Integer tristique mattis mauris, sit amet imperdiet nisi
							lacinia ac. Fusce et dictum leo. Mauris efficitur volutpat libero,
							at tempus nisi pulvinar sed.
						</p>
					</div>
					<div className="col-md-4 project-description-container">
						<div className="container project-description">
							<div className="blog-title mt-4 ml-3">
								<h3>Description</h3>
							</div>
							<ul className="project-general-info ml-3 ">
								<li>
									<p>
										<FontAwesomeIcon
											className="icon-project-info  mt-4"
											icon={faLink}
										/>
										<a href="#" target="_blank" className="ml-1">
											example.com
										</a>
									</p>
								</li>
								<li>
									<p>
										<FontAwesomeIcon
											className="icon-project-info "
											icon={faLink}
										/>
										<a href="#" target="_blank" className="ml-1">
											example.com
										</a>
									</p>
								</li>
								<li>
									<p>
										<FontAwesomeIcon
											className="icon-project-info "
											icon={faCalendarAlt}
										/>
										<span className="project-date ml-2">3.12.2019</span>
									</p>
								</li>
								<div className="text-justify project-short-description mr-2 mt-2">
									<p>
										Fusce pellentesque felis turpis, blandit efficitur ante
										sodales eu. Vivamus eu tempor lectus, ut faucibus lacus.
										Nullam ut vehicula lorem, non scelerisque libero.
									</p>
								</div>
								<div className="blog-title">
									<h3>Technology</h3>
								</div>
								<ul class="project-tags">
									<li>
										<a>CSS3</a>
									</li>


									<li>
										<a>Creative</a>
									</li>

									<li>
										<a>HTML5</a>
									</li>

									<li>
										<a>NodeJs</a>
									</li>
                                    <li>
										<a>ReactJs</a>
									</li>
								</ul>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogItemPage;
