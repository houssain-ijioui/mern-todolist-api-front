import React from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import handleDeleteBtn from "../utilities/handleDeleteBtn";



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
            <span className={`p-1 py-2 rounded-lg font-medium ${priorityColor[priority]}`}>{priority}</span>
          </Table.Cell>
          <Table.Cell className='bg-stone-800 text-white'>
            <span className={`p-1 py-2 rounded-lg font-medium ${statusClassColor}`}>{completed ? "Completed" : "Not Completed"}</span>
          </Table.Cell>
          <Table.Cell className='bg-stone-800 text-white'>
            <span className='p-1 py-2 rounded-lg font-medium bg-red-700 cursor-pointer'onClick={() => {
              handleDeleteBtn(title, getTasks, id)
            }}>Delete</span>
          </Table.Cell>
        </Table.Row>
      <div className="border-t border-white"></div>
    </>
  )
}

export default TableTaskRow;
