
import Header from "./components/header/header"
import { HeroSection } from "./components/hero-section/hero-section";
import Footer from "./components/footer/footer";
import AboutPage from "./components/about/about";
import PortfolioPage from "./components/portfolio/portfolio";
import ContactPage from "./components/contact/contact";


const HomePage = () => {
  return (
    <div>
      {/* nav */}
      <Header></Header>

      {/* hero section */}
      <HeroSection></HeroSection>

      {/* about section */}
      <AboutPage></AboutPage>

      {/* Portfolio section */}
      <PortfolioPage></PortfolioPage>

      {/* Contact section */}
      <ContactPage></ContactPage>

     
      {/* footer section */}
      <Footer></Footer>

      
    </div>
  )
  
}

export default HomePage;
