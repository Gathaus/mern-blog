const express = require("express");
const router = express.Router();
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

router.get("/", getAllBlogItems);
router.get("/:id/getSingleblogItem", getsingleBlogItem);
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
