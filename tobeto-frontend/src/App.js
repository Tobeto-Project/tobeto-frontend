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
import Platform from './Pages/Platform/Platform';
import Degerlendirmeler from './Pages/Platform/Degerlendirmeler';
import Profil from './Pages/Platform/Profil';
import PlatformKatalog from './Pages/Platform/PlatformKatalog';
import PlatformTakvim from './Pages/Platform/PlatformTakvim';

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
        <Route path='/platform' element={<Platform/>}/>
        <Route path='/degerlendirmeler' element={<Degerlendirmeler/>}/>
        <Route path='/profil' element={<Profil/>}/>
        <Route path='/platform-katalog' element={<PlatformKatalog/>}/>
        <Route path='/platform-takvim' element={<PlatformTakvim/>}/>
      </Routes>
    </Router>
  );
}

export default App;
