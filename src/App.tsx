import { useState } from "react"
import Banner from "./components/Banner"
import BlogCard from "./components/BlogCard"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast"
import FeatureSectionFruit from "./components/FeatureSectionFruit"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MobileNavbar from "./components/MobileNavbar"
import Navbar from "./components/Navbar"
import { CartContextProvider } from "./context/CardContext"
import { Cart } from "./components/Cart"

function App() {
   const [showCart, setShowCart] = useState(false);

 return (
 <CartContextProvider>
<main>
    <Navbar setShowCart={setShowCart}/>
    <MobileNavbar setShowCart={setShowCart}/>
    <Hero/>
    <Category/>
    <FeatureSectionFruit/>
    <FeatureSectionBreakfast/>
    <Banner/>
    <BlogSection/>
    {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
    <Footer/>

 </main>
 </CartContextProvider>
 )

}

export default App