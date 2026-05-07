import { useState } from "react";
 
export default function Registo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ano, setAno] = useState(1);
 
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = { nome, email, ano };
    alert(JSON.stringify(dados, null, 2));
    setNome("");
    setEmail("");
    setAno(1);
  }
 
  const inputClass =
    "w-full mt-1.5 px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";
 
  const labelClass = "block text-sm font-medium text-slate-700";
 
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Formulário
          </span>
          <h1 className="text-4xl font-bold text-slate-800">
            Registo de Estudante
          </h1>
        </div>
 
        {/* Form card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label className={labelClass}>Nome</label>
              <input
                type="text"
                placeholder="O teu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={inputClass}
              />
            </div>
 
            {/* Email */}
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                placeholder="email@exemplo.pt"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
 
            {/* Ano */}
            <div>
              <label className={labelClass}>Ano Curricular</label>
              <select
                value={ano}
                onChange={(e) => setAno(Number(e.target.value))}
                className={inputClass}
              >
                <option value={1}>1.º Ano</option>
                <option value={2}>2.º Ano</option>
                <option value={3}>3.º Ano</option>
              </select>
            </div>
 
            {/* Botão */}
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm rounded-lg transition cursor-pointer"
            >
              Registar
            </button>
          </form>
        </div>
 
        {/* Pré-visualização */}
        {nome && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Pré-visualização
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">{nome}</span>
              {email && (
                <>
                  {" "}
                  &middot;{" "}
                  <span className="text-slate-500">{email}</span>
                </>
              )}
              {" "}
              &middot; <span className="text-slate-500">{ano}.º Ano</span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}