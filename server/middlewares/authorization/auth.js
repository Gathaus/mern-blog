const errorWrapper = require("../../helpers/error/errorWrapper");
const CustomError = require("../../helpers/error/customError");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const getAccessToRoute = (req, res, next) => {
	if (!isTokenIncluded(req)) {
		return next(
			new CustomError("You are not authorized to access this page", 401)
		);
	}

	const accessToken = getAccessTokenFromHeader(req);

	jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
		if (err) {
			return next(
				new CustomError("You are not authorized to access this page", 401)
			);
		}
		req.user = {
			id: decodedToken.id,
			name: decodedToken.name,
		};
		next();
	});
};

const getAccessTokenFromHeader = (req) => {
	const authorization = req.headers.authorization;
	const accessToken = authorization.split(" ")[1];
	return accessToken;
};
const isTokenIncluded = (req) => {
	return (
		req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
	);
};
module.exports = {
	getAccessToRoute,
};
