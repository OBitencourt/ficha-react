import { useState } from "react";
import { estudantes } from "../data/estudantes";
import CartaoUtilizador from "./CartaoUtilizador";
import { Link } from "react-router-dom";

export default function ListaEstudantes() {
  const [pesquisa, setPesquisa] = useState("");

  const filtrados = estudantes.filter(est =>
    est.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Pesquisar estudante..."
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
      />

      <div style={{ display: "flex", gap: "16px" }}>
        {filtrados.map(estudantes => (
          <Link key={estudantes.id} to={`/estudantes/${estudantes.id}`}>
            <CartaoUtilizador
              nome={estudantes.nome}
              curso={estudantes.curso}
              ano={estudantes.ano}
              destaque={estudantes.ano === 1}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}