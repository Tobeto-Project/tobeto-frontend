//CountryDropdown.jsx

// Kullanmak için nosyapi.com'a üyelik oluşturmalı , tüm doğrulatmaları yapmalı, ücretli veya ücretsiz api kullanımlarını seçmelisiniz. Kullanacağınız veri türüne göre seçenekler ve örnek kullanımları sitede mevcuttur.

import React, { useState, useEffect } from 'react';
import { fetchCountries, fetchCitiesByCountry, fetchTownsByCity } from "../../Services/CountryDropdownService";
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const CountryCityInfo = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const countryData = await fetchCountries();
            setCountries(countryData);
        };
        fetchData();
    }, []);

    const handleCountryChange = async (e) => {
        const countryID = e.target.value;
        setSelectedCountry(countryID);
        if (countryID) {
            const cityData = await fetchCitiesByCountry(countryID);
            setCities(cityData);
            setDistricts([]);
        } else {
            setCities([]);
            setDistricts([]);
        }
    };

    const handleCityChange = async (e) => {
        const cityName = e.target.value;
        if (cityName) {
            const districtData = await fetchTownsByCity(cityName);
            setDistricts(districtData);
        } else {
            setDistricts([]);
        }
    };

    return (
        <div>
            <h2>Country and City Information</h2>
            <FormGroup>
                <FormLabel htmlFor="country">Select a country:</FormLabel>
                <FormControl as="select" id="country" value={selectedCountry} onChange={handleCountryChange}>
                    <option value="">Select</option>
                    {countries.map((country) => (
                        <option key={country.countryID} value={country.countryID}>
                            {country.name}
                        </option>
                    ))}
                </FormControl>
            </FormGroup>
            {selectedCountry && (
                <FormGroup>
                    <FormLabel htmlFor="city">Select a city:</FormLabel>
                    <FormControl as="select" id="city" onChange={handleCityChange}>
                        <option value="">Select</option>
                        {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </FormControl>
                </FormGroup>
            )}
            {districts.length > 0 && (
                <FormGroup>
                    <FormLabel htmlFor="district">Select a district:</FormLabel>
                    <FormControl as="select" id="district">
                        <option value="">Select</option>
                        {districts.map((district) => (
                            <option key={district.id} value={district.name}>
                                {district.name}
                            </option>
                        ))}
                    </FormControl>
                </FormGroup>
            )}
        </div>
    );
};

export default CountryCityInfo;






// //// PlatformForm.js
// import React, { useEffect, useRef, useState } from "react";
// import { Container, Form, Row, Col, Button, FormLabel, FormControl, FormGroup } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { toast, ToastContainer } from 'react-toastify';
// import { fetchCountries, fetchCitiesByCountry, fetchTownsByCity } from "../../Services/LocationService";
// import { updateUserDetails, uploadImage, getImageList, fetchUserDetails } from "../../Services/UserService";
// import userphoto from "../../Assets/Images/user-photo.png";

// const PlatformForm = () => {
//     const userDetailsRedux = useSelector((state) => state.auth.userDetails);
//     console.log("userdetailsreduxxxx", userDetailsRedux);

//     const dispatch = useDispatch();
//     const [userDetails, setUserDetails] = useState({
//         id: userDetailsRedux.id || "",
//         firstName: "",
//         lastname: "",
//         phoneNumber: "",
//         email: "",
//         identityNumber: "",
//         aboutMe: "",
//         birthDate: "",
//         description: "",
//         imageid: userphoto,
//         imageId: null
//     });


//     const [districts, setDistricts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const countryData = await fetchCountries();
//             setCountries(countryData);
//         };
//         fetchData();
//     }, []);

//     const handleCountryChange = async (e) => {
//         const countryID = e.target.value;
//         setSelectedCountry(countryID);
//         if (countryID) {
//             const cityData = await fetchCitiesByCountry(countryID);
//             setCities(cityData);
//             setDistricts([]);
//         } else {
//             setCities([]);
//             setDistricts([]);
//         }
//     };

//     const handleCityChange = async (e) => {
//         const cityName = e.target.value;
//         if (cityName) {
//             const districtData = await fetchTownsByCity(cityName);
//             setDistricts(districtData);
//         } else {
//             setDistricts([]);
//         }
//     };


//     const [countries, setCountries] = useState([]);
//     const [selectedCountry, setSelectedCountry] = useState("");

//     const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState("");

//     const [towns, setTowns] = useState([]);
//     const [selectedTown, setSelectedTown] = useState("");

//     const [userPhotoFile, setUserPhotoFile] = useState(null);

