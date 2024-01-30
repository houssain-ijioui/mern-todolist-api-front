import { validateTaskCreation } from "../function/TaskValidition";
import TaskModel from "../models/task.model";



const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    return res.status(200).send(tasks)
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Oops something went wrong"
    })
  }
}



const createTask = async (req, res) => {
  const {title , status, description, deadline } = req.body;
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
          status: status,
          description: description,
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



const updateTask = async (req, res) => {
  const { title, status, description, deadline } = req.body;
  const { id } = req.params;

  try {
    const taskUpdate = {
      title,
      status,
      description,
      deadline
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
    getAllTasks
}

export default tasksControllers;
