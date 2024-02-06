import styles from './app.module.css';
import Home from '../pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import TasksMain from '../pages/TasksMain.jsx';
import TaskDetail from '../pages/TaskDetail.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<TasksMain />} />
        <Route path='/task/:id' element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;
