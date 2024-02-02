'use client';
import { Button, Label, Modal, TextInput , Dropdown } from 'flowbite-react';
import { useRef, useState } from 'react';
const AddTaskButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
          className="m-auto group cursor-pointer outline-none hover:rotate-90 duration-300 ml-12"
            title="Add New Task"
          >
            <svg
            className="m-auto stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path strokeWidth="1.5" d="M8 12H16"></path>
            <path strokeWidth="1.5" d="M12 16V8"></path>
          </svg>
      </button>
      <Modal  show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header className='bg-slate-50' />
        <Modal.Body className='bg-slate-50 rounded-xl'>
        <div className=''>
        <form className="mx-auto text-customblue rounded-xl">
          <div>
            <div className="mb-2 block">
              <Label className='text-customblue' htmlFor="Title" value="Task Title" />
              <TextInput id="Title" type="text" placeholder="Title" required />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label className='block text-customblue' htmlFor="description" value="Task description" />
              <textarea
                className="w-full p-2 border border-gray-300 h-36 rounded-lg"
                placeholder="Enter task description here..."
              ></textarea>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className="mb-2 block lg:col-span-2 col-span-full">
              <Label className='text-customblue' htmlFor="description" value="From" />
              <TextInput id="description" type="date" placeholder='description' required />
            </div>
            <div className="mb-2 block lg:col-span-2 mx-0 col-span-full">
              <Label className='text-customblue block' htmlFor="Priority" value="Task Priority" />
              <Dropdown label="Priority" dismissOnClick={false}>
                <Dropdown.Item>Low</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
            </Dropdown>
            </div>
          </div>
          <div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <Button type="submit" className='lg:col-span-2 col-span-full hover:text-white bg-white text-customblue'>Cancel</Button>
            <Button type="submit" className='lg:col-span-2 col-span-full bg-iconBg'>Create Task</Button>
          </div>
        </form>
      </div>
        </Modal.Body>
      </Modal>
    </>

  )
}
export default AddTaskButton;
