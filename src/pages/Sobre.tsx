export default function Sobre() {
  const conceitos = [
    "Criação de componentes funcionais",
    "Utilização de props",
    "Gestão de estado com useState",
    "Renderização dinâmica com .map()",
    "Navegação entre páginas com React Router",
    "Rotas dinâmicas com useParams",
    "Comunicação entre componentes",
    "Formulários controlados",
  ];
 
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Informações
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Sobre Este Projeto
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Este projeto foi desenvolvido no âmbito da disciplina de{" "}
            <span className="font-semibold text-slate-800">Programação Web</span>{" "}
            utilizando React e React Router.
          </p>
        </div>
 
        {/* Objetivo */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Conceitos Praticados
          </h2>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            O objetivo principal da aplicação é praticar conceitos fundamentais
            do React, incluindo:
          </p>
          <ul className="space-y-2">
            {conceitos.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Descrição */}
        <div className="bg-blue-900 text-white rounded-xl p-6">
          <p className="text-blue-100 leading-relaxed text-sm">
            A aplicação simula um pequeno{" "}
            <span className="font-semibold text-white">portal académico</span>{" "}
            onde é possível consultar estudantes, visualizar perfis e gerir
            notas.
          </p>
        </div>
      </div>
    </main>
  );
}