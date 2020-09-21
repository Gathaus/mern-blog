const express = require("express");
const router = express.Router();
const {
	addBlogItem,
	getAllBlogItems,
	getsingleBlogItem,
	postComment,
	editBlogItem,
	deleteBlogItem,
} = require("../controllers/blog");
const {
	checkBlogItemExist,
} = require("../middlewares/database/databaseErrorHelpers");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

router.get("/", getAllBlogItems);
router.get("/:id", getsingleBlogItem);
router.post("/addBlogItem", getAccessToRoute, addBlogItem);
router.post("/postComment", postComment);
router.put("/:id/blogItemEdit", [getAccessToRoute, checkBlogItemExist], editBlogItem);
router.delete(
	"/:id/blogItemDelete",
	[getAccessToRoute, checkBlogItemExist],
	deleteBlogItem
);
module.exports = router;
