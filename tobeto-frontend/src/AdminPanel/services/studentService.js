import axios from "axios";

const BASE_URL = "http://localhost:60629/api/Users/GetList/getlist";

export const fetchAllStudents = async (pageIndex = 0, pageSize = 15) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
    return response.data; // Varsayılan olarak, response'un data özelliğini döndürür
  } catch (error) {
    console.error("Öğrencileri alırken hata oluştu:", error);
    throw error;
  }
};
