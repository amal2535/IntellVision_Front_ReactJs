import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Routes,Route } from 'react-router-dom';

import { HomeProvider } from './HomeContext';
function App() {
  return (
    <HomeProvider>
    <div className="App ">
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
    </HomeProvider>
    
  );
}

export default App;
