import axios from "axios";
import API_URL from "./config";

const BASE_URL = API_URL;

const handleSearch = async (searchText) => {
  try {
    console.log("Arama isteği gönderiliyor. Arama metni:", searchText); 
    const response = await axios.post(
      `${BASE_URL}/Courses/GetList/ByDynamic?PageIndex=0&PageSize=15`,
      {
      
        filter: {
          field: "name", // Arama kısmı api requestte name parametresi olduğundan bu value ile yapılmalı,  daha sonra gelen veri için  mevcut verideki EducationTitle değeri ile uyuşması için , courseId değerleri ; find ile eşleme yapılmalı ve ilgili EducationTitle değeri , gelen verideki name ile eşleşme yapılıp useEffectte gösterilmeli.
          operator: "contains",
          value: searchText,
          logic: "and",
          filters: [],
        },
        sort: [
          {
            field: "name",
            dir: "asc",
          },
        ], // Sıralama bilgisi
      }
    );
    console.log("Arama isteği başarılı. Cevap:", response.data); 
    return response.data; 
  } catch (error) {
    console.error("Arama isteği sırasında hata oluştu:", error); 
    throw new Error("Error searching:", error); 
  }
};

export { handleSearch };
