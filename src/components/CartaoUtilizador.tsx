export default function CartaoUtilizador({ nome, curso, ano, destaque }: any) {
  return (
    <div className={`cartao ${destaque ? 'cartao-destaque' : ''}`}>
      
      {destaque && <span className="badge">Caloiro</span>}

      <h2>{nome}</h2>
      <p>{curso}</p>
      <p>Ano: {ano}</p>
    </div>
  );
}