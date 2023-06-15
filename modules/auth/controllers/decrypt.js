const { JWTCONFIG } = require("../../../config");
const jsonwebtoken = require("jsonwebtoken");
const decrypttoken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const decodedtoken = await jsonwebtoken.verify(token, JWTCONFIG.publickey);
    res.status(200).send({
      decrypttoken: decodedtoken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error ");
  }
};

module.exports = decrypttoken;
