import React, { useEffect } from 'react'
import PlatformHeader from '../../Components/Layouts/PlatformHeader'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Degerlendirmeler = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || !user) {
      navigate("/girisyap"); // Kullanıcı giriş yapmamışsa veya kullanıcı bilgileri yoksa giriş sayfasına yönlendir
    }
  }, [isLoggedIn, user, navigate]);
  return (
    <>
      <PlatformHeader/>
    </>
  )
}

export default Degerlendirmeler