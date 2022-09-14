const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
      },
      userName:{
        type:String,
        required: true,
        trim: true,
      },
      userEmail:{
        type:String,
        required: true,
        trim: true,
      },
      userPhone:{
        type:Number,
        required: true,
        trim: true,
      },
      userBirthday:{
        type:Number,
        required: true,
        trim: true,
      },
      userLocation:{
        type:String,
        required: true,
        trim: true,
      },
      birthDay: {
        type: String,
        // required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        // required: true,
        trim: true,
      },
      phoneNo:{
        type: Number,
      },
      city:{
        type: String,
      },

  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });

  

  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

const User = mongoose.model("User", userSchema);

module.exports = User;
