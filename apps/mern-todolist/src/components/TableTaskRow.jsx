import React from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import handleDeleteBtn from "../utilities/handleDeleteBtn";
import StatusButton from './StatusButton';



const TableTaskRow = ({ title, deadline, priority, completed, id, getTasks }) => {

  const priorityColor = {
    low: "bg-lime-600",
    high: "bg-red-700",
    middle: "bg-amber-500"
   
  }

  const statusClassColor = completed  ?  "bg-lime-600" : "bg-cyan-700" ;


  return (
    <>
        <Table.Row className="px-10 w-3/4 bg-stone-800">
          <Link to={`/task/${id}`}>
            <Table.Cell className="bg-stone-800 text-white whitespace-nowrap font-medium w-full">{title}</Table.Cell>
          </Link>
          <Table.Cell className='bg-stone-800 text-white'>{deadline}</Table.Cell>
          <Table.Cell className='bg-stone-800 text-white'>
            <StatusButton text={priority} color={priorityColor[priority]} />
          </Table.Cell>
          <Table.Cell className='bg-stone-800 text-white'>
            <StatusButton text={completed ? "Completed" : "Not Completed"} color={statusClassColor} />
          </Table.Cell>
          <Table.Cell className='bg-stone-800 text-white'>
            <StatusButton text={"Delete"} color={"bg-red-700"} onClick={() => { handleDeleteBtn(title, getTasks, id)}} />
          </Table.Cell>
        </Table.Row>
      <div className="border-t border-white"></div>
    </>
  )
}

export default TableTaskRow;
