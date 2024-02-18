import API_CONFIG from "./ApiConfig";

export const getPressById = async (pressId) => {
  try {
    const response = await fetch(
      `${API_CONFIG.BLOGSPRESS}/getbyId?id=${pressId}`
    );
    if (!response.ok) {
      throw new Error("Blog yüklenirken bir hata oluştu.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPressList = async () => {
  try {
    const response = await fetch(
      `${API_CONFIG.BLOGSPRESS_GET_LIST}?PageIndex=0&PageSize=15`
    );
    if (!response.ok) {
      throw new Error("Basında Biz verisi çekilemedi.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};