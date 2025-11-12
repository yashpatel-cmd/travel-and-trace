import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Destination from "./Destination";
import { TodoAppExample } from './todo.jsx'; 
import Contact from "./Contact";
import { BrowserRouter, Routes , Route} from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ThemeProvider>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoAppExample />} />
      </Routes>
    <Footer />
  </ThemeProvider>
  </BrowserRouter>
);