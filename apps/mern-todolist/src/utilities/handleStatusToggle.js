import axios from "axios";

const handleStatusToggle = async (selectedStatus, id, setTask, setSelectedStatus) => {
    const newStatus = selectedStatus === "Completed" ? "Not Completed": "Completed";

    try {
        await axios.put(`http://localhost:8000/api/tasks/${id}`, { completed: newStatus === "Completed" });
        setTask((prevTask) => ({ ...prevTask, completed: newStatus === 'Completed' }));
        setSelectedStatus(newStatus);
    } catch (error) {
        console.error('Error updating task status:', error);
    }
}

export default handleStatusToggle;