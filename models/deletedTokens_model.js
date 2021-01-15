//1-mongoose
//2-schema
//3-export model

const { strict } = require("assert");
const { array } = require("joi");
const { Double } = require("mongodb");
const mongoose = require("mongoose");

var deletedTokens = require("../models/staff_model");
let deletedTokensSchema = new mongoose.Schema(
  {
  

token : {type: String},

  }
);

module.exports = mongoose.model("deletedTokens", deletedTokensSchema);
