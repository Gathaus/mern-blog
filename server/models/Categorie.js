const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorieSchema = new Schema({
	blogItemCategories: [
		{
			type: String,
		},
	],
	portfolioItemCategories: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model("Categorie", CategorieSchema);

