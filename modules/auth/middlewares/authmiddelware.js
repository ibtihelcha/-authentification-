const jsonwebtoken = require("jsonwebtoken");
const { JWTCONFIG } = require("../../../config");
const authmiddelware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("No Auth Header");
    }
    const token = req.headers["authorization"].split(" ")[1];
    const decodedtoken = jsonwebtoken.verify(token, JWTCONFIG.publickey);
    // if (decodedtoken.exp < Math.floor(Date.now() / 1000)) {
    //   throw new error("Token Expired");
    // }
    req.user = {};
    req.user.id = decodedtoken.sub;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send({
      message: "not authorized",
    });
  }
};
module.exports = authmiddelware;
