const errorWrapper = require("../../helpers/error/errorWrapper");
const {
	searchHelper,
	sortHelper,
} = require("./queryMiddlewareHelpers");

const portfolioQueryMiddleware = function (model) {
	return errorWrapper(async function (req, res, next) {
		let query = model.find({ "content": { $ne: "ERROR" } });

		query = searchHelper("portfolioTags", query, req);

		query = sortHelper(query, req);

		const advanceQueryResults = await query;
		res.advanceQueryResults = {
			success: true,
			count: advanceQueryResults.length,
			data: advanceQueryResults,
		};
		next();
	});
};

module.exports = {
	portfolioQueryMiddleware,
};
