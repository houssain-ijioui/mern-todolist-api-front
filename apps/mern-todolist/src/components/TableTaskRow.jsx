import React from 'react';
import { Table } from 'flowbite-react';



const TableTaskRow = ({ title, deadline, priority, completed }) => {

  const priorityColor = {
    low: "bg-lime-600",
    high: "bg-red-700",
    middle: "bg-amber-500"
    low: "bg-lime-600",
    high: "bg-red-700",
    middle: "bg-amber-500"
  }

  const statusClassColor = completed  ?  "bg-lime-600" : "bg-cyan-700" ;


  return (
    <>
      <Table.Row className="px-10">
        <Table.Cell className="bg-stone-800 text-white whitespace-nowrap font-medium">{title}</Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>{deadline.toLocaleString("fr-FR")}</Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
          <span className={`p-1 rounded-lg font-medium ${priorityColor[priority]}`}>{priority}</span>
        </Table.Cell>
        <Table.Cell className='bg-stone-800 text-white'>
          <span className={`p-1 rounded-lg font-medium ${statusClassColor}`}>{completed ? "Completed" : "Not Completed"}</span>
        </Table.Cell>
      </Table.Row>
      <div className="border-t border-white"></div>
    </>
  )
}

export default TableTaskRow;
