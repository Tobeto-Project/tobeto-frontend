import axios from "axios";
import API_URL from "../../Services/config";

const BASE_URL = API_URL;

export const fetchCompetenceList = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Skills/getlist?PageIndex=0&PageSize=15`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching competence list:", error);
    throw error;
  }
};

export const addCompetence = async (name) => {
  try {
    await axios.post(`${BASE_URL}/Skills/add`, { name });
  } catch (error) {
    console.error("Error adding competence:", error);
    throw error;
  }
};

export const deleteCompetence = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/Skills/delete`, {
      data: {
        Id: id,
      },
    });
  } catch (error) {
    console.error("Error deleting competence:", error);
    throw error;
  }
};
