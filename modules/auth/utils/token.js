const jwt = require("jsonwebtoken");
const { JWTCONFIG } = require("../../../config");

const createtoken = async (user) => {
  const payload = {
    sub: user._id,
    iat: Math.floor(Date.now() / 1000),
  };
  const token = jwt.sign(payload, JWTCONFIG.privatekey, {
    algorithm: "RS256",
    expiresIn: JWTCONFIG.acessTokenExpirationPeriod,
  });
  return token;
};
module.exports = createtoken;
