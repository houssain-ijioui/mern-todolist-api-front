// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Home from '../pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import TasksMain from '../pages/TasksMain.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<TasksMain />} />
      </Routes>
    </div>
  );
}

export default App;
