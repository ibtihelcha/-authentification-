const usermodel = require("../../../src/data/models/model");
var bcrypt = require("bcryptjs");
const createtoken = require("../utils/token");
const loginuser = async (req, res, next) => {
  console.log(req.body);
  try {
    const founduser = await usermodel.findOne({
      email: req.body.email,
    });
    if (founduser) {
      const iscorrectpassword = await bcrypt.compare(
        req.body.password,
        founduser?.password
      );
      if (iscorrectpassword) {
        delete founduser._doc.password;
        const token = await createtoken(founduser._doc);
        return res.status(200).send({
          message: "good",
          payload: {
            user: founduser,
            token: token,
          },
        });
      } else {
        return res.status(401).json({ message: "error password" });
      }
    } else {
      return res.status(401).json({
        message: "invalide ",
      });
    }
  } catch (err) {
    console.log("err: ", err);
    res.status(500).send({ message: "error happened" });
  }
};

module.exports = loginuser;
