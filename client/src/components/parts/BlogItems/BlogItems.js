import React, { Component } from "react";
import "./BlogItems.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as blogActions from "../../../redux/actions/blogActions";
const { Link } = require("react-router-dom");

class BlogItems extends Component {
	componentDidMount() {
		this.props.actions.blogGetItems();
	}

	render() {
		return (
			<>
				<div className="container pb-5">
					<div className="col-md-12">
						<div className="projcard-container">
							{this.props.blogItems.map((blogItem, index) => (
								<div className="projcard projcard-red" key={index}>
									<div className="projcard-innerbox"onClick={() => console.log(blogItem._id)}>
										<img className="projcard-img" src={blogItem.thumbnail} />
										<div className="projcard-textbox">
											<div className="projcard-subtitle">{blogItem.title}</div>
											<div className="projcard-bar"></div>
											<div className="projcard-description">
												{blogItem.shortDescription}
											</div>
											<div className="projcard-tagbox" key={index}>
												{blogItem.blogTags.map((tag, index) => (
													<span className="projcard-tag mt-1" key={index}>{tag}</span>
												))}
											</div>
										</div>
									</div>
								</div>
							))}

							{/* <div class="projcard projcard-green">
									<div class="projcard-innerbox">
										<img
											class="projcard-img"
											src="https://picsum.photos/800/600?image=1039"
										/>
										<div class="projcard-textbox">
											<div class="projcard-title">And a Third Card</div>
											<div class="projcard-subtitle">
												You know what this is by now
											</div>
											<div class="projcard-bar"></div>
											<div class="projcard-description">
												Duis aute irure dolor in reprehenderit in voluptate
												velit esse cillum dolore eu fugiat nulla pariatur.
												Excepteur sint occaecat cupidatat non proident.
											</div>
											<div class="projcard-tagbox">
												<span class="projcard-tag">Real life</span>
											</div>
										</div>
									</div>
								</div> */}
						</div>
					</div>
				</div>
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		blogItems: state.blogItemsReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			blogGetItems: bindActionCreators(blogActions.blogGetItems, dispatch),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogItems);
