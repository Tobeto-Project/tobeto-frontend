
import axios from "axios";
import API_CONFIG from "../../Services/ApiConfig";
import * as ENDPOINTS from "../../Services/ApiEndpoints";

export const fetchAllStudents = async (pageIndex = 0, pageSize = 15) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.USERS}${ENDPOINTS.GET_LIST_ENDPOINT}?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Öğrencileri alırken hata oluştu:", error);
    throw error;
  }
};

export const deleteStudentById = async (studentId) => {
  try {
    const response = await axios.delete(`${API_CONFIG.USER_DELETE}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id: studentId
      }
    });
    console.log("Silme işlemi başarılı:", response.data);
    return response.data;
  } catch (error) {
    console.error("Öğrenci silinirken hata oluştu:", error.response ? error.response.data : error);
    throw error;
  }
};