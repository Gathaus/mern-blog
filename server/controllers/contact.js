const errorWrapper = require("../helpers/error/errorWrapper");
const sendMail = require("../helpers/libraries/sendEmail");

const contactMessage = errorWrapper(async (req, res, next) => {
	const name = req.body.full_name;
	const email = req.body.email;
	const subject = req.body.subject;
	const message = req.body.message;

	const emailTemplate = `
	<p>'${name}'</p></br></br>
	<p>'${email}'</p></br></br>
	<p>'${subject}'</p></br></br>
	<p>'${message}'</p>
`;
	try {
		await sendMail({
			from: process.env.SMTP_EMAIL,
			to: process.env.SMTP_EMAIL,
			subject: "New Comment to Your Blog",
			html: emailTemplate,
		});
		return res.status(200).json({
			success: true,
			message: "Email Sent",
		});
	} catch (err) {
		return next(new CustomError("Email Could Not Be Sent", 500));
	}
	console.log(req.body);
});

module.exports = {
	contactMessage,
};
