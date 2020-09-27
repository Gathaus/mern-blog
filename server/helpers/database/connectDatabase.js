const mongoose = require("mongoose");

const connectDatabase = () => {
	mongoose
		.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
		})
		.then(() => {
			console.log("MongoDb Connection Successful");
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = connectDatabase;
