const express = require("express");
const authrouter = express.Router();
const createfullname = require("../middlewares/createfullname");
const createuser = require("../controllers/registeruser");
const hashpass = require("../middlewares/crypt");
const login = require("../controllers/loginuser");
const authmiddelware = require("../middlewares/authmiddelware");
const myprofile = require("../controllers/getmyprofile");
authrouter.post("/login", login);
authrouter.post("/sign_up", createfullname, hashpass, createuser);
authrouter.get("/profile/me",authmiddelware,myprofile);

module.exports = authrouter;
