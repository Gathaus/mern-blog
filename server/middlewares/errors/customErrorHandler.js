const CustomError = require("../../helpers/error/customError");
const customErrorHandler = (err, req, res, next) => {
    let customError = err;
    console.log(err.name)

    if (err.name === "SyntaxError") {
        customError = new CustomError("Unexpected syntax", 400);
    }
    if(err.name = "ValidationError"){
        customError = new CustomError(err.message,401);
    }
    if(err.code === 11000){
        //duplicate key
        customError = new CustomError("Duplicate Key Found : Check your Input",400)
    }
    if(err.name = "CastError"){
        console.log(err)
        customError = new CustomError("There is no such id",400);
    }
    console.log(customError.name, customError.message, customError.status+"iAA");

    res.status(customError.status || 500)
        .json({
            success: false,
            message: customError.message || "Internal Server Error"
        })
};
module.exports = customErrorHandler;