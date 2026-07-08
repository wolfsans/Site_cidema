import { mockBiddings } from '../../mockData';
import { FileText, Gavel, CheckCircle } from 'lucide-react';

export function AdminDashboard() {
  const openBiddingsCount = mockBiddings.filter(b => b.status === "Em aberto").length;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Visão Geral</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-500 font-medium">Licitações em Aberto</h3>
            <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><Gavel className="w-5 h-5"/></div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{openBiddingsCount}</div>
          <div className="text-sm text-gray-500 mt-2">processos ativos no momento</div>
        </div>

        <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-500 font-medium">Notícias Publicadas</h3>
            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg"><FileText className="w-5 h-5"/></div>
          </div>
          <div className="text-3xl font-bold text-gray-900">24</div>
          <div className="text-sm text-gray-500 mt-2">últimos 30 dias</div>
        </div>

        <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-500 font-medium">Contratos Vigentes</h3>
            <div className="bg-purple-100 text-purple-700 p-2 rounded-lg"><CheckCircle className="w-5 h-5"/></div>
          </div>
          <div className="text-3xl font-bold text-gray-900">12</div>
          <div className="text-sm text-gray-500 mt-2">acompanhamento regular</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
         <div className="px-6 py-4 border-b border-gray-200">
           <h3 className="font-semibold text-gray-900">Ações Rápidas</h3>
         </div>
         <div className="p-6">
            <p className="text-gray-600 mb-4">Bem-vindo ao painel administrativo. Navegue pelo menu lateral para acessar os módulos de gestão.</p>
         </div>
      </div>
    </div>
  );
}
