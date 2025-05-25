import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar2 from './components/Navbar2';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/Contactus';
import Events from './pages/Events';
import Contents from './pages/Contents';
import SingleEvent from './pages/SingleEvent';
import Footer2 from './components/Footer2';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/PageNotFound';


function App() {

  return (
    <>
      < Navbar2 />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/events' element={< Events />} />
        <Route path='/events/:id' element={< SingleEvent />} />
        <Route path='/contents' element={< Contents />} />
        <Route path='/about-us' element={< AboutUs />} />
        <Route path='/contact-us' element={< ContactUs />} />
         <Route path='*' element={<NotFound />} /> 
      </Routes> 
      <Footer2 />
    </>
  )
}

export default App
 