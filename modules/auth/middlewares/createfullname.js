const createfullname = async (req, res, next) => {
  if (req.body.firstname && req.body.firstname) {
    req.body.fullname = req.body.firstname + " " + req.body.lastname;
    next();
  } else {
    res.status(400).send({
      message: "please give me ypur first and last name ",
    });
  }
};
module.exports = createfullname;
