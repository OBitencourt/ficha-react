import { useParams, Link } from "react-router-dom";
import { estudantes } from "../data/estudantes";
 
export default function PerfilEstudante() {
  const { id } = useParams();
  const estudante = estudantes.find((e) => e.id === Number(id));
 
  if (!estudante) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-5xl mb-4">🔍</p>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            Estudante não encontrado
          </h2>
          <Link
            to="/estudantes"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Voltar à lista
          </Link>
        </div>
      </main>
    );
  }
 
  const iniciais = estudante.nome.split(" ").map((n: string) => n[0]).slice(0, 2).join("");
 
  const campos = [
    { label: "Curso", valor: estudante.curso, icon: "🎓" },
    { label: "Ano Curricular", valor: `${estudante.ano}.º Ano`, icon: "📅" },
    { label: "Email", valor: estudante.email, icon: "✉️" },
  ];
 
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-lg mx-auto">
        <Link
          to="/estudantes"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition mb-8"
        >
          <span>←</span> Voltar à lista
        </Link>
 
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="h-24 bg-blue-900" />
 
          <div className="px-6 pb-6">
            <div className="-mt-10 mb-4">
              <div className="w-20 h-20 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white text-2xl font-bold ">
                {iniciais}
              </div>
            </div>
 
            <h1 className="text-2xl font-bold text-slate-800 mb-1">
              {estudante.nome}
            </h1>
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-6">
              Estudante
            </span>
 
            <div className="space-y-3">
              {campos.map((campo) => (
                <div
                  key={campo.label}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <span className="text-lg">{campo.icon}</span>
                  <div>
                    <p className="text-xs text-slate-500">{campo.label}</p>
                    <p className="text-sm font-medium text-slate-800">
                      {campo.valor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}