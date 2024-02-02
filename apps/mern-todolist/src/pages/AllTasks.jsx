import React, { useCallback, useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import TableTaskRow from '../components/TableTaskRow';
import axios from 'axios';
import AddTaskButton from '../components/AddTaskButton';


function AllTasks() {
  const [ tasks, setTasks ] = useState([]);

  const getTasks = useCallback(async () => {
    const tasks = await axios.get("http://localhost:8000/api/tasks")
    setTasks(tasks.data);
  })

  useEffect(() => {
    getTasks()
    console.log(tasks);
  }, []);


  return (
    <div className="overflow-x-auto w-11/12 m-auto bg-gray-500 rounded-lg mt-10 py-10">
      <AddTaskButton />
      <Table className='w-11/12 m-auto'>
        <Table.Head>
          <Table.HeadCell className='bg-stone-900 text-white'>Title</Table.HeadCell>
          <Table.HeadCell className='bg-stone-900 text-white'>Dedaline</Table.HeadCell>
          <Table.HeadCell className='bg-stone-900 text-white'>Priority</Table.HeadCell>
          <Table.HeadCell className='bg-stone-900 text-white'>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {tasks.map((task, index) => {
            return (
              <TableTaskRow key={index} title={task.title} deadline={task.deadline} priority={task.priority} completed={task.completed} />
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default AllTasks;