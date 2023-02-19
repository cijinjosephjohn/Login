const mongoose= require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        username:String,
        email:String,
        phoneNumber:String
    },
    {
        collection:"UserInfo",

    }
);
mongoose.model("UserInfo",UserDetailsSchema);