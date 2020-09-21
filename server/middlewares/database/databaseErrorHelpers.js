const path = require("path");
const root = path.dirname(require.main.filename);

const BlogItem = require(root + "/models/BlogItem");
const Comment = require(root + "/models/Comment");
const PortfolioItem = require(root + "/models/PortfolioItem");

const errorWrapper = require(root + "/helpers/error/errorWrapper");
const CustomError = require(root + "/helpers/error/customError");

const checkBlogItemExist = errorWrapper(async (req, res, next) => {
	const blogItem_id = req.params.id || req.params.blogItem_id;

	const blogItem = await BlogItem.findById(blogItem_id);

	if (!blogItem) {
		return next(
			new CustomError(`BlogItem Not Found with Id : ${blogItem_id}`, 404)
		);
	}
	next();
});

const checkPortfolioItemExist = errorWrapper(async (req, res, next) => {
	const portfolioItem_id = req.params.id || req.params.portfolioItem_id;

	const portfolioItem = await PortfolioItem.findById(portfolioItem_id);

	if (!portfolioItem) {
		return next(
			new CustomError(
				`PortfolioItem Not Found with Id : ${portfolioItem_id}`,
				404
			)
		);
	}
	next();
});

module.exports = {
	checkBlogItemExist,
	checkPortfolioItemExist,
};
