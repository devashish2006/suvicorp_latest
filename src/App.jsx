// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarDemo } from './components/navbar';
import Home from './components/page/Home';
import TailwindFooter from './components/Fotter';
import { TextGenerateEffectDemo } from './components/TextGenerateEffect';
import ContactUs from './components/page/ContactUs.jsx';
import About from './components/page/About.jsx';


function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen"> {/* Full height container */}
        <NavbarDemo />

        {/* Define Routes */}
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <TailwindFooter /> {/* Footer at the bottom */}
      </div>

     
   
    </Router>
  );
}

export default App;
