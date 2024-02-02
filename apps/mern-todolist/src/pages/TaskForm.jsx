import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function TaskForm() {
  return (
      <div>
        <form className="flex max-w-lg flex-col gap-4 mx-auto my-5 p-5 bg-customblue rounded-xl">
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
                className="w-full p-2 border border-gray-300 resize-none rounded-lg"
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
                <option value="low" className="bg-green-100">Low</option>
                <option value="medium" className="bg-yellow-100">Medium</option>
                <option value="high" className="bg-red-100">High</option>
              </select>

            </div>
          </div>

          <Button type="submit">Create Task</Button>
        </form>
      </div>
  )
}

export default TaskForm