//     useEffect(() => {
//         if (selectedCountry) {
//             fetchCitiesByCountry(selectedCountry).then(setCities);
//             setSelectedCity(""); // Şehir seçimini sıfırla
//             setTowns([]); // İlçe listesini boşalt
//         }
//     }, [selectedCountry]);

//     useEffect(() => {
//         if (selectedCity) {
//             fetchTownsByCity(selectedCity)
//                 .then(setTowns)
//                 .catch(error => {
//                     console.error("Failed to fetch towns:", error);
//                     toast.error("İlçeler getirilirken bir hata oluştu.");
//                 });
//         }
//     }, [selectedCity]);



//     useEffect(() => {
//         const fetchData = async () => {
//             try {


//                 // Ülkeleri getir
//                 const countriesData = await fetchCountries();
//                 setCountries(countriesData);

//                 // Kullanıcı detaylarını Redux'tan al ve userDetails state'ini güncelle
//                 setUserDetails(prevDetails => ({
//                     ...prevDetails,
//                     firstName: userDetailsRedux.firstName || "",
//                     lastname: userDetailsRedux.lastname || "",
//                     phoneNumber: userDetailsRedux.phoneNumber || "",
//                     email: userDetailsRedux.email || "",
//                     identityNumber: userDetailsRedux.identityNumber || "",
//                     aboutMe: userDetailsRedux.aboutMe || "",
//                     birthDate: userDetailsRedux.birthDate || "",
//                     description: userDetailsRedux.description || "",
//                 }));

//                 // Fotoğraf listesini getir
//                 const images = await getImageList();
//                 if (images.length > 0) {
//                     // userPhoto state'ini güncelle
//                     setUserDetails(prevDetails => ({
//                         ...prevDetails,
//                         imageid: images[0].fileUrl
//                     }));
//                 }
//             } catch (error) {
//                 console.error("Error:", error);
//                 toast.error("Bir hata oluştu.");
//             }
//         };

//         fetchData();
//     }, [userDetailsRedux, userPhotoFile]);


//     const handleFileChange = (e) => {
//         // Seçilen dosyayı alın
//         const selectedFile = e.target.files[0];

//         // Eğer dosya seçilmediyse veya seçilen dosya null ise, işlemi sonlandırın
//         if (!selectedFile) return;

//         // Yeni resmi userDetails state'ine ekleyin
//         setUserDetails(prevDetails => ({
//             ...prevDetails,
//             imageId: selectedFile,
//         }));
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const birthDateToSend = new Date(userDetails.birthDate).toISOString();

//         // userData nesnesine imageId alanını ekleyin
//         const userData = {
//             ...userDetails,
//             birthDate: birthDateToSend,
//             countryId: selectedCountry,
//             cityId: selectedCity,
//             townId: selectedTown,
//             imageId: userDetailsRedux.imageId // Eğer imageId yoksa null olacak
//         };

//         try {
//             // Eğer image alanı doluysa, önce image'i yükleyin
//             if (userDetails.imageId) {
//                 const imageResponse = await uploadImage(userDetails.imageId);
//                 console.log("imageresponseeeee", imageResponse)
//                 userDetailsRedux.imageId = imageResponse.id; // Yüklenen image'in ID'sini userData'ya ekleyin
//             }

//             await updateUserDetails(userData);
//             console.log("Kullanıcı başarıyla güncellendi");
//             toast.success("Başarıyla Güncellendi")
//         } catch (error) {
//             console.error("Kullanıcı güncellenirken bir hata oluştu", error);
//             toast.error("Lütfen tüm alanların dolu olduğundan emin olun.")
//         }
//     };



//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserDetails((prevDetails) => ({
//             ...prevDetails,
//             [name]: value,
//         }));
//     };

//     const handleUploadImage = async () => {
//         if (!userPhotoFile) {
//             toast.error("Lütfen bir dosya seçin.");
//             return; // Dosya seçilmediyse işlem yapmayı sonlandır
//         }

//         try {
//             // Dosya seçildiyse yükleme işlemini gerçekleştir
//             const response = await uploadImage(userPhotoFile);
//             console.log("Dosya yükleme başarılı:", response);
//             toast.success("Dosya başarıyla yüklendi.");

//             // Fotoğraf yüklendikten sonra istenilen ek işlemleri buraya ekleyebilirsiniz

//         } catch (error) {
//             console.error("Dosya yüklenirken hata oluştu:", error);
//             toast.error("Dosya yüklenirken bir hata oluştu.");
//         }
//     };

//     return (
//         <div>
//             <Container>
//                 <Container>
//                     <div className="my-3 d-flex justify-content-center align-items-center" style={{ position: "relative", display: "inline-block", textAlign: "center" }}>
//                         <img
//                             src={userDetails.imageid}
//                             style={{ width: "250px", height: "250px", borderRadius: "50%", margin: "0 auto" }}
//                             alt="Profil Resmi"
//                         />

