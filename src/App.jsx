import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Reactions from "./components/Reactions";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Stikers from "./components/Stikers";
import Entertainment from "./components/Entertainment";
import Header2 from "./components/Header2";

const App = () => {
  return (
    <div>
      <div className="header">
        {' '}
        <Header />
        <Header2/>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactions" element={<Reactions />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/stikers" element={<Stikers />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App
