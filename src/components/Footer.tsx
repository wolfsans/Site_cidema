import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-8 mt-auto">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-12 h-12 shrink-0" darkColor="#ffffff" lightColor="#cbd5e1" />
              <div>
                <div className="font-black text-2xl text-white leading-none tracking-tighter uppercase">CIDEMA</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
               Consórcio Intermunicipal de Desenvolvimento Econômico, Social e do Meio Ambiente. 
               Trabalhando pela integração e desenvolvimento da nossa região.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-emerald-400">Acesso Rápido</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/licitacoes" className="hover:text-white">Licitações</Link></li>
              <li><Link to="/contratos" className="hover:text-white">Contratos e Atas</Link></li>
              <li><a href="https://transparencia.betha.cloud/#/UCTn1DPxb900hAT1KTpeaQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white">Portal da Transparência</a></li>
              <li><Link to="/programas" className="hover:text-white">Programas e Projetos</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold text-lg mb-4 text-emerald-400">Institucional</h3>
             <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/institucional" className="hover:text-white">O Consórcio</Link></li>
              <li><Link to="/municipios" className="hover:text-white">Municípios Consorciados</Link></li>
              <li><Link to="/noticias" className="hover:text-white">Notícias</Link></li>
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold text-lg mb-4 text-emerald-400">Contato</h3>
             <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start text-left">
                  <MapPin className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
                  <span>Av. Getúlio Vargas, 123N, Centro<br/>Chapecó - SC, 89801-000</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
                  <span>(49) 3323-0000</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
                  <span>contato@cidema.sc.gov.br</span>
                </li>
             </ul>
          </div>
       </div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CIDEMA. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <Link to="/privacidade" className="hover:text-white">Política de Privacidade</Link>
             <Link to="/termos" className="hover:text-white">Termos de Uso</Link>
          </div>
       </div>
    </footer>
  );
}
