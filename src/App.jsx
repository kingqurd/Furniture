import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home/Home'
import Hero from './components/Hero'
import About from './pages/About/About'
import Categories from './components/categories/categories'
import Product from './components/Product/Product'
import Footer from './components/footer/Footer'
// import {useState} from 'react';

function App() {

//   const [currentLink, setCurrentLink] = useState('hero');

// const handleNavClick =(component) => {
//   setCurrentLink(component)
// }
  

  return (
    <>
      {/* <NavBar />
      <Hero />
      <Product />
      <Categories />
      <About />
      <Footer /> */}
      
           <BrowserRouter>
           <NavBar />
        <Routes>
          {/* <Route path="/" element={<NavBar />} /> */}
          <Route path="/hero" element={<Hero />} />
          <Route path="/product" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
        <Footer />
     



    </>
  );
}

export default App
