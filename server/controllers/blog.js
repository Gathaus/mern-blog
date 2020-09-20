const BlogItem = require("../models/BlogItem");
const CustomError = require("../helpers/error/customError");
const errorWrapper = require("../helpers/error/errorWrapper");

const addBlogItem = async (req, res, next) => {
	const { title, shortDescription, blogTags } = req.body;
	const blogItem = await BlogItem.create({
		title,
		shortDescription,
		blogTags,
	});
	res.status(200).json({
		success: true,
		data: blogItem,
	});
};

const getAllBlogItems = errorWrapper(async (req, res, next) => {
	const blogItems = await BlogItem.find();

	return res.status(200).json({
		success: true,
		data: blogItems,
	});
});

const getsingleBlogItem = errorWrapper(async (req, res, next) => {
	const { id } = req.params;
	const blogItem = await BlogItem.findById(id);

	return res.status(200).json({
		success: true,
		data: blogItem,
	});
});

module.exports = {
	addBlogItem,
	getAllBlogItems,
	getsingleBlogItem,
};
