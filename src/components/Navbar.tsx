import { NavLink } from "react-router-dom";
 
export default function Navbar() {
  const links = [
    { to: "/", label: "Início" },
    { to: "/estudantes", label: "Estudantes" },
    { to: "/notas", label: "Notas" },
    { to: "/registo", label: "Registo" },
    { to: "/sobre", label: "Sobre" },
  ];
 
  return (
    <nav className="bg-blue-900 px-6 py-0 flex items-center gap-1">
      {/* Logo / Brand */}
      <span className="text-white font-bold text-sm tracking-tighter uppercase mr-6 py-4">
        Portal da Turma
      </span>
 
      {/* Links */}
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `px-4 py-4 text-sm 
           border-b-2 transition-colors ${
              isActive
                ? "text-white border-white font-medium"
                : "text-blue-300 border-transparent font-normal hover:text-white hover:border-blue-400"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}