import axios from "axios";
import API_CONFIG from "../../Services/ApiConfig";
import * as ENDPOINTS from "../../Services/ApiEndpoints";

export const fetchQuestionsByExamId = async (examId) => {
    try {
        const response = await axios.get(`http://localhost:5082/api/Questions/getList?ExamId=${examId}`);
        return response.data.items;
    } catch (error) {
        console.error("Soruları alırken hata oluştu:", error);
        throw error;
    }
};


export const addQuestionToExam = async (examId, questionData) => {
    try {
        const response = await axios.post(`http://localhost:5082/api/Questions/add`, questionData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Soru eklenirken hata oluştu:", error);
        throw error;
    }
};

