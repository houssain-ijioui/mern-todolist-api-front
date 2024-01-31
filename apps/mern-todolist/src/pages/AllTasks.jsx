import React from 'react'

function AllTasks({ showTaskDetailPage, showTaskFormPage }) {
  return (
    <div>
        <h1>AllTasks</h1>
        <button onClick={showTaskDetailPage}>Individual Task</button>
        <br></br>
        <button onClick={showTaskFormPage}>Create Task</button>
    </div>
  )
}

export default AllTasks;