//1-mongoose
//2-schema
//3-export model

const { strict } = require("assert");
const { Double } = require("mongodb");
const mongoose = require("mongoose");

var slot = require("../models/slot_model");
var request = require("../models/request_model");

let annualLeaveSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      $in: ["accept", "reject", "pending"],
    },
    targetDay: { type: Date },
    slot: [{ type: mongoose.Schema.Types.ObjectId, ref: "slot" }],
    request: [{ type: mongoose.Schema.Types.ObjectId, ref: "request" }],
  },

  {
    strict: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("annualLeave", annualLeaveSchema);
