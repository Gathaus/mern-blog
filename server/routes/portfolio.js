const express = require("express");
const router = express.Router();
const {
	addPortfolioItem,
    editPortfolioItem,
    deletePortfolioItem,
    getSinglePortfolioItem,
    getAllPortfolioItems
} = require("../controllers/portfolio");
const {
	checkPortfolioItemExist,
} = require("../middlewares/database/databaseErrorHelpers");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

router.post("/addPortfolioItem", getAccessToRoute, addPortfolioItem);
router.put(
	"/:id/editPortfolioItem",
	[getAccessToRoute, checkPortfolioItemExist],
	editPortfolioItem
);
router.delete(
	"/:id/deletePortfolioItem",
	[getAccessToRoute, checkPortfolioItemExist],
	deletePortfolioItem
);
router.get("/", getAllPortfolioItems);

router.get("/:id", getSinglePortfolioItem);

module.exports = router;
