interface CartaoUtilizadorProps {
  nome: string;
  curso: string;
  ano: number;
  destaque?: boolean;
}
 
export default function CartaoUtilizador({
  nome,
  curso,
  ano,
  destaque,
}: CartaoUtilizadorProps) {
  const iniciais = nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
 
  return (
    <div
      className={`relative flex flex-col gap-2 p-5 rounded-xl border bg-white transition-all hover:-translate-y-0.5 ${
        destaque
          ? "border-blue-300 ring-1 ring-blue-200"
          : "border-slate-200"
      }`}
    >
      {destaque && (
        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
          Caloiro
        </span>
      )}
 
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${
          destaque ? "bg-blue-600" : "bg-slate-500"
        }`}
      >
        {iniciais}
      </div>
 
      <div>
        <h2 className="font-semibold text-slate-800 text-sm leading-tight">
          {nome}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">{curso}</p>
      </div>
 
      <span className="inline-block text-xs text-slate-400 font-medium">
        {ano}.º Ano
      </span>
    </div>
  );
}