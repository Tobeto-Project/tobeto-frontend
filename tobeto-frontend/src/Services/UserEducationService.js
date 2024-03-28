// UserEducationService.js

import axios from 'axios';
import API_URL from './config';

const API_BASE_URL = API_URL;

// Kullanıcıya ait eğitim bilgilerini getiren fonksiyon
export const getUserEducations = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/UserEducation/getListByUser?id=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Eğitim bilgileri getirilirken bir hata oluştu", error);
    throw error;
  }
};

// Kullanıcı eğitimini ekleyen fonksiyon
export const addUserEducation = async (educationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/UserEducation/add`, educationData, {
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Eğitim bilgisi eklenirken bir hata oluştu", error);
    throw error;
  }
};


export const deleteEducationById = async (educationId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/UserEducation/delete`,
      {
        data: { id: educationId }, 
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data; 
  } catch (error) {
    throw error; 
  }
};