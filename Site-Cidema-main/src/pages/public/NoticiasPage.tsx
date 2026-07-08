import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockNews, mockCategories } from '../../mockData';
import { Search } from 'lucide-react';

export function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          news.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? news.categoryId === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notícias</h1>
        <p className="text-gray-600">Acompanhe as últimas ações, projetos e informativos do consórcio.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <Search className="h-5 w-5 text-gray-400" />
           </div>
           <input
             type="text"
             className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm"
             placeholder="Buscar notícias..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
        </div>
        <div className="w-full md:w-64">
           <select
             className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white"
             value={categoryFilter}
             onChange={(e) => setCategoryFilter(e.target.value)}
           >
             <option value="">Todas as categorias</option>
             {mockCategories.map(cat => (
               <option key={cat.id} value={cat.id}>{cat.name}</option>
             ))}
           </select>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map(news => {
           const category = mockCategories.find(c => c.id === news.categoryId);
           return (
             <article key={news.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
               {news.imageUrl && (
                 <Link to={`/noticias/${news.id}`} className="aspect-video w-full overflow-hidden block">
                   <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </Link>
               )}
               <div className="p-6 flex flex-col flex-1">
                 <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-md">{category?.name || 'Geral'}</span>
                    <span className="text-gray-500">{new Date(news.publishedAt).toLocaleDateString('pt-BR')}</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                   <Link to={`/noticias/${news.id}`}>
                     {news.title}
                   </Link>
                 </h3>
                 <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                   {news.summary}
                 </p>
                 <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link to={`/noticias/${news.id}`} className="text-emerald-600 font-medium text-sm hover:underline">
                      Continuar lendo &rarr;
                    </Link>
                 </div>
               </div>
             </article>
           );
        })}
      </div>
      {filteredNews.length === 0 && (
         <div className="text-center py-12 text-gray-500 border border-gray-200 rounded-xl bg-gray-50">
            <p>Nenhuma notícia encontrada com os filtros selecionados.</p>
         </div>
      )}
    </div>
  );
}