//                         <label htmlFor="file-input" style={{ position: "absolute", bottom: "10px", left: "63%", transform: "translateX(-85%)", display: userPhotoFile ? 'none' : 'flex', alignItems: "center", backgroundColor: "white", color: "#fff", padding: "15px 15px", borderRadius: "50%", cursor: "pointer", transition: "background-color 0.3s ease", fontSize: "25px" }}>
//                             <img src="https://tobeto.com/edit.svg" alt="Dosya Seç" style={{ width: "20px", marginRight: "8px" }} />
//                             <input id="file-input" type="file" style={{ display: "none" }} onChange={handleFileChange} />
//                         </label>
//                     </div>
//                     <Button variant="primary" className="mt-2" onClick={handleUploadImage} style={{ display: userPhotoFile ? 'block' : 'none' }}>
//                         Fotoğrafı Yükle
//                     </Button>



//                 </Container>
//                 <Form onSubmit={handleSubmit}>
//                     {/* Ad ve Soyad */}
//                     <Row className="mt-2">
//                         <Col>
//                             <Form.Group controlId="formFirstName">
//                                 <Form.Label>Adınız</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="firstName"
//                                     value={userDetails.firstName}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Group controlId="formLastName">
//                                 <Form.Label>Soyadınız</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="lastname"
//                                     value={userDetails.lastname}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     {/* Telefon ve Doğum Tarihi */}
//                     <Row className="mt-2">
//                         <Col>
//                             <Form.Group controlId="formPhone">
//                                 <Form.Label>Telefon Numaranız</Form.Label>
//                                 <Form.Control
//                                     type="tel"
//                                     name="phoneNumber"
//                                     value={userDetails.phoneNumber}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Group controlId="formBirthDate">
//                                 <Form.Label>Doğum Tarihi</Form.Label>
//                                 <Form.Control
//                                     type="date"
//                                     name="birthDate"
//                                     value={userDetails.birthDate.split("T")[0]}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     {/* TC Kimlik No ve E-posta */}
//                     <Row className="mt-2">
//                         <Col>
//                             <Form.Group controlId="formTC">
//                                 <Form.Label>TC Kimlik No</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="identityNumber"
//                                     value={userDetails.identityNumber}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Group controlId="formEmail">
//                                 <Form.Label>E-posta</Form.Label>
//                                 <Form.Control
//                                     type="email"
//                                     name="email"
//                                     value={userDetails.email}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                         </Col>
//                     </Row>


//                     <div>
//                         <h2>Country and City Information</h2>
//                         <FormGroup>
//                             <FormLabel htmlFor="country">Select a country:</FormLabel>
//                             <FormControl as="select" id="country" value={selectedCountry} onChange={handleCountryChange}>
//                                 <option value="">Select</option>
//                                 {countries.map((country) => (
//                                     <option key={country.countryID} value={country.countryID}>
//                                         {country.name}
//                                     </option>
//                                 ))}
//                             </FormControl>
//                         </FormGroup>
//                         {selectedCountry && (
//                             <FormGroup>
//                                 <FormLabel htmlFor="city">Select a city:</FormLabel>
//                                 <FormControl as="select" id="city" onChange={handleCityChange}>
//                                     <option value="">Select</option>
//                                     {cities.map((city) => (
//                                         <option key={city.name} value={city.name}>
//                                             {city.name}
//                                         </option>
//                                     ))}
//                                 </FormControl>
//                             </FormGroup>
//                         )}
//                         {districts.length > 0 && (
//                             <FormGroup>
//                                 <FormLabel htmlFor="district">Select a district:</FormLabel>
//                                 <FormControl as="select" id="district">
//                                     <option value="">Select</option>
//                                     {districts.map((district) => (
//                                         <option key={district.id} value={district.name}>
//                                             {district.name}
//                                         </option>
//                                     ))}
//                                 </FormControl>
//                             </FormGroup>
//                         )}
//                     </div>


//                     {/* adress */}
//                     <Form.Group controlId="formDescription">
//                         <Form.Label>adres ekleme</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             rows={3}
//                             name="description"
//                             value={userDetails.description}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>

//                     {/* Hakkında */}
//                     <Form.Group controlId="formAbout">
//                         <Form.Label>Hakkında</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             rows={3}
//                             name="aboutMe"
//                             value={userDetails.aboutMe}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>

//                     <Button variant="primary" type="submit" className="mt-2">
//                         Kaydet
//                     </Button>
//                 </Form>
//                 <ToastContainer />
//             </Container>


//         </div>
//     );
// };

// export default PlatformForm; 