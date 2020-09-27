const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const connectDatabase = require("./helpers/database/connectDatabase");
const errorHandler = require("./middlewares/errors/errorHandler");
const cors = require("cors");

dotenv.config({
	path: "./config/env/config.env",
});

connectDatabase();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => {
	console.log(`App started on ${PORT} `);
});
