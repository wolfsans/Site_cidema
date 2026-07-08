import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockBiddings } from '../../mockData';
import { Search, Filter, Gavel, ChevronRight } from 'lucide-react';
import { cn } from '../../utils';

export function LicitacoesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [modalityFilter, setModalityFilter] = useState('');

  const filteredBiddings = mockBiddings.filter(bidding => {
    const matchesSearch = bidding.object.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          bidding.processNumber.includes(searchTerm);
    const matchesStatus = statusFilter ? bidding.status === statusFilter : true;
    const matchesModality = modalityFilter ? bidding.modality === modalityFilter : true;
    
    return matchesSearch && matchesStatus && matchesModality;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Licitações</h1>
        <p className="text-gray-600">Consulte os processos licitatórios e editais do CIDEMA.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs mb-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
               <label className="block text-sm font-medium text-gray-700 mb-1">Buscar</label>
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <Search className="h-5 w-5 text-gray-400" />
                 </div>
                 <input
                   type="text"
                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                   placeholder="Objeto, processo ou palavra-chave..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
               </div>
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Modalidade</label>
               <select
                 className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white"
                 value={modalityFilter}
                 onChange={(e) => setModalityFilter(e.target.value)}
               >
                 <option value="">Todas as modalidades</option>
                 <option value="Pregão Eletrônico">Pregão Eletrônico</option>
                 <option value="Concorrência">Concorrência</option>
                 <option value="Dispensa de Licitação">Dispensa de Licitação</option>
               </select>
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Situação</label>
               <select
                 className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white"
                 value={statusFilter}
                 onChange={(e) => setStatusFilter(e.target.value)}
               >
                 <option value="">Todas as situações</option>
                 <option value="Em aberto">Em aberto</option>
                 <option value="Em andamento">Em andamento</option>
                 <option value="Homologado">Homologado</option>
                 <option value="Encerrado">Encerrado</option>
               </select>
            </div>
         </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
         <ul className="divide-y divide-gray-200">
           {filteredBiddings.map((bidding) => (
             <li key={bidding.id}>
               <Link to={`/licitacoes/${bidding.id}`} className="block hover:bg-gray-50 transition-colors p-6">
                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                   <div className="flex-1 pr-4">
                     <div className="flex items-center space-x-3 mb-2">
                       <span className="text-sm font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                         {bidding.modality}
                       </span>
                       <span className={cn(
                         "text-xs font-semibold px-2 py-0.5 rounded-md border",
                         bidding.status === 'Em aberto' ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                         bidding.status === 'Homologado' ? "bg-gray-100 text-gray-700 border-gray-200" :
                         "bg-yellow-50 text-yellow-700 border-yellow-200"
                       )}>
                         {bidding.status}
                       </span>
                       <span className="text-sm text-gray-500 font-mono">Proc. {bidding.processNumber}</span>
                     </div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                       {bidding.object}
                     </h3>
                     <div className="flex flex-wrap text-sm text-gray-500 gap-4 mt-3">
                       <div><strong>Publicação:</strong> {new Date(bidding.publicationDate).toLocaleDateString('pt-BR')}</div>
                       <div><strong>Abertura:</strong> {new Date(bidding.openingDate).toLocaleDateString('pt-BR')} às {bidding.openingTime}</div>
                       {bidding.estimatedValue && (
                         <div><strong>Valor Est.:</strong> R$ {bidding.estimatedValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                       )}
                     </div>
                   </div>
                   <div className="mt-4 sm:mt-0 flex items-center justify-end text-blue-600 font-medium text-sm">
                      Detalhes e Editais <ChevronRight className="w-5 h-5 ml-1" />
                   </div>
                 </div>
               </Link>
             </li>
           ))}
           {filteredBiddings.length === 0 && (
             <li className="p-12 text-center text-gray-500 flex flex-col items-center">
               <Gavel className="w-12 h-12 text-gray-300 mb-4" />
               <p>Nenhum processo licitatório encontrado com estes filtros.</p>
             </li>
           )}
         </ul>
      </div>
    </div>
  );
}
