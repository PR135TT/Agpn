import './App.css';
import Home from "./pages/home"
import HomePage from "./pages/homePage"
import About from "./pages/about"
import Contact from "./pages/contact"
import Ecosystem from "./pages/ecosystem"
import Empowerment from "./pages/empowerment"
import GetInvolved from "./pages/getInvolved"
import Insights from "./pages/insights"
import ReferEarn from "./pages/referEarn"
import Certificates from "./pages/certificates"
import FArticle from "./pages/fArticle"
import ScrollToTop from "./components/scrollToTop"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/empowerment" element={<Empowerment />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/referandearn" element={<ReferEarn />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/fArticle" element={<FArticle article="Eron"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
