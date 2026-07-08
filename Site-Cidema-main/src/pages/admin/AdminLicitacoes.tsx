import { useState } from 'react';
import { mockBiddings } from '../../mockData';
import { Plus, Edit, Trash2, FileUp } from 'lucide-react';
import { cn } from '../../utils';

export function AdminLicitacoes() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
         <h1 className="text-2xl font-bold text-gray-900">Gestão de Licitações</h1>
         <button 
           onClick={() => setIsAdding(!isAdding)}
           className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors"
         >
           {isAdding ? 'Cancelar' : <><Plus className="w-4 h-4 mr-2" /> Novo Processo</>}
         </button>
      </div>

      {isAdding && (
         <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Cadastrar Novo Processo</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Ano</label>
                   <input type="number" defaultValue={2026} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Processo nº</label>
                   <input type="text" placeholder="Ex: 045/2026" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Licitação nº</label>
                   <input type="text" placeholder="Ex: 012/2026" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Modalidade</label>
                   <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white">
                      <option>Pregão Eletrônico</option>
                      <option>Concorrência</option>
                      <option>Dispensa de Licitação</option>
                   </select>
                 </div>
              </div>
              
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Objeto Resumido</label>
                 <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm" />
              </div>

              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Descrição Completa</label>
                 <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm"></textarea>
              </div>

              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Situação Inicial</label>
                 <select className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white">
                    <option>Em aberto</option>
                    <option>Em andamento</option>
                 </select>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                 <button type="button" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Salvar Processo
                 </button>
              </div>
            </form>
         </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left">
             <thead className="bg-gray-50 border-b border-gray-200 text-gray-700">
               <tr>
                 <th className="px-6 py-4 font-semibold">Processo</th>
                 <th className="px-6 py-4 font-semibold">Modalidade</th>
                 <th className="px-6 py-4 font-semibold max-w-[300px]">Objeto</th>
                 <th className="px-6 py-4 font-semibold">Status</th>
                 <th className="px-6 py-4 font-semibold text-right">Ações</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200">
                {mockBiddings.map(bidding => (
                  <tr key={bidding.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                       <span className="font-mono text-gray-600 block">{bidding.processNumber}</span>
                       <span className="text-xs text-gray-400">Lic. {bidding.biddingNumber}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-800">{bidding.modality}</td>
                    <td className="px-6 py-4 max-w-[300px] truncate text-gray-600">{bidding.object}</td>
                    <td className="px-6 py-4">
                       <span className={cn(
                          "text-xs font-semibold px-2 py-1 rounded-md border",
                          bidding.status === 'Em aberto' ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                          bidding.status === 'Homologado' ? "bg-gray-100 text-gray-700 border-gray-200" :
                          "bg-yellow-50 text-yellow-700 border-yellow-200"
                        )}>
                          {bidding.status}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                       <button className="p-1.5 text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded md:inline-flex items-center hidden" title="Anexar Documentos">
                          <FileUp className="w-4 h-4 mr-1" /> Anexar
                       </button>
                       <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded" title="Editar">
                          <Edit className="w-4 h-4" />
                       </button>
                       <button className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="Excluir">
                          <Trash2 className="w-4 h-4" />
                       </button>
                    </td>
                  </tr>
                ))}
             </tbody>
           </table>
         </div>
      </div>
    </div>
  );
}
