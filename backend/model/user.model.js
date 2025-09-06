import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // 👈 makes sure no two users have the same email
  },
  password: {
    type: String,
    required: true,
  },
  listing: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing", // 👈 Reference to another model (e.g. Airbnb listings)
    },
  booking:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Booking"
    }
},{timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;
