import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
