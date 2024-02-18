import axios from 'axios';

// Eğitmen Kaydı
const registerInstructor = async (instructorData) => {
  try {
    const response = await axios.post('http://localhost:5082/api/AuthInstructor/register', instructorData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Eğitmen Listesini Alma
const getInstructorsList = async (pageIndex = 0, pageSize = 100) => {
  try {
    const response = await axios.get('http://localhost:5082/api/Instructors/getList', {
      params: { PageIndex: pageIndex, PageSize: pageSize },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Eğitmen Silme
const deleteInstructor = async (id) => {
  try {
    const response = await axios.delete('http://localhost:5082/api/Instructors/delete', {
      data: { id },
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default { registerInstructor, getInstructorsList, deleteInstructor };
