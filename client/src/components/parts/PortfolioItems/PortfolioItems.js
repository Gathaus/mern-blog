import React, { Component } from "react";
import "./PortfolioItems.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as portfolioActions from "../../../redux/actions/portfolioActions";
const { Link } = require("react-router-dom");

class PortfolioItems extends Component {
	componentDidMount() {
		this.props.actions.portfolioGetItems();
	}
	// selectCategory = (category) => {
	// 	this.props.actions.portfolioChangeCategory(category);
	// 	this.props.actions.portfolioGetItems(category);
	// };

	render() {
		return (
			<div className="container pb-5 pt-5">
				<div className="row">
					{this.props.portfolioItems.map((portfolioItem, index) => (
						<div className="col-md-4" key={index}>
							<div className="blog-card" onClick={() => console.log(portfolioItem)}>
								<Link to={"portfolioitem/"+portfolioItem.slug} onClick={() => console.log(portfolioItem._id)}>
									<span id="portfolio-item-link"></span>
								</Link>
								<div className="blog-card-image img-fluid">
									<a href="#">
										<img
											className="portfolio-img"
											src={portfolioItem.thumbnail}
										/>
									</a>
									<div className="ripple-cont"></div>
								</div>
								<div className="blog-table">
									<h6 className="blog-category blog-text-success">
										<i className="far fa-newspaper"></i> {portfolioItem.title}
									</h6>

									<p className="blog-card-description">
										{portfolioItem.shortDescription}
									</p>
									<div className="ftr">
										<div className="author">
											{portfolioItem.portfolioTags.map((tag, index) => (
												<Link to="#" key={index}>
													<span>{tag} </span>
												</Link>
											))}
										</div>
										{/* <div class="stats">
											<i class="far fa-clock"></i> 10 min
										</div> */}
									</div>
								</div>
							</div>
						</div>
					))}
					{/* <div className="col-md-4">
						<div class="blog-card">
							<div class="blog-card-image">
								<a href="#">
									<img
										class="portfolio-img"
										src="https://picsum.photos/id/1084/536/354?grayscale"
									/>
								</a>
								<div class="ripple-cont"></div>
							</div>
							<div class="blog-table">
								<h6 class="blog-category blog-text-success">
									<i class="far fa-newspaper"></i> News
								</h6>

								<p class="blog-card-description">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
								<div class="ftr">
									<div class="author">
										<a href="#">
											<span>Java</span>
										</a>
									</div>
									<div class="stats">
										<i class="far fa-clock"></i> 10 min
									</div>
								</div>
							</div>
						</div>
					</div> */}

					<div className="col-md-4"></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		portfolioCurrentCategory: state.portfolioChangeCategoryReducer,
		portfolioItems: state.portfolioItemsReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			portfolioGetItems: bindActionCreators(
				portfolioActions.portfolioGetItems,
				dispatch
			),
			portfolioChangeCategory: bindActionCreators(
				portfolioActions.portfolioChangeCategory,
				dispatch
			),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItems);
