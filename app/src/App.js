import logo from './logo.svg';
import './App.css';
import NavBar from './Comonents/NavBar';
import Hero from './Comonents/Hero';
import Sliders from './Comonents/Sliders';
import Footer from './Comonents/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Sliders />
      <Footer />
    </div>
  );
}

export default App;
