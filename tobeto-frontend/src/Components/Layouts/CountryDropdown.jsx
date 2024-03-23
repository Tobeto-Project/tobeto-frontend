//CountryDropdown.jsx

// Kullanmak için nosyapi.com'a üyelik oluşturmalı , tüm doğrulatmaları yapmalı, ücretli veya ücretsiz api kullanımlarını seçmelisiniz. Kullanacağınız veri türüne göre seçenekler ve örnek kullanımları sitede mevcuttur.

import React, { useState, useEffect } from 'react';

const CountryCityInfo = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const apiKey = 'jPE9gH3ltQ7X1UsbCWafKO0agPKOOzDRq5aI948QO3Q5cPugKj4hN6bUGdDi';

    useEffect(() => {
        fetchCountryList();
    }, []);

    const fetchCountryList = async () => {
        try {
            const response = await fetch(`https://www.nosyapi.com/apiv2/service/other/country/list?apiKey=${apiKey}`);
            const data = await response.json();
            setCountries(data.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    const fetchCitiesByCountry = async (countryID) => {
        try {
            const response = await fetch(`https://www.nosyapi.com/apiv2/service/other/country?countryID=${countryID}&apiKey=${apiKey}`);
            const data = await response.json();
            console.log("Fetched cities:", data);
            setCities(data.data.city); // Şehirlerin array'i cities değişkenine atanıcak
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };


    const fetchDistrictsByCity = async (cityName) => {
        try {
            const response = await fetch(`https://turkiyeapi.cyclic.app/api/v1/provinces?name=${cityName}`);
            const data = await response.json();
            setDistricts(data.data[0]?.districts || []); // İlk şehrin ilçelerini alıcaz
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    };


    const handleCountryChange = (e) => {
        const countryID = e.target.value;
        setSelectedCountry(countryID);
        if (countryID) {
            fetchCitiesByCountry(countryID);
        } else {
            setCities([]);
            setDistricts([]);
        }
    };

    const handleCityChange = (e) => {
        const cityName = e.target.value;
        if (cityName) {
            fetchDistrictsByCity(cityName);
        } else {
            setDistricts([]);
        }
    };

    return (
        <div>
            <h2>Country and City Information</h2>
            <div>
                <label htmlFor="country">Select a country:</label>
                <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                    <option value="">Select</option>
                    {countries.map((country) => (
                        <option key={country.countryID} value={country.countryID}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedCountry && (
                <div>
                    <label htmlFor="city">Select a city:</label>
                    <select id="city" onChange={handleCityChange}>
                        <option value="">Select</option>
                        {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {districts.length > 0 && (
                <div>
                    <label htmlFor="district">Select a district:</label>
                    <select id="district">
                        <option value="">Select</option>
                        {districts.map((district) => (
                            <option key={district.id} value={district.name}>
                                {district.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default CountryCityInfo;
