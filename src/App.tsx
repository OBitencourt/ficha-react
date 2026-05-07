import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Estudantes from "./pages/Estudantes";
import PerfilEstudante from "./pages/PerfilEstudante";
import Notas from './pages/Notas'
import Sobre from "./pages/Sobre";
import Registo from "./pages/Registo";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estudantes" element={<Estudantes />} />
        <Route path="/estudantes/:id" element={<PerfilEstudante />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/registo" element={<Registo />} />
      </Routes>

    </BrowserRouter>
  );
}