import { useDashboardStats } from "../../../../hooks/useDashboardStats";

export function Dashboard() {
  const { stats, isLoading, error } = useDashboardStats();

  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  if (isLoading) return <div>Carregando dashboard...</div>;
  if (error) return <div>Erro ao carregar dashboard.</div>;

  return (
    <div className="w-full md:w-[400px] lg:w-[800px] p-4 flex flex-col gap-7">
      <h2 className="font-bold text-2xl">Dashboard</h2>

      <div className="flex flex-col gap-2 md:flex-wrap md:flex-row">
        <div className="border bg-white rounded-2xl flex justify-between md:flex-col md:gap-6 md:w-[220px] p-4">
          <p>Doações recebidas</p>
          <span className="font-bold text-2xl">{formatCurrency(stats.totalDonations)}</span>
        </div>

        <div className="border bg-white rounded-2xl flex justify-between md:flex-col  md:gap-6md:w-[220px] p-4">
          <p>Doadores</p>
          <span className="font-bold text-2xl">{stats.donorsCount}</span>
        </div>
    
        <div className="border bg-white rounded-2xl flex justify-between md:flex-col  md:gap-6md:w-[220px] p-4">
          <p>Animais cadastrados</p>
          <span className="font-bold text-2xl">{stats.animalsCount}</span>
        </div>
    
      </div>
    </div>
  )
}
