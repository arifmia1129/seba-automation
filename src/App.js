import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
