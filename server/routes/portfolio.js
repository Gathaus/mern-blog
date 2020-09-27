const express = require("express");
const router = express.Router();
const Portfolio = require("../models/PortfolioItem");
const {
	addPortfolioItem,
	editPortfolioItem,
	deletePortfolioItem,
	getSinglePortfolioItem,
	getAllPortfolioItems,
} = require("../controllers/portfolio");
const {
	checkPortfolioItemExist,
} = require("../middlewares/database/databaseErrorHelpers");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const {portfolioQueryMiddleware} = require("../middlewares/query/portfolioQueryMiddleware");

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
router.get("/", portfolioQueryMiddleware(Portfolio), getAllPortfolioItems);

router.get("/:slug", getSinglePortfolioItem);

module.exports = router;
