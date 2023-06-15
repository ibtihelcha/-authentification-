const usermodel = require("../../../src/data/models/model");

const createuser = async (req, res, next) => {
  console.log(req.body);
  try {
    const response = await usermodel.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
    });
    const createuser = response._doc;
    if (createuser) {
      const { password, __v, ...otheruserInfo } = createuser;
      return res.status(201).json(response);
    } else {
      return res.status(400).json({
        message: "Error creating user",
      });
    }
  } catch (err) {
    console.log("err: ", err);
    res.status(500).send({ message: "error happened" });
  }
};

module.exports = createuser;
