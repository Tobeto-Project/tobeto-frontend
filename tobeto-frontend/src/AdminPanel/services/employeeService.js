import axios from 'axios';

// Çalışan Kaydı
const registerEmployee = async (employeeData) => {
  try {
    const response = await axios.post('http://localhost:5082/api/AuthEmployee/register', employeeData, {
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
    const response = await axios.get('http://localhost:5082/api/Employee/getList', {
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
    const response = await axios.delete('http://localhost:5082/api/Employee/delete', {
      data: { id },
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default { registerEmployee, getEmployeesList, deleteEmployee };
