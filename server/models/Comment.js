const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PortfolioItem = require("./PortfolioItem");
const CommentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
		minlength: 10,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	blogItem: {
		type: mongoose.Schema.ObjectId,
		ref: "BlogItem",
		required: true,
	},
	isApproved: Boolean,
});

CommentSchema.pre("save", async function (next) {});

module.exports = mongoose.model("Comment", CommentSchema);
