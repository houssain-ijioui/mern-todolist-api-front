import { validateTaskCreation } from "../function/TaskValidition";
import TaskModel from "../models/task.model";



const getAllTasks = async (req, res) => {
  try {
    if (req.query.status) {
      const tasks = await TaskModel.find({ deleted: false, status: req.query.status });
      return res.status(200).send(tasks)
    }
    const tasks = await TaskModel.find({ deleted: false });
    return res.status(200).send(tasks)
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Oops something went wrong"
    })
  }
}



const createTask = async (req, res) => {
  const {title , completed, description, deadline, priority } = req.body;
  try {
    const validationTask = validateTaskCreation(req.body);
    if (validationTask.error) {
      return res.status(400).send({
        message: "validation failed to create task",
        errors: validationTask.error.details
      })
    }
    await TaskModel.create(
      {
          title: title,
          completed: completed,
          description: description,
          priority: priority,
          deadline: deadline
      }

      );
      res.status(200).send({
        message: "task created with success"
      })


  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Oops Somthing Went Wrong!!!"
    })
  }
}




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


const deleteTask = async (req,res) => {
  try {
    const { id } = req.params;

    const taskUpdate = {
      deleted: true
    }

    await TaskModel.findByIdAndUpdate(id, taskUpdate)

    return res.status(200).send({
      message: "Task deleted successufly"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Oops something went wrong' });
  }
}





const updateTask = async (req, res) => {
  const { title, completed, description, deadline, priority } = req.body;
  const { id } = req.params;

  try {
    const taskUpdate = {
      title,
      completed,
      description,
      deadline,
      priority
    }


    await TaskModel.findByIdAndUpdate(id, taskUpdate);

    res.status(200).send({
      message: "Task Updated Successfully"
    })
  } catch (error) {
    return res.status(500).send({
      message: "Oops something went wrong"
    })
  }
}



const tasksControllers = {
    getTaskById,
    createTask,
    updateTask,
    getAllTasks,
    deleteTask
}
export default tasksControllers;
