import "./App.css";

import Landingpage from "./screens/landingpage/landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./screens/links/links";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Landingpage />} exact />;
      <Route path="/links" element={<Links />} exact />;
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
