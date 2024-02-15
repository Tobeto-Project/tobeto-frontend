const getImages = (pageIndex = 0, pageSize = 50) => {
    return fetch(`http://localhost:5082/api/Images/getList?PageIndex=${pageIndex}&PageSize=${pageSize}`)
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
        throw error; // Hata yönetimi için hata fırlat
      });
  };
  
  const deleteImage = (id) => {
    return fetch(`http://localhost:5082/api/Images/delete?id=${id}`, {
      method: 'DELETE',
    });
  };
  
  const addImage = (imageFile) => {
    const formData = new FormData();
    formData.append('File', imageFile);
    
    return fetch('http://localhost:5082/api/Images/add', {
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
  