import "./App.css";
import "./css/bootstrap.css";
import "./css/style.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/main/Main";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import { Route, Routes } from "react-router-dom";
import Iphone from "./components/Iphone";
import Watch from "./components/Watch";
import Vision from "./components/Vision";
import Entertainment from "./components/Entertainment";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
