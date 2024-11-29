import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../pages/AboutUs'
import WhyUs from '../pages/WhyUs'
import ContactForm from '../components/ContactForm'
import Ourservices from '../pages/Ourservices'
import ScrollToTop from '../components/ScrollTop'
import Cards from '../components/Cards'
import WebPlans, { LogoPlans, SocialMediaPlans } from '../components/PlansData'
import { AppPlans } from '../components/PlansData'
import DigitalMarketing from '../pages/DigitalMarketing'
import PlansWeb from '../pages/PlansWeb'
import PlansApp from '../pages/PlansApp'
import CustomSoftware from '../pages/customSoftware.jsx'
import NotFound from '../components/NotFound'
import Seo from '../pages/Seo'
import Logo from '../pages/PlansLogo'
import AnimeArt from '../pages/AnimeArt.jsx'
import Calendly from '../components/Calendly/Calendly.jsx'
import ItOutsourcing from '../pages/ItOutsourcing.jsx'
import PortfolioDetail from "../pages/portfolio/portfolioDetail.jsx";
import DigitalMarketingPortfolio from '../pages/portfolio/digitalMarketingPortfolio.jsx'
import BlockChain from '../pages/blockchain/blockchain.jsx'

function Router() {
  return (
    <>
      <BrowserRouter>
        {/* To Scroll on top of the Page */}
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path='/' element={<Home />} />

          {/* Web Plans Page */}
          <Route path='/services/website-development-services' element={<PlansWeb plans={WebPlans} />} />

          <Route path='/services/blockchain-services' element={<BlockChain />} />

          {/* App Plans Page */}
          <Route path='/services/app-development-services' element={<PlansApp plans={AppPlans} />} />

          {/* Logo Page */}
          <Route path='/services/graphics-design-services' element={<Logo plans={LogoPlans} />} />

          {/* Custom Software Development Page */}
          <Route path='/services/software-development-services' element={<CustomSoftware  />} />

          {/* Anime Art Page */}
          <Route path='/services/anime-art-services' element={<AnimeArt  />} />

          {/* About Us Page */}
          <Route path='/aboutUs' element={<AboutUs />} />

          {/* Digital Marketing Page */}
          <Route path='/digitalMarketing' element={<DigitalMarketing plans={SocialMediaPlans} />} />

          {/* Why Page */}
          <Route path='/whyUs' element={<WhyUs />} />

          {/* SEO Page*/}
          <Route path='/services/seo-services' element={<Seo />} />

          {/* Our Work Page*/}
          <Route path='/Ourservices' element={<Ourservices />} />

          {/* Contact Us Component */}
          <Route path='/contactUs' element={<ContactForm />} />
          
          <Route path="/portfolio-detail/:type/:title" element={<PortfolioDetail />} />
          <Route path="/portfolio-detail/digital-marketing" element={<DigitalMarketingPortfolio />} />



          {/* Services Component */}
          <Route
            path='/services'
            element={<Cards heading={`Our Services`} />} 
          />


          {/* Calendly Component */}
          <Route
            path='/calendly'
            element={<Calendly />}
          />

          {/* ItOutsourcing Component */}
          <Route
            path='/services/ItOutsourcing'
            element={<ItOutsourcing/>}
          />

          {/* 404*/}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Router
