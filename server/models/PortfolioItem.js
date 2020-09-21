const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");
const jwt = require("jsonwebtoken");

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
	slug: String,
});
PortfolioItemSchema.pre("save", function (next) {
	if (!this.isModified("title")) {
		next();
	}
	this.slug = this.makeSlug();
	next();
});

PortfolioItemSchema.methods.makeSlug = function () {
	return slugify(this.title, {
		replacement: "-",
		remove: /[*+~.()'"!:@]/g,
		lower: true,
		strict: false,
		locale: "vi",
	});
};
module.exports = mongoose.model("PortfolioItem", PortfolioItemSchema);
