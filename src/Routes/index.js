/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import AboutMe from '../Components/AboutMe';
import AllProjects from '../Components/AllProjects';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/tech" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
