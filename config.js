require("dotenv/config");

const jwtconfig = {
  privatekey: process.env.JWT_PRIVATE_KEY.replace(/\\n/g, "\n"),
  publickey: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, "\n"),
  acessTokenExpirationPeriod: process.env.JWT_ACCESS_EXPIRATION_TOKEN,
};
const serverconfig = {
  port: process.env.PORT,
};
const databaseconfig = {
  url: process.env.DATABASE_URL,
  dbname: process.env.DATABASE_NAME,
};
module.exports = {
  SERVER_CONFIG: serverconfig,
  DATABASE_CONFIG: databaseconfig,
  JWTCONFIG: jwtconfig,
};
