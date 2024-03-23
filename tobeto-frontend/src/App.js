import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";
import NotFound from "./Pages/NotFound";
import AdminLogin from "./AdminPanel/pages/AdminLogin";
import AdminPanel from "./AdminPanel/pages/AdminPanel";
import PrivateRouteAdmin from "./AdminPanel/routes/PrivateRouteAdmin";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Spinner from "./Components/Common/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { checkTokenAndLogin } from "./Store/Actions/userActions";
import Frontend from "./Pages/Programs/Frontend";
import Backend from "./Pages/Programs/Backend";
import CyberSecurity from "./Pages/Programs/CyberSecurity";
import DataScience from "./Pages/Programs/DataScience";
import FullStack from "./Pages/Programs/FullStack";
import UI_UX from "./Pages/Programs/UI_UX";
import Web_Mobile from "./Pages/Programs/Web_Mobile";
import GetInformationFromPrograms from "./Pages/Programs/GetInformationFromPrograms";


function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    dispatch(checkTokenAndLogin());
  }, [dispatch]);

  

  const HomePage = React.lazy(() => import('./Pages/HomePage'));
  const BizKimiz = lazy(() => import('./Pages/BizKimiz'));
  const BireylerIcın = lazy (() => import('./Pages/BireylerIcin'));
  const BasindaBiz = lazy(() => import('./Pages/BasindaBiz'));
  const Blog = lazy(() => import('./Pages/Blog'));
  const Codeacademy = lazy(() => import('./Pages/Codeacademy'));
  const IstanbulKodluyor = lazy(() => import('./Pages/IstanbulKodluyor'));
  const Katalog = lazy(() => import('./Pages/Katalog'));
  const KurumlarIcin = lazy (() => import('./Pages/KurumlarIcin'));
  const Takvim = lazy(() => import('./Pages/Takvim'));
  const SignIn = lazy(() => import('./Pages/SignIn'));
  const SignUp = lazy(() => import('./Pages/SignUp'));
  const Platform = lazy(() => import('./Pages/Platform/Platform'));
  const Degerlendirmeler = lazy (() => import('./Pages/Platform/Degerlendirmeler'));
  const Profil = lazy(() => import('./Pages/Platform/Profil'));
  const PlatformKatalog = lazy(() => import('./Pages/Platform/PlatformKatalog'));
  const MyNotification = lazy(() => import('./Pages/Platform/MyNotification'));
  const PlatformTakvim = lazy(() => import('./Pages/Platform/PlatformTakvim'));
  const ForgotPassword = lazy(() => import('./Pages/ForgotPassword'));
  const KisiselBilgiler = lazy(() => import('./Pages/Platform/ProfilBilgileri/KisiselBilgiler'));
  const MyEducation = lazy (() => import('./Pages/Platform/MyEducation'));
  const ContactUs = lazy(() => import('./Pages/ContactUs'));
  const RegistrationModal = lazy(() => import('./Components/Common/RegistrationModal'));
  const LmsPage = lazy(() => import('./Lms/pages/LmsPage'));
  const BlogIcerik = lazy(() => import('./Pages/BlogIcerik'));
  const BasindaBizIcerik = lazy(() => import('./Pages/BasindaBizIcerik'));
  
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/admin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/adminpanel" element={<PrivateRouteAdmin isAuthenticated={isAuthenticated}><AdminPanel /> </PrivateRouteAdmin>}
            />
            <Route path="/" element={<HomePage />} />
            <Route path="/bizkimiz" element={<BizKimiz />} />
            <Route path="/bireylericin" element={<BireylerIcın />} />
            <Route path="/BasindaBiz" element={<BasindaBiz />} />
            <Route path="/basindabizblog/getbyId/:pressId" element={<BasindaBizIcerik />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Codeacademy" element={<Codeacademy />} />
            <Route path="/IstanbulKodluyor" element={<IstanbulKodluyor />} />
            <Route path="/Katalog" element={<Katalog />} />
            <Route path="/KurumlarIcin" element={<KurumlarIcin />} />
            <Route path="/Takvim" element={<Takvim />} />
            <Route path="/girisyap" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/uyeol" element={<SignUp />} />
            <Route path="/Frontend" element={<Frontend />} />
            <Route path="/Backend" element={<Backend />} />
            <Route path="/FullStack" element={<FullStack />} />
            <Route path="/Web_Mobile" element={<Web_Mobile />} />
            <Route path="/DataScience" element={<DataScience />} />
            <Route path="/CyberSecurity" element={<CyberSecurity />} />
            <Route path="/UI_UX" element={<UI_UX />} />
            <Route path="/bilgi-al" element={<GetInformationFromPrograms />} />
            <Route path="/platform" element={<PrivateRoute><Platform /></PrivateRoute>} />
            <Route path="/degerlendirmeler" element={<PrivateRoute><Degerlendirmeler /></PrivateRoute>} />
            <Route path="/profil" element={<PrivateRoute><Profil /> </PrivateRoute>} />
            <Route path="/platform-katalog" element={<PrivateRoute><PlatformKatalog /> </PrivateRoute>} />
            <Route path="/Duyurularım" element={<PrivateRoute><MyNotification /></PrivateRoute>} />
            <Route path="/platform-takvim" element={<PrivateRoute> <PlatformTakvim /> </PrivateRoute>} />
            <Route path="/sifremi-unuttum" element={<ForgotPassword />} />
            <Route path="/kisiselbilgiler" element={<PrivateRoute><KisiselBilgiler /> </PrivateRoute>} />
            <Route path="/egitimlerim" element={<PrivateRoute> <MyEducation /> </PrivateRoute>} />
            <Route path="/Frontend" element={<Frontend />} />
            <Route path="/Backend" element={<Backend />} />
            <Route path="/FullStack" element={<FullStack />} />
            <Route path="/Web_Mobile" element={<Web_Mobile />} />
            <Route path="/DataScience" element={<DataScience />} />
            <Route path="/bloglar/:blogId" element={<BlogIcerik />} />
            <Route path="/CyberSecurity" element={<CyberSecurity />} />
            <Route path="/UI_UX" element={<UI_UX />} />
            <Route path="/iletisim" element={<ContactUs />} />
            <Route path="/registermodal" element={<RegistrationModal />} />
            <Route path="/lms" element={<PrivateRoute><LmsPage /></PrivateRoute>} />
            <Route
              path="/platform"
              element={
                <PrivateRoute>
                  <Platform />
                </PrivateRoute>
              }
            />
            <Route
              path="/degerlendirmeler"
              element={
                <PrivateRoute>
                  <Degerlendirmeler />
                </PrivateRoute>
              }
            />
            <Route
              path="/profil"
              element={
                <PrivateRoute>
                  <Profil />
                </PrivateRoute>
              }
            />
            <Route
              path="/platform-katalog"
              element={
                <PrivateRoute>
                  <PlatformKatalog />
                </PrivateRoute>
              }
            />
            <Route
              path="/platform-takvim"
              element={
                <PrivateRoute>
                  <PlatformTakvim />
                </PrivateRoute>
              }
            />
            <Route
              path="/kisiselbilgiler"
              element={
                <PrivateRoute>
                  <KisiselBilgiler />
                </PrivateRoute>
              }
            />
            <Route
              path="/egitimlerim"
              element={
                <PrivateRoute>
                  <MyEducation />
                </PrivateRoute>
              }
            />
          </Routes>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
