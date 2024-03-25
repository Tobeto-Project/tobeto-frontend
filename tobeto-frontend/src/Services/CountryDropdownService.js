const apiKey = "jPE9gH3ltQ7X1UsbCWafKO0agPKOOzDRq5aI948QO3Q5cPugKj4hN6bUGdDi";

export const fetchCountries = async () => {
  try {
    const response = await fetch(
      `https://www.nosyapi.com/apiv2/service/other/country/list?apiKey=${apiKey}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const fetchCitiesByCountry = async (countryID) => {
  try {
    const response = await fetch(
      `https://www.nosyapi.com/apiv2/service/other/country?countryID=${countryID}&apiKey=${apiKey}`
    );
    const data = await response.json();
    return data.data.city;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};

export const fetchTownsByCity = async (cityName) => {
  try {
    const response = await fetch(
      `https://turkiyeapi.cyclic.app/api/v1/provinces?name=${cityName}`
    );
    const data = await response.json();
    return data.data[0]?.districts || [];
  } catch (error) {
    console.error("Error fetching districts:", error);
    return [];
  }
};
