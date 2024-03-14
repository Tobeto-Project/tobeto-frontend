import axios from "axios";
import API_CONFIG from "./ApiConfig";

export const addCertificate = async (userId, file) => {
  const formData = new FormData();
  formData.append("UserId", userId);
  formData.append("File", file);

  try {
    await axios.post(`${API_CONFIG.CERTIFICATE_ADD}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteCertificate = async (certificateId) => {
  try {
    const response = await axios.delete(
      `${API_CONFIG.CERTIFICATE_DELETE}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: {
          Id: certificateId,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCertificatesList = async (userId) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.CERTIFICATE_GET_LIST}?PageIndex=0&PageSize=15&UserId=${userId}`
    );
    const certificates = response.data.items.filter(
      (certificate) => certificate.userId === userId
    );
    return certificates;
  } catch (error) {
    throw error;
  }
};





export const downloadCertificate = (certificateUrl) => {
  window.open(certificateUrl, "_blank");
};
