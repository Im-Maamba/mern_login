import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Landingpage from "./screens/landingpage/landingpage";

const App = () => (
  <>
    <Header />
    <main>
      <Landingpage />
    </main>
    <Footer />
  </>
);

export default App;
