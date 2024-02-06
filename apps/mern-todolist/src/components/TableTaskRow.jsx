import React, { useState } from 'react';
import { Table, Button } from 'flowbite-react';
import UpdateTaskModal from './UpdateTaskModal';
import { Link } from 'react-router-dom';
import handleDeleteBtn from "../utilities/handleDeleteBtn";
import StatusButton from './StatusButton';



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


      <Table.Row className="px-10 w-3/4 bg-stone-800">
        <Link className='bg-stone-50' to={`/task/${id}`}>
          <Table.Cell className="bg-stone-800 text-white whitespace-nowrap font-medium w-full">{title}</Table.Cell>
        </Link>
        <Table.Cell className='bg-stone-800 text-white'>{deadline.split('T')[0]}</Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
          <StatusButton text={priority} color={priorityColor[priority]} />
        </Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
          <StatusButton text={completed ? "Completed" : "Not Completed"} color={statusClassColor} />
        </Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
          <Button openModal={openModal} onClick={() => setOpenModal(true)}className='bg-yellow-500'>Update</Button>
          <StatusButton text={"Delete"} color={"bg-red-700"} onClick={() => { handleDeleteBtn(title, getTasks, id)}} />
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
