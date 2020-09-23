const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./Comment");
const slugify = require("slugify");
const jwt = require("jsonwebtoken");

const BlogItemSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	shortDescription: {
		type: String,
		required: true,
	},
	content: {
		String,
	},
	blogTags: [
		{
			type: String,
			required: true,
		},
	],
	thumbnail: {
		type: String,
	},
	jumbotronImage: {
		type: String,
	},

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
	slug: {
		type: String,
	},
});

BlogItemSchema.pre("save", function (next) {
	if (!this.isModified("title")) {
		next();
	}
	this.slug = this.makeSlug();
	next();
});

BlogItemSchema.methods.makeSlug = function () {
	return slugify(this.title, {
		replacement: "-",
		remove: /[*+~.()'"!:@]/g,
		lower: true,
		strict: false,
		locale: "vi",
	});
};

module.exports = mongoose.model("BlogItem", BlogItemSchema);
