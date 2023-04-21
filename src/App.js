import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forside from "./pages/Forside";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Fejl from "./pages/404.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/404" element={<Fejl />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
