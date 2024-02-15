import  { config }  from 'dotenv';
config()
import express from 'express';
import * as path from 'path';
import notFoundError from './middlewares/notFoundError';
import Database from './config/db.config';
import tasksRoutes from './routes/tasks.routes.js';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger";

const app = express();
// connect to db


const db = new Database(process.env.MONGO_URI);
db.connectionDb();


app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

app.use(cors());

// tasks
app.use('/api/tasks', tasksRoutes);

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// handle non existing routes
app.use(notFoundError);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
