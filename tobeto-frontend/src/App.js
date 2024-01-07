import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import BizKimiz from './Pages/BizKimiz';
import BireylerIcın from './Pages/BireylerIcin';
import BasindaBiz from './Pages/BasindaBiz';
import Blog from './Pages/Blog';
import Codeacademy from './Pages/Codeacademy';
import IstanbulKodluyor from './Pages/IstanbulKodluyor';
import Katalog from './Pages/Katalog';
import KurumlarIcin from './Pages/KurumlarIcin';
import Takvim from './Pages/Takvim';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Education from './Pages/Education';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/bizkimiz' element={<BizKimiz/>}/>
        <Route path='/bireylericin' element={<BireylerIcın/>}/>
        <Route path='/BasindaBiz' element={<BasindaBiz/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Codeacademy' element={<Codeacademy/>}/>
        <Route path='/IstanbulKodluyor'element={<IstanbulKodluyor/>}/>
        <Route path='/Katalog' element={<Katalog/>}/>
        <Route path='/KurumlarIcin'element={<KurumlarIcin/>}/>
        <Route path='/Takvim' element={<Takvim/>}/>
        <Route path='/girisyap' element={<SignIn/>}/>
        <Route path='/uyeol' element={<SignUp/>}/>
        <Route path='/kurs' element={<Education/>}/>
      </Routes>
    </Router>
  );
}

export default App;
