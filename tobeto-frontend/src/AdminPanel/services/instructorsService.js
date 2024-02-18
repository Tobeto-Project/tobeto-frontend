import axios from 'axios';
import API_CONFIG from '../../Services/ApiConfig';

// Eğitmen Kaydı
const registerInstructor = async (instructorData) => {
  try {
    const response = await axios.post(`${API_CONFIG.AUTH_INSTRUCTORS_REGISTER}`, instructorData, {
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
    const response = await axios.get(`${API_CONFIG.INSTRUCTORS_GETLIST}`, {
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
    const response = await axios.delete(`${API_CONFIG.INSTRUCTORS_DELETE}`, {
      data: { id },
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default { registerInstructor, getInstructorsList, deleteInstructor };
