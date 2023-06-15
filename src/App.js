import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <div className='App'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/messi' element={<Testimonial />} />
          <Route path='/ronaldo' element={<Testimonial />} />
          <Route path='/neymar' element={<Testimonial />} />
        </Routes>
        <Footer/>
    </div>

  );
}

export default App;
