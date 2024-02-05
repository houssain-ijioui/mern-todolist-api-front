import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
    },
    description: {
        type: String
    },
    deadline: {
        type: Date
    },
    priority: {
        type: String,
        enum: ['low', 'middle', 'high']
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Task = mongoose.model("Task", taskSchema);

export default Task;
