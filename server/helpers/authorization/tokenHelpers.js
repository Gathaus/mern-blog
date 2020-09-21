const sendJwtToClient = (user, res) => {
	//generate sendJwtToClient
	const { JWT_COOKIE, NODE_ENV } = process.env;
	const token = user.getTokenFromUserModel();
	return res
		.status(200)
		.cookie("access_token", token, {
			httpOnly: true,
			expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1),
			secure: false,
		})
		.json({
			success: true,
			access_token: token,
			data: {
				name: user.name,
				email: user.email,
			},
		});
	//response
};

const isTokenIncluded = (req) => {
	return (
		req.headers.authorization && req.headers.authorization.startsWith("Bearer")
	);
};

const getAccessTokenFromHeader = (req) => {
    const authorization = req.headers.authorization;
    const accessToken = authorization.split(" ")[1];
    return accessToken;
}

module.exports = {
	sendJwtToClient,
	isTokenIncluded,
	getAccessTokenFromHeader
};
