import React from 'react';
import { useState } from 'react';

function TaskForm() {
  const [addForm, setAddForm] = useState(true);
  const [updateForm, setUpdateForm] = useState(false);
  return (
      <div className=''>
        <form className="flex max-w-lg flex-col gap-4 mx-auto my-5 px-8 py-6 bg-customblue rounded-xl">
          <div>
            <div className="mb-2 block">
              <Label className='text-white' htmlFor="Title" value="Task Title" />
              <TextInput id="Title" type="text" placeholder="Title" required />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label className='text-white block' htmlFor="description" value="Task description" />
              <textarea
                className="w-full p-2 border border-gray-300 h-36 rounded-lg"
                placeholder="Enter task description here..."
              ></textarea>
            </div>
          </div>
          <div className=''>
            <div className="mb-2 block">
              <Label className='text-white' htmlFor="description" value="From" />
              <TextInput id="description" type="date" placeholder='description' required />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label className='text-white block' htmlFor="description" value="Task description" />
              <select className="border rounded p-2 w-full">
                <option value="low" className="bg-customblue">Low</option>
                <option value="medium" className="bg-yellow-400">Medium</option>
                <option value="high" className="bg-red-600">High</option>
              </select>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <Button type="submit" className='lg:col-span-2 col-span-full hover:text-white bg-white text-customblue'>Cancel</Button>
            <Button type="submit" className='lg:col-span-2 col-span-full bg-iconBg'>Create Task</Button>
          </div>
        </form>
      </div>
  )
}

export default TaskForm
