import TaskModel from "../models/task.model";


const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await TaskModel.findById(id)

        // task do not exist
        if (!task) {
            res.status(404).send({
                message: "Task Not Found"
            })
        }

        // task exists
        res.status(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Oops Something Went Wrong"
        })
    }
}

const tasksControllers = {
    getTaskById
}

export default tasksControllers;