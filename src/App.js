import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./features/home/home";
import About from "./features/about/about";
import Contact from "./features/contact/contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Seo from "./features/lists/seo/seo";
import Max from "./features/lists/max/max";
import Lite from "./features/lists/lite/lite";
import Compare from "./features/lists/compare/compare";
import Prebook from "./features/prebook/prebook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="seo" element={<Seo />} />
          <Route path="max" element={<Max />} />
          <Route path="lite" element={<Lite />} />
          <Route path="compare" element={<Compare />} />
          <Route path="contact" element={<Contact />} />
          <Route path="prebook" element={<Prebook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
