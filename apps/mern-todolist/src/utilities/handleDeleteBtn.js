import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';

const MySwal = withReactContent(Swal);

const handleDeleteBtn = async (title, getTasks, id) => {
    const result = await MySwal.fire({
      text: `Are you sure yo want to delete "${title}"?`,
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
      confirmButtonColor: "red",
      denyButtonColor: "#5FE26C",
    })

    try {
        if (result.value) {
            await axios.delete(`http://localhost:8000/api/tasks/${id}`);
            getTasks();
        }
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}


export default handleDeleteBtn;