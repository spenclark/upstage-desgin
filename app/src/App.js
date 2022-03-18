import './App.css';
import NavBar from './Comonents/NavBar';
import Hero from './Comonents/Hero';
import Sliders from './Comonents/Sliders';
import Footer from './Comonents/Footer';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Hero/>
      {/* <Sliders /> */}
      <Footer />
    </div>
  );
}

export default App;
