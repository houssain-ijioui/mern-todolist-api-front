'use client';
import { Button, Label, Modal, TextInput , Dropdown } from 'flowbite-react';
import { useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTaskButton = ({ setFormSubmitted, openModal, setOpenModal, getTasks }) => {
  // State for form inputs
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');

  // Handler for date input change
  const handleDateChange = (e) => {
    setDeadline(e.target.value);
  };

  // Handler for priority dropdown change
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    console.log('Priority:', e.target.value);
  };


  const handleClick = () => {
    Swal.fire({
      icon: 'success',
      title: `${title} saved successfully`,
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster',
      },
    }).then(() => {
      setFormSubmitted(true);
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Form submitted');
      console.log('Title:', title);
      console.log('Description:', description);
      console.log('Deadline:', deadline);
      console.log('Priority:', priority);
      try {
        const postData = {
          title,
          description,
          deadline,
          priority,
        };

        // Stringify the data to avoid circular references
        const postDataString = JSON.stringify(postData);

        await axios.post('http://localhost:8000/api/tasks', postDataString, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setOpenModal(false);
        handleClick();
        getTasks();
        // Reset the form fields and close the modal if needed
        setTitle('');
        setDescription('');
        setDeadline('');
        setPriority('');

        // Set formSubmitted to true to hide the form and show tasks
        setFormSubmitted(true);

        console.log('Task created successfully');
      } catch (error) {
        console.error('Error:', error);
      }
  }

  return (
    <>
      <Modal  show={openModal} size="md" popup >
        <Modal.Header className='bg-slate-50' />
        <Modal.Body className='bg-slate-50 rounded-xl'>
        <div className=''>
        <form onSubmit={handleSubmit} className="mx-auto text-customblue rounded-xl">
          <div>
            <div className="mb-2 block">
              <Label className='text-customblue' htmlFor="Title" value="Task Title" />
              <TextInput id="Title" type="text" placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label className='block text-customblue' htmlFor="description" value="Task description" />
              <textarea
                className="w-full p-2 border border-gray-300 h-36 rounded-lg"
                placeholder="Enter task description here..." onChange={(e) => {setDescription(e.target.value)}}
              ></textarea>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className="mb-2 block lg:col-span-2 col-span-full">
              <Label className='text-customblue' htmlFor="description" value="From" />
              <TextInput id="description" type="date" placeholder='description' value={deadline}
                  onChange={handleDateChange}  />
            </div>
            <div className="mb-2 block lg:col-span-2 mx-0 col-span-full">
              <Label className='text-customblue block' htmlFor="Priority" value="Task Priority" />
              <select
                id="Priority"  // Assign an id to match the "htmlFor" in the label
                className="border rounded p-2 w-full"
                onChange={handlePriorityChange}
                value={priority} // Make sure to set the selected value based on your component state
              >

                <option selected value="">seltect</option>
                <option value="low">Low</option>
                <option value="middle">Middle</option>
                <option value="high">High</option>
              </select>
            </div>

          </div>
          <div>
          </div>
          <div className='w-full grid grid-cols-4 gap-4'>

            <Button onClick={() => {setOpenModal(false)}} type="submit" className='lg:col-span-2 col-span-full bg-iconBg'
            >cancel</Button>
            <Button onClick={handleSubmit} type="submit" className='lg:col-span-2 col-span-full bg-iconBg'
            >Create Task </Button>
          </div>
        </form>
      </div>
        </Modal.Body>
      </Modal>
    </>

  )
}
export default AddTaskButton;
