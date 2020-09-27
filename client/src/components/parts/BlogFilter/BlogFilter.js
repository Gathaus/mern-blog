import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as blogActions from "../../../redux/actions/blogActions";

class BlogFilter extends Component {
	componentDidMount() {
		this.props.actions.blogGetCategories();
	}
	selectCategory = (category) => {
		this.props.actions.blogChangeCategory(category);
		this.props.actions.blogGetItems(category);
	};
	render() {
		return (
			<div className="container">
				<div className="row d-flex justify-content-end mt-4 mr-5">
					<ul className="portfolio-list">
						{this.props.blogCategories.length > 0 ? (
							this.props.blogCategories.map((category,index) => (
								<li className="portfolio-link" key={index}>
									<Link className="portfolio-link-item" onClick={()=>{this.selectCategory(category)}}>{category}</Link>
								</li>
							))
						) : (
							<div></div>
						)}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		blogCurrentCategory: state.blogChangeCategoryReducer,
		blogCategories: state.blogCategoryListReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			blogGetCategories: bindActionCreators(
				blogActions.blogGetCategories,
				dispatch
			),
			blogChangeCategory: bindActionCreators(
				blogActions.blogChangeCategory,
				dispatch
			),
			blogGetItems: bindActionCreators(blogActions.blogGetItems, dispatch),
		},
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogFilter);
