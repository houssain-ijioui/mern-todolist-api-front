// UpdateTaskModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateTaskModal =
({ openModal,setOpenModal,getTasks, id,title, deadline, priority, description,completed }) => {
  console.log(openModal);

  const [taskTitle, setTitle] = useState(title);
  const [taskDescription, setDescription] = useState(description);
  const [taskDeadline, setDeadline] = useState(deadline ? deadline.split('T')[0] : '');
  const [taskPriority, setPriority] = useState(priority);
  const [taskcompleted, setCompleted] = useState(completed);

  // Handler for date input change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };


  // Handler for date input change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Handler for date input change
  const handleDateChange = (e) => {
    setDeadline(e.target.value);
  };


  // Handler for priority dropdown change
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    console.log('Priority:', e.target.value);
  };

  const handleCompletedChange = (e) => {
    setCompleted(e.target.value);
    console.log('Priority:', e.target.value);
  };

  const handleClick = () => {
    Swal.fire({
      icon: 'success',
      title: `${title} updated successfully`,
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster',
      },
    }).then(() => {
      getTasks();
    });
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        title : taskTitle,
        description : taskDescription,
        deadline : taskDeadline,
        priority : taskPriority,
        completed: taskcompleted
      };

      // Stringify the data to avoid circular references
      const postDataString = JSON.stringify(postData);
      await axios.put(`http://localhost:8000/api/tasks/${id}`, postDataString, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setOpenModal(false);
      handleClick();


      console.log('Task Updated successfully');
    } catch (error) {
      console.error('Error:', error.response.data);
    }
}


  return (
    <Modal  show={openModal}  size="md" popup >

        <Modal.Body className='bg-slate-50 rounded-xl pt-7'>
        <div className=''>
        <form onSubmit={() => {
          handleUpdate(id)
        }} className="mx-auto text-customblue rounded-xl">
          <div>
            <div className="mb-2 block">
              <Label className='text-customblue' htmlFor="Title" value="Task Title" />
              <TextInput id="Title" type="text" placeholder="Title" value={taskTitle} onChange={handleTitleChange} />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label className='block text-customblue' htmlFor="description" value="Task description" />
              <textarea
                className="w-full p-2 border border-gray-300 h-36 rounded-lg"
                placeholder="Enter task description here..." onChange={handleDescriptionChange} value={taskDescription}
              ></textarea>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className="mb-2 block lg:col-span-2 col-span-full">
              <Label className='text-customblue' htmlFor="date" value="From" />
              <TextInput id="date" type="date" placeholder='date' value={taskDeadline}
                  onChange={handleDateChange}  />
            </div>
            <div className="mb-2 block lg:col-span-2 mx-0 col-span-full">
              <Label className='text-customblue block' htmlFor="Priority" value="Task Priority" />
              <select
                id="Priority"  // Assign an id to match the "htmlFor" in the label
                className="border rounded p-2 w-full"
                onChange={handlePriorityChange}
                value={taskPriority} // Make sure to set the selected value based on your component state
              >

                <option  selected value="">seltect</option>
                <option value="low">Low</option>
                <option value="middle">Middle</option>
                <option value="high">High</option>
              </select>
            </div>

          </div>
          <div className="mb-2 block">
              <Label className='text-customblue block' htmlFor="completed" value="Task completed" />
              <select
                id="completed"  // Assign an id to match the "htmlFor" in the label
                className="border rounded p-2 w-full"
                onChange={handleCompletedChange}
                value={taskcompleted} // Make sure to set the selected value based on your component state
              >
                <option selected value="">seltect</option>
                <option value={true}>completed</option>
                <option value={false}>not completed</option>
              </select>
            </div>
          <div>
          </div>
          <div className='w-full grid grid-cols-4 gap-4'>
            <Button onClick={() => {setOpenModal(false)}} type="submit" className='lg:col-span-2 col-span-full bg-red-700'
            >Cancel</Button>
            <Button onClick={handleUpdate} type="submit" className='lg:col-span-2 col-span-full bg-lime-600'
            >Update Task </Button>
          </div>
        </form>
      </div>
        </Modal.Body>
    </Modal>
  );
};

export default UpdateTaskModal;
