import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Bienvenida from "./components/Bienvenida";
import Dominio from "./components/Dominio";
import Navbar from "./NavBar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/Dominio" element={<Dominio />} />
    </Routes>
  </Router>
);

export default App;
