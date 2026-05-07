import { useState } from "react";
import { estudantes } from "../data/estudantes";
import CartaoUtilizador from "./CartaoUtilizador";
import { Link } from "react-router-dom";
 
export default function ListaEstudantes() {
  const [pesquisa, setPesquisa] = useState("");
 
  const filtrados = estudantes.filter((est) =>
    est.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );
 
  return (
    <div>
      {/* Barra de pesquisa */}
      <div className="relative mb-6">
        <input
          placeholder="Pesquisar estudante..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="w-full pl-4 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
 
      {/* Resultado */}
      {filtrados.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-sm">
          Nenhum estudante encontrado para "{pesquisa}".
        </div>
      ) : (
        <>
          <p className="text-xs text-slate-400 mb-3">
            {filtrados.length} estudante{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filtrados.map((estudante) => (
              <Link
                key={estudante.id}
                to={`/estudantes/${estudante.id}`}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              >
                <CartaoUtilizador
                  nome={estudante.nome}
                  curso={estudante.curso}
                  ano={estudante.ano}
                  destaque={estudante.ano === 1}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}