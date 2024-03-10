import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            require: [true, "Password is required"],
            unique: true,
        },
    },
    {
        timeseries: true,
    }
);

export const User = mongoose.model("User", userSchema);
