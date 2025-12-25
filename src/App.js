import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

// useContext
import { UseContext } from './hooks/use-context';

// routers
import Router from './app/router';

import Contact from './app/page/contact';
import ProjectScreen from './app/page/project';
import About from './app/page/about';
import Service from './app/page/service';


// styles css

import './styleSheet/App.css';

    
export default function App() {
  return (
    <UseContext>
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectScreen />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </UseContext>
  );
}
