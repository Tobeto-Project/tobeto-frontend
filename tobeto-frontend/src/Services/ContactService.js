import axios from 'axios';

const getContactInformation = async () => {
  try {
    const response = await axios.get('http://localhost:5082/api/ContactInformations/getList?PageIndex=0&PageSize=1');
    return response.data;
  } catch (error) {
    console.error('Error fetching contact information:', error);
    throw error;
  }
};

const updateContactInformation = async (contactData) => {
  try {
    const response = await axios.put('http://localhost:5082/api/ContactInformations/update', contactData);
    return response.data;
  } catch (error) {
    console.error('Error updating contact information:', error);
    throw error;
  }
};

export { getContactInformation, updateContactInformation };
