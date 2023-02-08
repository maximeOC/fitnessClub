import './App.css';
import Hero from './components/Hero/Hero';
import Programms from './components/Programs/Programms';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programms />
          <Reasons />
          <Plans />
    </div>
  );
}

export default App;
