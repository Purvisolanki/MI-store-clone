
import PreNavbar from './components/PreNavbar.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Card from "./components/card.js";
import Heading from "./components/Heading.js";
import StarProduct from './components/Starproduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories.js';
import data from "./data/data.json";
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import NavOptios from "./components/NavOptios.js";


function App() {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />

        <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories} />

        <Slider />
        <Offers />
        <Card />
        <Heading text="STAR PRODUCTS" />
        <StarProduct />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

        <Routes>
          <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

          <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />

          <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />

          <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />

        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner} />
        <Footer footer={data.footer} />

      </Router>
    </>
  );
}

export default App;
