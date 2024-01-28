import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Bienvenida from "./components/Bienvenida";
import Dominio from "./components/Dominio";
import CasosDeUso from "./components/CasosDeUso";
import MockUp from "./components/MockUp";

import Navbar from "./NavBar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/Dominio" element={<Dominio />} />
      <Route path="/Casos-de-uso" element={<CasosDeUso />} />
      <Route path="/MockUp" element={<MockUp />} />
    </Routes>
  </Router>
);

export default App;
