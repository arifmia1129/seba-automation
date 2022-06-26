import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
