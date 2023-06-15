const jwt = require("jsonwebtoken");
const { JWTCONFIG } = require("../../../config");

const createtoken = async (user) => {
  const payload = {
    sub: user._id,
    iat: Date.now(),
  };
  const token = await jwt.sign(payload, JWTCONFIG.privatekey, {
    algorithm: "RS256",
  });
  return token;
};
module.exports = createtoken;
