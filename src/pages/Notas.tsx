// src/pages/Notas.jsx

import { useState } from "react";
// =========================
// COMPONENTE FILHO
// Formulário
// =========================

interface FormularioNotaType {
  onAdicionarNota: ({estudante, nota}: {estudante: string, nota: number}) => void 
}

function FormularioNota({ onAdicionarNota }: FormularioNotaType) {
  const [estudante, setEstudante] = useState("");
  const [nota, setNota] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    // validações
    if (!estudante || !nota) {
      alert("Preencha todos os campos.");
      return;
    }

    const notaNumero = Number(nota);

    if (notaNumero < 0 || notaNumero > 20) {
      alert("A nota deve estar entre 0 e 20.");
      return;
    }

    // envia dados para o componente pai
    onAdicionarNota({
      estudante,
      nota: notaNumero,
    });

    // limpa os campos
    setEstudante("");
    setNota("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "16px",
      }}
    >
      <input
        value={estudante}
        onChange={(e) => setEstudante(e.target.value)}
        placeholder="Nome do estudante"
        style={{
          padding: "8px",
          flex: 2,
        }}
      />

      <input
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        type="number"
        min="0"
        max="20"
        placeholder="Nota (0-20)"
        style={{
          padding: "8px",
          flex: 1,
        }}
      />

      <button
        type="submit"
        style={{
          padding: "8px 16px",
          background: "#1E8449",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Adicionar
      </button>
    </form>
  );
}

// =========================
// COMPONENTE FILHO
// Tabela
// =========================

interface NotasType {
  estudante: string,
  nota: number
}
function TabelaNotas({ notas }: {notas: NotasType[]}) {
  function obterClassificacao(nota: number) {
    if (nota >= 18) {
      return {
        texto: "Excelente",
        cor: "green",
      };
    }

    if (nota >= 14) {
      return {
        texto: "Bom",
        cor: "#B7950B",
      };
    }

    if (nota >= 10) {
      return {
        texto: "Suficiente",
        cor: "orange",
      };
    }

    return {
      texto: "Insuficiente",
      cor: "red",
    };
  }

  console.log(notas)

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr
          style={{
            background: "#1E3A5F",
            color: "white",
          }}
        >
          <th style={{ padding: "10px", textAlign: "left" }}>
            Estudante
          </th>

          <th style={{ padding: "10px", textAlign: "center" }}>
            Nota
          </th>

          <th style={{ padding: "10px", textAlign: "center" }}>
            Classificação
          </th>
        </tr>
      </thead>

      <tbody>
        {notas.map((item: NotasType, index: number) => {
          const classificacao = obterClassificacao(item.nota);

          return (
            <tr
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "10px" }}>
                {item.estudante}
              </td>

              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {item.nota}
              </td>

              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  color: classificacao.cor,
                  fontWeight: "bold",
                }}
              >
                {classificacao.texto}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// =========================
// COMPONENTE PAI
// =========================

export default function Notas() {
  const [notas, setNotas] = useState<any>([]);

  function adicionarNota(novaNota: NotasType) {
    setNotas([...notas, novaNota]);
  }

  // cálculo da média
  const media =
    notas.length > 0
      ? (
          notas.reduce((total: number, item: NotasType) => total + item.nota, 0) /
          notas.length
        ).toFixed(1)
      : 0;

  return (
    <main style={{ padding: "24px" }}>
      <h1>Gestão de Notas</h1>

      <FormularioNota onAdicionarNota={adicionarNota} />

      <TabelaNotas notas={notas} />

      {notas.length > 0 && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            background: "#F2F3F4",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Média das notas: {media}
        </div>
      )}
    </main>
  );
}