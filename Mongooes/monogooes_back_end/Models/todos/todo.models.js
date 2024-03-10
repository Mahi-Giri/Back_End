import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        content: {
            type: String,
            require: [true, "Content is required"],
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        subTodo: [
            {
                type:Schema.Types.ObjectId,
                ref: "SubTodo"
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Todo = mongoose.model("Todo", todoSchema);
