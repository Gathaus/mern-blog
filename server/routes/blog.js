const express = require("express");
const router = express.Router();
const {
	addBlogItem,
	getAllBlogItems,
	getsingleBlogItem,
} = require("../controllers/blog");
const {
	checkBlogItemExist,
} = require("../middlewares/database/databaseErrorHelpers");

router.get("/", getAllBlogItems);
router.get("/:id", checkBlogItemExist, getsingleBlogItem);
router.post("/addBlogItem", addBlogItem);
module.exports = router;
