import './App.css';
import Hero from './components/Hero/Hero';
import Programms from './components/Programs/Programms';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programms />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
