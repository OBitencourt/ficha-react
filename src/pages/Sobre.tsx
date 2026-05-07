// src/pages/Sobre.tsx

export default function Sobre() {
  return (
    <main
      style={{
        padding: "24px",
        lineHeight: "1.6",
      }}
    >
      <h1>Sobre Este Projeto</h1>

      <p>
        Este projeto foi desenvolvido no âmbito da disciplina de
        Programação Web utilizando React e React Router.
      </p>

      <p>
        O objetivo principal da aplicação é praticar conceitos
        fundamentais do React, incluindo:
      </p>

      <ul>
        <li>Criação de componentes funcionais</li>
        <li>Utilização de props</li>
        <li>Gestão de estado com useState</li>
        <li>Renderização dinâmica com .map()</li>
        <li>Navegação entre páginas com React Router</li>
        <li>Rotas dinâmicas com useParams</li>
        <li>Comunicação entre componentes</li>
        <li>Formulários controlados</li>
      </ul>

      <p>
        A aplicação simula um pequeno portal académico onde é
        possível consultar estudantes, visualizar perfis e gerir
        notas.
      </p>
    </main>
  );
}