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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
