import { useParams, Link } from "react-router-dom";
import { estudantes } from "../data/estudantes";

export default function PerfilEstudante() {
  const { id } = useParams();

  const estudante = estudantes.find(e => e.id === Number(id));

  if (!estudante) {
    return <p>Estudante não encontrado.</p>;
  }

  return (
    <main style={{ padding: "24px" }}>
      <h1>{estudante.nome}</h1>
      <p>Curso: {estudante.curso}</p>
      <p>Ano: {estudante.ano}</p>
      <p>Email: {estudante.email}</p>

      <Link to="/estudantes">← Voltar</Link>
    </main>
  );
}