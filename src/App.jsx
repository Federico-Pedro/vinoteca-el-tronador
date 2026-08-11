import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/header/header'
import NavBar from './components/navBar/navBar'
import Carousel from './components/carousel/carousel'
import SocialSideBar from './components/socialSideBar/socialSideBar'
import ProductGrid from './components/productGrid/productGrid'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import AboutUs from './components/aboutUs/aboutUs'
import Map from './components/map/map'
import ScrollTo from './components/funciones/scrollTo'
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'
import { CartProvider } from "./context/CartContext.jsx";
import "./App.css"

function App() {


  return (
    <CartProvider>

      <BrowserRouter>
        <ScrollTo />
        <Header />
        <NavBar />
        <Carousel />
        <SocialSideBar />

        <div id="contenido-rutas">
          <Routes>
            <Route path="/productGrid" element={<ProductGrid />} />

            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="whatsappWrapper">

          <FloatingWhatsApp
            phoneNumber="542494603740"
            accountName="eL TROnaDOR"
            avatar="src/assets/logo.png"
            statusMessage="Contestamos en 15 minutos"
            chatMessage="Hola! ¿En qué te podemos ayudar?"
          />
        </div>

        <Footer />


      </BrowserRouter>
    </CartProvider>
  )
}

export default App
