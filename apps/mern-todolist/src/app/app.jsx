// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Home from '../pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import TasksMain from '../pages/TasksMain.jsx';
import TaskForm from '../pages/TaskForm';
import AddTaskButton from '../components/AddTaskButton';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<TasksMain />} />
        {/* <Route path='/addTask' element={<TaskForm />} /> */}
        <Route path='/addTask' element={<AddTaskButton />} />

      </Routes>
    </div>
  );
}

export default App;
