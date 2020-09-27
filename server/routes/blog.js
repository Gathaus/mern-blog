const express = require("express");
const router = express.Router();
const BlogItem = require("../models/BlogItem");
const {
	addBlogItem,
	getAllBlogItems,
	getsingleBlogItem,
	postComment,
	editBlogItem,
	deleteBlogItem,
	getBlogCategories
} = require("../controllers/blog");
const {
	checkBlogItemExist,
} = require("../middlewares/database/databaseErrorHelpers");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const {blogQueryMiddleware} = require("../middlewares/query/blogQueryMiddleware");

router.get("/",blogQueryMiddleware(BlogItem), getAllBlogItems);
router.get("/:slug/getSingleblogItem", getsingleBlogItem);
router.post("/addBlogItem", getAccessToRoute, addBlogItem);
router.post("/postComment", postComment);
router.put("/:id/blogItemEdit", [getAccessToRoute, checkBlogItemExist], editBlogItem);
router.delete(
	"/:id/blogItemDelete",
	[getAccessToRoute, checkBlogItemExist],
	deleteBlogItem
);
router.get("/blogCategories",getBlogCategories);
module.exports = router;
