
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
