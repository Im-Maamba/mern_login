import "./App.css";

import Landingpage from "./screens/landingpage/landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./screens/links/links";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Loginpage from "./screens/loginpage/loginpage";

import Registerpage from "./screens/registerpage/registerpage";
import Profilescreen from "./screens/profilescreen/profilescreen";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Landingpage />} exact />;
      <Route path="/login" element={<Loginpage />} />;
      <Route path="/profile" element={<Profilescreen />} />;
      <Route path="/register" element={<Registerpage />} />;
      <Route path="/links" element={<Links />} />;
    </Routes>
    <Footer />
  </Router>
);

export default App;
