import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic:{
        type: String,
        default: "",
    },
    //createdAt and updatedAt => member since <createdAt>
    },
    {timestamps: true}
);


const User = mongoose.model("User",userSchema);

export default User;