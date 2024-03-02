import axios from "axios";

const API_BASE_URL = "http://localhost:5082/api";

// Ülkeleri çeken servis fonksiyonu
export const fetchCountries = () => {
  return axios.get(`${API_BASE_URL}/Countries/getList?PageIndex=0&PageSize=200`)
    .then(response => response.data.items);
};

// Seçilen ülkeye göre şehirleri çeken servis fonksiyonu
export const fetchCitiesByCountry = (countryId) => {
  return axios.get(`${API_BASE_URL}/Cities/getListByCountry?id=${countryId}`)
    .then(response => response.data.items);
};

// Seçilen şehre göre ilçeleri çeken servis fonksiyonu
export const fetchTownsByCity = (cityId) => {
  return axios.get(`${API_BASE_URL}/Town/getListByCity?id=${cityId}`)
    .then(response => response.data.items);
};
