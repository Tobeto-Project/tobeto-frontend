import axios from 'axios';
import API_CONFIG from '../../Services/ApiConfig';

// Çalışan Kaydı
const registerEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_CONFIG.AUTH_EMPLOYEES_REGISTER}`, employeeData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Çalışan Listesini Alma
const getEmployeesList = async (pageIndex = 0, pageSize = 100) => {
  try {
    const response = await axios.get(`${API_CONFIG.EMPLOYEES_GETLIST}`, {
      params: { PageIndex: pageIndex, PageSize: pageSize },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Çalışan Silme
const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_CONFIG.EMPLOYEES_DELETE}`, {
      data: { id },
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default { registerEmployee, getEmployeesList, deleteEmployee };
