const Joi = require('joi');


const taskCreationValidationSchema = Joi.object({
    title: Joi.string().required(),
    status: Joi.string(),
    description: Joi.string(),
    deadline: Joi.string(),
})


const validateTaskCreation = (data) => {
  return taskCreationValidationSchema.validate(data, { abortEarly: false });
}


module.exports = {
  validateTaskCreation,
};
