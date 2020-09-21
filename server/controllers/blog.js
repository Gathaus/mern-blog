const BlogItem = require("../models/BlogItem");
const CustomError = require("../helpers/error/customError");
const errorWrapper = require("../helpers/error/errorWrapper");
const sendMail = require("../helpers/libraries/sendEmail");

const addBlogItem = errorWrapper(async (req, res, next) => {
	const { title, shortDescription, content,blogTags,thumbnail } = req.body;
	const blogItem = await BlogItem.create({
		title,
		shortDescription,
		content,
		blogTags,
		thumbnail,
	});
	res.status(200).json({
		success: true,
		data: blogItem,
	});
});

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
const editBlogItem = errorWrapper(async(req,res,next) => {
    const {id} = req.params;
	const { title, shortDescription, content,blogTags,thumbnail } = req.body;


	let blogItem = await BlogItem.findById(id);

    blogItem.title = title;
    blogItem.shortDescription = shortDescription;
    blogItem.content = content;
    blogItem.blogTags = blogTags;
    blogItem.thumbnail = thumbnail;

    blogItem = await blogItem.save();
    
    res.status(200)
    .json({
        success : true,
        data :  blogItem
    });

});

const deleteBlogItem = errorWrapper(async(req,res,next)=>{
	const {id} = req.params;

	await BlogItem.findByIdAndRemove(id);

	res.status(200)
    .json({
        success : true,
        data : {}
    });
});

const postComment = errorWrapper(async (req, res, next) => {
	const comment = req.body.comment;
	const username = req.body.username;
	const usermail = req.body.usermail;

	const emailTemplate = `
	<p>'${username}'</p></br>
	<p>'${usermail}'</p></br>
	<p>'${comment}'</p></br>
`;
	try {
		await sendMail({
			from: process.env.SMTP_EMAIL,
			to: process.env.SMTP_EMAIL,
			subject: "New Comment to Your Blog",
			html: emailTemplate,
		});
		return res.status(200).json({
			success: true,
			message: "Email Sent",
		});
	} catch (err) {
		return next(new CustomError("Email Could Not Be Sent", 500));
	}
});



module.exports = {
	addBlogItem,
	getAllBlogItems,
	getsingleBlogItem,
	editBlogItem,
	deleteBlogItem,
	postComment,
};
