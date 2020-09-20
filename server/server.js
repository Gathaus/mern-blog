const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const connectDatabase = require("./helpers/database/connectDatabase");
const errorHandler = require("./middlewares/errors/errorHandler");

dotenv.config({
	path: "./config/env/config.env",
});

connectDatabase();


const app = express();
app.use(express.json());


const PORT = process.env.PORT;

app.use("/api", routes);

app.use(errorHandler);


app.listen(PORT, () => {
	console.log(`App started on ${PORT} `);
});
