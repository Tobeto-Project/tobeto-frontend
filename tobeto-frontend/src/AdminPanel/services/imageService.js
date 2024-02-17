import API_CONFIG from "../../Services/ApiConfig";

const getImages = (pageIndex = 0, pageSize = 100) => {
    return fetch(`${API_CONFIG.IMAGE_GET_LIST}?PageIndex=${pageIndex}&PageSize=${pageSize}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if(data && data.items && Array.isArray(data.items)) {
          return data.items;
        } else {
          throw new Error('Items not found or not an array');
        }
      })
      .catch(error => {
        console.error("Fetching images failed:", error);
        throw error;
      });
  };
  
  const deleteImage = (id) => {
    return fetch(`${API_CONFIG.IMAGE_DELETE}?id=${id}`, {
      method: 'DELETE',
    });
  };
  
  const addImage = (imageFile) => {
    const formData = new FormData();
    formData.append('File', imageFile);
    
    return fetch(`${API_CONFIG.IMAGE_ADD}`, {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  };
  
  
  export { getImages, deleteImage, addImage };
  