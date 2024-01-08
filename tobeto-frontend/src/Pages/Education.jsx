import React, { useEffect } from 'react'
import Header from '../Components/Layouts/Header'
import Footer from '../Components/Layouts/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Education = () => {
  const {isLoggedIn,user} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || !user){
      navigate("/girisyap")
    }
  })
  return (
    <>
    <Header/>
    <div>Egitim Sayfasi</div>
    <Footer/>
    </>
  )
}

export default Education