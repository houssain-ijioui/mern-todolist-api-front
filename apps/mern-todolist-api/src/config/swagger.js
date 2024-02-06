import swaggerJsdoc from "swagger-jsdoc";


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task API Documentation',
      description: "API endpoints for a mini task manager",
      contact: {
        name: "Houssain Ijioui",
        email: "housainijioui.com",
        url: "https://github.com/houssain-ijioui/recipesBackendApi"
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:8000/",
        description: "Local server"
      }
    ]  
  },
  apis: ["../routes/tasks.routes"], // Update the path to the correct location of your API routes file
};

const specs = swaggerJsdoc(options);

export default specs;