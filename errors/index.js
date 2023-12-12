const BadRequestError = require("./bad-request");
const CustomAPIError = require("./custom-error");
const UnAuthenticatedError = require("./unauthenticated");

module.exports ={
    BadRequestError,
    CustomAPIError,
    UnAuthenticatedError
}