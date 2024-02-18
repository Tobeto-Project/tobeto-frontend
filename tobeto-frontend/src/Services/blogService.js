import API_CONFIG from "./ApiConfig";
export const fetchBlogs = async () => {
  try {
    const response = await fetch(
      `${API_CONFIG.BLOG_GET_LIST}?PageIndex=0&PageSize=15`
    );
    if (!response.ok) throw new Error("Blog verisi çekilemedi.");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Blog yüklenirken bir hata oluştu:", error);
    throw error;
  }
};

export const getBlogById = async (blogId) => {
  try {
    const response = await fetch(`${API_CONFIG.BLOGS}/${blogId}`);
    if (!response.ok) {
      throw new Error("Blog yüklenirken bir hata oluştu.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};