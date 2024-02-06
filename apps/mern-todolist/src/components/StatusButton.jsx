import React from 'react'


const StatusButton = ({ text, color, onClick }) => {
  return (
    <span onClick={onClick} className={`text-white px-2 py-2 rounded-lg font-medium cursor-pointer ${color}`}>{text}</span>
  )
}

export default StatusButton;