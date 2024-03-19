import axios from "axios";
import API_URL from "./config";

const API_BASE_URL = API_URL;

export const fetchCountries = () => {
  return axios
    .get(`${API_BASE_URL}/Countries/getList?PageIndex=0&PageSize=200`)
    .then((response) => response.data.items);
};

export const fetchCitiesByCountry = () => {
  return axios
    .get(`${API_BASE_URL}/Cities/getList?PageIndex=0&PageSize=15`)
    .then((response) => response.data.items);
};

export const fetchTownsByCity = (cityId) => {
  return axios
    .get(`${API_BASE_URL}/Town/getListByCity?id=${cityId}`)
    .then((response) => response.data.items);
};

export const fetchCitiesByCountryTurkey = async () => {
  const countryId = "813250c8-8f46-4748-687d-08dc37c50093"; // Türkiye'nin ID'si
  try {
    const response = await axios.get(
      `${API_BASE_URL}/Cities/getListByCountry?id=${countryId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${errorText}`);
    }

    return response.data; // Şehir listesini döndür
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    throw error;
  }
};
