import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "16px", padding: "12px", background: "#1E3A5F" }}>
      
      <NavLink to="/" style={({ isActive }) => ({
        color: isActive ? "#61DAFB" : "white"
      })}>
        Início
      </NavLink>

      <NavLink to="/estudantes" style={({ isActive }) => ({
        color: isActive ? "#61DAFB" : "white"
      })}>
        Estudantes
      </NavLink>

      <NavLink to="/notas" style={({ isActive }) => ({
        color: isActive ? "#61DAFB" : "white"
      })}>
        Notas
      </NavLink>

    </nav>
  );
}