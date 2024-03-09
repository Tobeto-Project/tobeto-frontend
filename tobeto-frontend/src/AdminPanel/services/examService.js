
import axios from "axios";
import API_CONFIG from "../../Services/ApiConfig";
import * as ENDPOINTS from "../../Services/ApiEndpoints";

export const fetchAllExams = async (pageIndex = 0, pageSize = 50) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.EXAMS}${ENDPOINTS.GET_LIST_ENDPOINT}?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Sınavları alırken hata oluştu:", error);
    throw error;
  }
};

export const deleteExamById = async (examId) => {
  try {
    const response = await axios.delete(`${API_CONFIG.EXAM_DELETE}?id=${examId}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log("Silme işlemi başarılı:", response.data);
    return response.data;
  } catch (error) {
    console.error("Sınav silinirken hata oluştu:", error.response ? error.response.data : error);
    throw error;
  }
};
