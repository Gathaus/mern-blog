const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioItemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	shortDescription: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	portfolioTags: [
		{
			type: String,
			required: true,
		},
	],
	thumbnail: {
		type: String,
	},

	links: [
		{
			type: String,
		},
	],
	comments: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Comment",
		},
	],
	views: Number,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("PortfolioItem", PortfolioItemSchema);
