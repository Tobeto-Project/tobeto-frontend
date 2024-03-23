//authService.js
import API_URL from "../../Services/config";

const API_BASE_URL = API_URL;

export const loginApi = async (token) => {
  console.log("Logging in...");
  try {
    const loginResponse = await fetch(`${API_BASE_URL}/AuthEmployee/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Tokeni Authorization başlığı altında gönderildi, güvenlik için console mesajları silinecek ve redux toolkit kullanımına sadece development aşamasında izin verilecek, reducerda tanımlaması yapılacak
      },
    });

    if (!loginResponse.ok) {
      console.error("Login failed:", loginResponse.status);
      throw new Error("Login failed");
    }

    const data = await loginResponse.json();

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
