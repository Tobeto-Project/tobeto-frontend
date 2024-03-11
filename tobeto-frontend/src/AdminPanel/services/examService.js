import axios from "axios";
import API_CONFIG from "../../Services/ApiConfig";
import * as ENDPOINTS from "../../Services/ApiEndpoints";

export const fetchAllExams = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5082/api/Exams/getList?PageIndex=0&PageSize=15`
    );
    return response.data;
  } catch (error) {
    console.error("Sınavları alırken hata oluştu:", error);
    throw error;
  }
};

export const addExam = async (examData) => {
  try {
    const response = await axios.post(
      `http://localhost:5082/api/Exams/add`,
      examData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Sınav eklenirken hata oluştu:",
      error.response ? error.response.data : error
    );
    throw error;
  }
};

export const deleteExamById = async (examId) => {
  try {
    const response = await axios.delete(`${API_CONFIG.EXAM_DELETE}?id=${examId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("Silme işlemi başarılı:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Sınav silinirken hata oluştu:",
      error.response ? error.response.data : error
    );
    throw error;
  }
};
