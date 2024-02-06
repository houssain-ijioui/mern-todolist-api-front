import React, { useState } from 'react';
import { Table, Button } from 'flowbite-react';
import UpdateTaskModal from './UpdateTaskModal';



const TableTaskRow = ({ id,title, deadline, priority, completed, description, setFormSubmitted, getTasks }) => {
  const [openModal, setOpenModal] = useState(false);

  const priorityColor = {
    low: "bg-lime-600",
    high: "bg-red-700",
    middle: "bg-amber-500"
  }

  const statusClassColor = completed  ?  "bg-lime-600" : "bg-cyan-700" ;

  return (
    <>

      <Table.Row className="px-10">
        <Table.Cell className="bg-stone-800 text-white whitespace-nowrap font-medium">{title}</Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>{deadline.split('T')[0]}</Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
          <span className={`p-1 rounded-lg font-medium ${priorityColor[priority]}`}>{priority}</span>
        </Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
          <span className={`p-1 rounded-lg font-medium ${statusClassColor}`}>{completed ? "Completed" : "Not Completed"}</span>
        </Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
        <Button openModal={openModal} onClick={() => setOpenModal(true)}className='bg-yellow-500'>Update</Button>
        </Table.Cell>
      </Table.Row>
      <UpdateTaskModal openModal={openModal} setOpenModal={setOpenModal} id={id} title={title}
        deadline={deadline}
        priority={priority}
        completed={completed}
        description={description}
        setFormSubmitted={setFormSubmitted} getTasks={getTasks}
      />
      <div className="border-t border-white"></div>
    </>
  )
}

export default TableTaskRow;
