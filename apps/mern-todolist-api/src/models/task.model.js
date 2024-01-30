import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    },
    description: {
        type: String
    },
    deadline: {
        type: String
    }
}, {
    timestamps: true
})

const Task = mongoose.model("Task", taskSchema);

export default Task;