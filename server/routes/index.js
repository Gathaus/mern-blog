const express = require("express");
const {
	adminRegister,
	adminLogin,
	adminLogout,
} = require("../controllers/auth");
const router = express.Router();
const blog = require("./blog");
const portfolio = require("./portfolio");
const { getUser } = require("../controllers/auth");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

router.use("/blog", blog);
router.use("/portfolio", portfolio);
router.post("/adminRegister", adminRegister);
router.post("/adminLogin", adminLogin);
router.get("/user", getAccessToRoute, getUser);
router.get("/adminLogout", getAccessToRoute, adminLogout);
module.exports = router;
