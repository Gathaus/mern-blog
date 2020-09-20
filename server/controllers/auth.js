const User = require("../models/User");
const errorWrapper = require("../helpers/error/errorWrapper");
const CustomError = require("../helpers/error/customError");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const bcrypt = require("bcryptjs");
const {validateUserInput , comparePassword} = require("../helpers/input/inputHelpers")


const adminRegister = errorWrapper(async (req, res, next) => {
	const name = process.env.USERNAME;
	const password = process.env.PASSWORD;

	const user = await User.create({
		name,
		password,
	});

	res.status(200).json({
		success: true,
		data: user,
	});
});

const adminLogin = errorWrapper(async (req, res, next) => {
	const { name, password } = req.body;

	if (!validateUserInput(name, password)) {
		return next(new CustomError("Please check your inputs", 400));
	}

	const user = await User.findOne({ name }).select("+password");
	if (!user || !comparePassword(password, user.password)) {
		return next(new CustomError("Please check your credentials", 404));
	}

	sendJwtToClient(user, res);
});

const adminLogout = errorWrapper(async (req, res, next) => {
	const {JWT_COOKIE_EXPIRE} = process.env;

	return res.status(200)
	.cookie({
		httpOnly: true,
		expires : new Date(Date.now()),
		secure: false
	})
	.json({
		success:true,
		message:"Logout Successfull"
	})

})

const sendTokenToClient = (user, res, status) => {
	// Get Token From User Model
	const token = user.getTokenFromUserModel();

	const { JWT_COOKIE_EXPIRE, NODE_ENV } = process.env;

	// Send To Client With Res

	return res
		.status(status)
		.cookie("token", token, {
			httpOnly: true,
			expires: new Date(Date.now() + parseInt(JWT_COOKIE_EXPIRE) * 1000 * 60),
			secure: NODE_ENV === "development" ? false : true,
		})
		.json({
			success: true,
			token,
			data: {
				name: user.name,
				password: user.password,
				email: user.email,
				role: user.role,
			},
		});
};

const getUser = (req, res, next) => {
	res.json({
		success: true,
		data: {
			id: req.user.id,
			name: req.user.name,
		},
	});
};

module.exports = {
	adminRegister,
	adminLogin,
	getUser,
	adminLogout
};
