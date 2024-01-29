/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import notFoundError from './middlewares/notFoundError';
import tasksRoutes from './routes/tasks.routes.';


const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

// tasks
app.use('/api/tasks', tasksRoutes);

// handle non existing routes
app.use(notFoundError);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
