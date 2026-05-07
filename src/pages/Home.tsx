export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Sistema de Gestão
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Portal da Turma
          </h1>
          <p className="text-slate-500 text-lg">
            Bem-vindo ao sistema de gestão da turma.
          </p>
        </div>
 
        <div className="grid gap-4">
          {[
            {
              title: "Ver Estudantes",
              desc: "Consulta a lista completa de estudantes da turma.",
              href: "/estudantes",
            },
            {
              title: "Consultar Perfis",
              desc: "Acede ao perfil individual de cada estudante.",
              href: "/estudantes",
            },
            {
              title: "Gerir Notas",
              desc: "Adiciona e acompanha as notas dos estudantes.",
              href: "/notas",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:bg-zinc-50 transition-all group"
            >
              <div>
                <p className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </p>
                <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
              </div>
              <span className="ml-auto text-slate-300 group-hover:text-blue-400 text-lg transition-colors">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}