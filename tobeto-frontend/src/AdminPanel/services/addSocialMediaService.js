import API_CONFIG from "../../Services/ApiConfig";

const addSocialMediaService = {
  addSocialMedia: async (socialMediaName) => {
    try {
      const response = await fetch(`${API_CONFIG.SOCIAL_MEDIA_ADD}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Name: socialMediaName }),
      });
      if (!response.ok) {
        throw new Error("Bir hata oluştu:", response.statusText);
      }
    } catch (error) {
      throw new Error("Bir hata oluştu:", error);
    }
  },
  fetchSocialMediaList: async () => {
    try {
      const response = await fetch(
        `${API_CONFIG.SOCIAL_MEDIA_GET_LIST}?PageIndex=0&PageSize=15`
      );
      if (!response.ok) {
        throw new Error("Bir hata oluştu:", response.statusText);
      }
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      throw new Error("Bir hata oluştu:", error);
    }
  },
  deleteSocialMedia: async (id) => {
    try {
      const response = await fetch(`${API_CONFIG.SOCIAL_MEDIA_DELETE}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      if (!response.ok) {
        throw new Error("Bir hata oluştu:", response.statusText);
      }
    } catch (error) {
      throw new Error("Bir hata oluştu:", error);
    }
  },
};

export default addSocialMediaService;
