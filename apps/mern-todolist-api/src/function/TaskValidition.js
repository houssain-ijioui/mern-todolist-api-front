const Joi = require('joi');


const taskCreationValidationSchema = Joi.object({
    title: Joi.string().required(),
    priority: Joi.string(),
    status: Joi.string(),
    completed: Joi.boolean(),
    description: Joi.string(),
    deadline: Joi.string(),
})



const validateTaskCreation = (data) => {
  return taskCreationValidationSchema.validate(data, { abortEarly: false });
}

module.exports = {
  validateTaskCreation,
};
