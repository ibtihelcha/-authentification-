const hashpass = async (req, res, next) => {
  var bcrypt = require("bcryptjs");
  var salt = bcrypt.genSaltSync(13);
  var hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  next();
};

module.exports = hashpass;
