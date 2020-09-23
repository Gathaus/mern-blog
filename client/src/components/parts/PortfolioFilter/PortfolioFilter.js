import React, { Component } from "react";
import "./PortfolioFilter.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as portfolioActions from "../../../redux/actions/portfolioActions";

class PortfolioFilter extends Component {
	componentDidMount() {
		this.props.actions.portfolioGetCategories();
	}

	selectCategory = (category) => {
		this.props.actions.portfolioChangeCategory(category);
		this.props.actions.portfolioGetItems(category.portfolioCategoryName)

		
	};

	render() {
		return (
			<>
				<div className="container">
					<div className="row d-flex justify-content-end mt-4 mr-5">
						<ul className="portfolio-list">
							{this.props.portfolioCategories.length > 0 ? (
								this.props.portfolioCategories.map((category) => (
									<li
										className="portfolio-link"
										key={category.id}
										onClick={() => this.selectCategory(category)}
									>
										<Link to="portfolio" className="portfolio-link-item">
											{category}
										</Link>
									</li>
								))
							) : (
								<div></div>
							)}

							{/* <li className="portfolio-link">
							<Link to="#" className="portfolio-link-item">
								All
							</Link>
						</li>
						<li className="portfolio-link">
							<Link to="#" className="portfolio-link-item">
								Mern-Stack
							</Link>
						</li>
						<li className="portfolio-link">
							<Link to="#" className="portfolio-link-item">
								React
							</Link>
						</li>
						<li className="portfolio-link">
							<Link to="#" className="portfolio-link-item">
								React-Native
							</Link>
						</li>
						<li className="portfolio-link">
							<Link to="#" className="portfolio-link-item">
								Bootstrap
							</Link>
						</li>
						<li className="portfolio-link">
							<Link to="#" className="portfolio-link-item">
								Spring
							</Link>
						</li>
						<li className="portfolio-link">
							<Link to="#" className="portfolio-link-item">
								Android
							</Link>
						</li> */}
						</ul>
			
					</div>
				</div>
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		portfolioCurrentCategory: state.portfolioChangeCategoryReducer,
		portfolioCategories: state.portfolioCategoryListReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			portfolioGetCategories: bindActionCreators(
				portfolioActions.portfolioGetCategories,
				dispatch
			),
			portfolioChangeCategory: bindActionCreators(
				portfolioActions.portfolioChangeCategory,
				dispatch
			),
			portfolioGetItems: bindActionCreators(
				portfolioActions.portfolioGetItems,
				dispatch
			),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioFilter);
