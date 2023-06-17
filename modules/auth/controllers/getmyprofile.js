const { JWTCONFIG } = require("../../../config");
const usermodel = require("../../../src/data/models/model");
const { express } = require("express");
const { mongoose } = require("mongoose");
const myprofile = async (req, res, next) => {
  const userId = req.user.id;
  const found = await usermodel.findOne({ _id: userId });
  if (found) {
    const { password, __v, ...otherUserInfo } = found._doc;
    return res.status(200).send({
      payload: otherUserInfo,
    });
  } else {
    return res.status(404).json({
      message: "no user found",
    });
  }
};

module.exports = myprofile;
