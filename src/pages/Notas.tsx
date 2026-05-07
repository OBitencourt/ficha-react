// src/pages/Notas.tsx

import { useState } from "react";

// =========================
// TIPOS
// =========================

interface NotasType {
  estudante: string;
  nota: number;
}

interface FormularioNotaType {
  onAdicionarNota: ({ estudante, nota }: NotasType) => void;
}

// =========================
// COMPONENTE FILHO — Formulário
// =========================

function FormularioNota({ onAdicionarNota }: FormularioNotaType) {
  const [estudante, setEstudante] = useState("");
  const [nota, setNota] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!estudante || !nota) {
      alert("Preencha todos os campos.");
      return;
    }

    const notaNumero = Number(nota);

    if (notaNumero < 0 || notaNumero > 20) {
      alert("A nota deve estar entre 0 e 20.");
      return;
    }

    onAdicionarNota({ estudante, nota: notaNumero });
    setEstudante("");
    setNota("");
  }

  const inputClass =
    "px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        value={estudante}
        onChange={(e) => setEstudante(e.target.value)}
        placeholder="Nome do estudante"
        className={`${inputClass} flex-2`}
      />
      <input
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        type="number"
        min="0"
        max="20"
        placeholder="Nota (0–20)"
        className={`${inputClass} flex-1`}
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition cursor-pointer whitespace-nowrap"
      >
        Adicionar
      </button>
    </form>
  );
}

// =========================
// COMPONENTE FILHO — Tabela
// =========================

function obterClassificacao(nota: number): { texto: string; classes: string } {
  if (nota >= 18) return { texto: "Excelente", classes: "text-green-700 bg-green-50" };
  if (nota >= 14) return { texto: "Bom", classes: "text-yellow-700 bg-yellow-50" };
  if (nota >= 10) return { texto: "Suficiente", classes: "text-orange-600 bg-orange-50" };
  return { texto: "Insuficiente", classes: "text-red-600 bg-red-50" };
}

function TabelaNotas({ notas }: { notas: NotasType[] }) {
  if (notas.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm">
        Nenhuma nota adicionada ainda.
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white text-sm">
            <th className="px-4 py-3 text-left font-semibold">Estudante</th>
            <th className="px-4 py-3 text-center font-semibold">Nota</th>
            <th className="px-4 py-3 text-center font-semibold">Classificação</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((item, index) => {
            const classificacao = obterClassificacao(item.nota);
            return (
              <tr
                key={index}
                className="border-b border-slate-100 bg-white hover:bg-slate-50 transition"
              >
                <td className="px-4 py-3 text-sm text-slate-800 font-medium">
                  {item.estudante}
                </td>
                <td className="px-4 py-3 text-center text-sm text-slate-700 font-semibold">
                  {item.nota}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${classificacao.classes}`}
                  >
                    {classificacao.texto}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// =========================
// COMPONENTE PAI
// =========================

export default function Notas() {
  const [notas, setNotas] = useState<NotasType[]>([]);

  function adicionarNota(novaNota: NotasType) {
    setNotas([...notas, novaNota]);
  }

  const media =
    notas.length > 0
      ? (
          notas.reduce((total, item) => total + item.nota, 0) / notas.length
        ).toFixed(1)
      : null;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Avaliação
          </span>
          <h1 className="text-4xl font-medium text-slate-800">Gestão de Notas</h1>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6">
          <FormularioNota onAdicionarNota={adicionarNota} />
        </div>

        <TabelaNotas notas={notas} />

        {media && (
          <div className="mt-4 flex items-center justify-between p-4 bg-blue-900 text-white rounded-xl">
            <span className="text-sm font-medium text-blue-200">
              Média da turma
            </span>
            <span className="text-2xl font-bold">{media}</span>
          </div>
        )}
      </div>
    </main>
  );
}