const searchHelper = (searchKey, query, req) => {
	if (req.query.search) {
		queryObject = {};

		const regex = new RegExp(req.query.search, "i");
		queryObject[searchKey] = regex;

		return query.where(queryObject);
	}
	return query;
};

const sortHelper = (query, req) => {
	//this part is created just to make it scaleable for future updates
	//const sortKey = req.query.sortBy;

	return query.sort("-createdAt");
};

module.exports = {
	searchHelper,
	sortHelper,
};
