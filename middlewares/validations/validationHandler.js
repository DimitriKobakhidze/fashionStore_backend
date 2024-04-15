const { validationResult } = require("express-validator");
exports.validatorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    console.log(errors);
    return res.status(400).send({ msg: "Validation error" });
  }
};
