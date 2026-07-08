import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Gavel, FileSignature, Map } from 'lucide-react';
import { mockNews, mockBiddings } from '../../mockData';

export function HomePage() {
  const latestNews = mockNews.slice(0, 3);
  const openBiddings = mockBiddings.filter(b => b.status === 'Em aberto').slice(0, 3);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Banner */}
      <section className="relative bg-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
             alt="CIDEMA Region" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-950/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
              Desenvolvimento regional sustentável e integrado
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              O CIDEMA coordena esforços entre municípios para promover crescimento econômico, responsabilidade ambiental e saúde pública.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Link to="/licitacoes" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors">
                 Pregões e Licitações <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="https://transparencia.betha.cloud/#/UCTn1DPxb900hAT1KTpeaQ==" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors">
                 Portal da Transparência
              </a>
              <Link to="/acesso-informacao" className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors border border-blue-700">
                 Acesso à Informação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <Link to="/licitacoes" className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
               <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Gavel className="w-6 h-6" />
               </div>
               <span className="font-semibold text-gray-900">Licitações</span>
             </Link>
             <Link to="/contratos" className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
               <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <FileSignature className="w-6 h-6" />
               </div>
               <span className="font-semibold text-gray-900">Contratos</span>
             </Link>
             <a href="https://transparencia.betha.cloud/#/UCTn1DPxb900hAT1KTpeaQ==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
               <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <FileText className="w-6 h-6" />
               </div>
               <span className="font-semibold text-gray-900">Portal da Transparência</span>
             </a>
             <Link to="/municipios" className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
               <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <Map className="w-6 h-6" />
               </div>
               <span className="font-semibold text-gray-900">Municípios Consorciados</span>
             </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 flex-1">
        
        {/* Latest News */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Últimas Notícias</h2>
            <Link to="/noticias" className="text-emerald-600 font-medium hover:underline flex items-center text-sm">
              Ver todas <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-8">
            {latestNews.map(news => (
               <article key={news.id} className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
                  {news.imageUrl && (
                    <div className="w-full sm:w-1/3 aspect-video sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                      <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Institucional</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                      <Link to={`/noticias/${news.id}`}>{news.title}</Link>
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {news.summary}
                    </p>
                    <span className="text-sm text-gray-500 mt-auto">{new Date(news.publishedAt).toLocaleDateString('pt-BR')}</span>
                  </div>
               </article>
            ))}
          </div>
        </div>

        {/* Info sidebar */}
        <div className="space-y-8">
           <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
             <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
               <Gavel className="w-5 h-5 mr-2 text-emerald-600" /> Licitações em Aberto
             </h2>
             <div className="space-y-4">
               {openBiddings.map(bidding => (
                 <Link to={`/licitacoes/${bidding.id}`} key={bidding.id} className="block group">
                   <div className="border border-gray-200 bg-white p-4 rounded-xl hover:border-emerald-500 transition-colors">
                     <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{bidding.modality}</span>
                       <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">Abertura: {new Date(bidding.openingDate).toLocaleDateString('pt-BR')}</span>
                     </div>
                     <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-emerald-700 line-clamp-2">{bidding.object}</h4>
                     <p className="text-xs text-gray-500">Processo: {bidding.processNumber}</p>
                   </div>
                 </Link>
               ))}
             </div>
             <Link to="/licitacoes" className="mt-6 block text-center w-full bg-white border border-gray-300 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors">
               Acessar todas as licitações
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
