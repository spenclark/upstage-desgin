import './App.css';
import NavBar from './Comonents/NavBar';
import Hero from './Comonents/Hero';
import Sliders from './Comonents/Sliders';
import Footer from './Comonents/Footer';
import TrustedBy from './Comonents/TrustedBy';
import BodyCards from './Comonents/BodyCards';
import ContactBanner from './Comonents/ContactBanner';
import Testimonials from './Comonents/Testimonials';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Hero/>
      <TrustedBy />
      <BodyCards />
      {/* <Testimonials /> */}
      <div style={{width: "100%", background: "#e6e6e6"}}>
      <Sliders />
      {/* <ContactBanner /> */}
      <Footer />
      </div>
    </div>
  );
}

export default App;
