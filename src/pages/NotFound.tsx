import { Link, useLocation } from "react-router-dom";
 
export default function NotFound () {
  const { pathname } = useLocation();
 
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
 
        {/* Código 404 */}
        <div className="relative inline-block mb-6">
          <span className="text-[9rem] font-black text-slate-300 leading-none select-none">
            404
          </span>
        </div>
 
        {/* Mensagem */}
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Página não encontrada
        </h1>
        <p className="text-slate-500 text-sm mb-2">
          A rota{" "}
          <code className="bg-slate-100 text-blue-700 font-mono px-1.5 py-0.5 rounded text-xs">
            {pathname}
          </code>{" "}
          não existe neste portal.
        </p>
        <p className="text-slate-400 text-sm mb-8">
          Pode ter escrito o endereço errado ou a página foi removida.
        </p>
 
        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition"
          >
            Ir para o Início
          </Link>
          <Link
            to="/estudantes"
            className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg border border-slate-200 transition"
          >
            Ver Estudantes
          </Link>
        </div>
 
        {/* Links rápidos */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">
            Páginas disponíveis
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { to: "/", label: "Início" },
              { to: "/estudantes", label: "Estudantes" },
              { to: "/notas", label: "Notas" },
              { to: "/registo", label: "Registo" },
              { to: "/sobre", label: "Sobre" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-3 py-1 text-xs text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full transition font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}