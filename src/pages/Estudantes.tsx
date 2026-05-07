import ListaEstudantes from "../components/ListaEstudantes";
 
export default function Estudantes() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Diretório
          </span>
          <h1 className="text-4xl font-bold text-slate-800">Estudantes</h1>
        </div>
 
        <ListaEstudantes />
      </div>
    </main>
  );
}