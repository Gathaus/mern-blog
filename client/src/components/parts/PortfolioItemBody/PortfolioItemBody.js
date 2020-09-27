import React, { Component } from "react";
import "./PortfolioItemBody.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
	faFacebookSquare,
	faTwitterSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import * as blogActions from "../../../redux/actions/blogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const { Link, Redirect } = require("react-router-dom");
class PortfolioItemBody extends Component {
	constructor({ match, location }) {
		super(null);
	}
	componentDidMount() {
		this.props.actions.blogGetSingleItem(this.props.data.match.params.slug);
	}
	render() {
		return (
			<>
				{this.props.blogSingleItem.content == "ERROR" ? (
					<Redirect to={this.props.data.match.url + "/NotFound"}></Redirect>
				) : null}
				<div className="portfolio-item-body">
					<div className="container  mt-5">
						<div className="row">
							<div className="container text-center">
								<h2>{this.props.blogSingleItem.title}</h2>
							</div>
						</div>
					</div>

					<img
						className="w-100 img-fluid portfolio-item-post-image mt-4"
						src={this.props.blogSingleItem.thumbnail}
						alt="First slide"
						onClick={() => console.log(this.props.data.match.url)}
					/>
					<div className="portfolio-text-row mx-auto">
						<div className="portfolio-item-text mt-5">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
								cursus lorem a turpis feugiat, et porttitor leo dapibus. In ut
								tincidunt lectus, id hendrerit enim. Maecenas at nibh eu nulla
								dignissim posuere. Nullam viverra vitae elit a tempus. Donec
								quis eleifend eros. Donec imperdiet nisi mi, in ultricies risus
								porta ac. Nullam laoreet convallis nibh sed congue. Donec nulla
								ipsum, tincidunt a augue maximus, pellentesque imperdiet lectus.
								Aenean posuere consequat libero, id efficitur quam dictum
								volutpat.
							</p>
							<p>
								Donec mollis a lacus a pharetra. Nam facilisis enim erat, in
								scelerisque eros mollis quis. Aliquam erat volutpat. Nam vel
								nibh justo. Nunc vestibulum leo a ultricies malesuada. Proin
								quis volutpat sem. Morbi consequat lacinia pulvinar.
							</p>
						</div>
					</div>
					<img
						className="img-fluid mt-5 portfolio-item-image mx-auto d-block"
						src="//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/blog_post_1_full.jpg"
						alt="First slide"
					/>
					<div className="portfolio-text-row mx-auto">
						<div className="portfolio-item-text mt-5">
							<p>
								Cras commodo, nulla a commodo sodales, nisl mauris interdum
								lectus, ac mattis lacus purus ut nunc. Fusce volutpat aliquam
								euismod. Aliquam pulvinar neque turpis, in tincidunt mi varius
								et. Curabitur vitae tempus mauris, porta dictum ante. Nam
								pellentesque et mauris a suscipit. Vivamus gravida erat nec elit
								ullamcorper, quis laoreet metus efficitur. Duis vulputate,
								mauris a auctor pretium, elit nisl eleifend nulla, non accumsan
								augue massa quis tellus. Aliquam at justo libero.
							</p>
							<p>
								Donec mollis a lacus a pharetra. Nam facilisis enim erat, in
								scelerisque eros mollis quis. Aliquam erat volutpat. Nam vel
								nibh justo. Nunc vestibulum leo a ultricies malesuada. Proin
								quis volutpat sem. Morbi consequat lacinia pulvinar.
							</p>
						</div>
					</div>
					<div className="portfolio-text-row mx-auto">
						<blockquote>
							<p>
								Mauris lectus dolor, varius ut imperdiet nec, dignissim nec
								ligula. Cras posuere odio et finibus accumsan. Mauris in sem non
								arcu consectetur posuere sed quis justo. Sed turpis mauris,
								aliquet ac lacus nec, tempor condimentum justo.
							</p>
							<footer>
								<span>Edgar D. Wang</span>
							</footer>
						</blockquote>
					</div>
					<div className="portfolio-text-row mx-auto">
						<div className="portfolio-item-text mt-5">
							<p>
								Orci varius natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Sed vestibulum mauris condimentum
								ultrices scelerisque. Fusce pulvinar cursus luctus. Cras dapibus
								placerat magna, quis euismod nisi consequat euismod. Curabitur
								finibus nisi at justo ultricies, nec congue metus rutrum.
								Quisque vulputate sollicitudin aliquam. Curabitur posuere auctor
								dapibus.
							</p>
							<p>
								Donec mollis a lacus a pharetra. Nam facilisis enim erat, in
								scelerisque eros mollis quis. Aliquam erat volutpat. Nam vel
								nibh justo. Nunc vestibulum leo a ultricies malesuada. Proin
								quis volutpat sem. Morbi consequat lacinia pulvinar.
							</p>
						</div>
					</div>

					<div className="row portfolio-item-footer mt-5">
						<div className="portfolio-item-date ml-1">
							<span className="entry-date">
								<FontAwesomeIcon className="icon-date ml-2" icon={faClock} />

								<time dateTime="2019-12-04T08:29:37+00:00" className="ml-2">
									December 4, 2019
								</time>
							</span>
						</div>
						<div className="porfolio-item-btn-group mr-3">
							<Link to="#">
								<FontAwesomeIcon
									title="Share on Facebook"
									className="icon-portfolio-group ml-2"
									icon={faFacebookSquare}
								/>
							</Link>
							<Link to="#">
								<FontAwesomeIcon
									title="Share on Twitter"
									className="icon-portfolio-group ml-2"
									icon={faTwitterSquare}
								/>
							</Link>
							<Link to="#">
								<FontAwesomeIcon
									title="Share on Linkedin"
									className="icon-portfolio-group ml-2"
									icon={faLinkedin}
								/>
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}
function mapStateToProps(state) {
	return {
		blogSingleItem: state.blogSingleItemReducer,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			blogGetSingleItem: bindActionCreators(
				blogActions.blogGetSingleItem,
				dispatch
			),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItemBody);
