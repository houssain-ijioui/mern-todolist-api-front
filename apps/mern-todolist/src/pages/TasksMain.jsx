import React, { useState } from 'react';
import AllTasks from './AllTasks';
import TaskDetail from './TaskDetail';
import TaskForm from './TaskForm';


function TasksMain() {

  const [ showAllTasks, setShowAllTasks ] = useState(true);
  const [ showTaskDetail, setShowTaskDetail ] = useState(false);
  const [ showTaskForm, setShowTaskForm ] = useState(false);


  const showAllTasksPage = () => {
    setShowAllTasks(true);
    setShowTaskDetail(false);
    setShowTaskForm(false);
  }
  const showTaskDetailPage = () => {
    setShowAllTasks(false);
    setShowTaskDetail(true);
    setShowTaskForm(false);
  }
  const showTaskFormPage = () => {
    setShowAllTasks(false);
    setShowTaskDetail(false);
    setShowTaskForm(true);
  }

  return (
    <div>
      {showAllTasks && <AllTasks showTaskDetailPage={showTaskDetailPage} showTaskFormPage={showTaskFormPage} />}
      {showTaskDetail && <TaskDetail />}
      {showTaskForm && <TaskForm />}
    </div>
  )
}

export default TasksMain;
