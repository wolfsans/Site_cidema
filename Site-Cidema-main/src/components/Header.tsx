import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X, MapPin } from 'lucide-react';
import { cn } from '../utils';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'O Consórcio', href: '/institucional' },
    { name: 'Municípios', href: '/municipios' },
    { name: 'Programas', href: '/programas' },
    { name: 'SIM-SISBI', href: '/sim-sisbi' },
    { name: 'Licitações', href: '/licitacoes' },
    { name: 'Contratos e Atas', href: '/contratos' },
    { name: 'Notícias', href: '/noticias' },
    { name: 'Transparência', href: 'https://transparencia.betha.cloud/#/UCTn1DPxb900hAT1KTpeaQ==' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1"/> Sede: Chapecó, SC</span>
            <span>(49) 3323-0000</span>
          </div>
          <div className="flex items-center space-x-4">
             <a href="https://transparencia.betha.cloud/#/UCTn1DPxb900hAT1KTpeaQ==" target="_blank" rel="noopener noreferrer" className="hover:underline">Portal da Transparência</a>
             <Link to="/login" className="hover:underline bg-blue-800 px-2 py-0.5 rounded">Área Restrita</Link>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <Logo className="w-14 h-14 shrink-0 transition-transform group-hover:scale-105" />
              <div className="hidden sm:block">
                <div className="font-black text-3xl text-slate-800 leading-none tracking-tighter uppercase">CIDEMA</div>
                <div className="text-[0.55rem] text-slate-600 max-w-[280px] leading-tight uppercase tracking-wider font-semibold mt-1">
                  Consórcio Intermunicipal de Desenvolvimento Econômico, Social e do Meio Ambiente
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((link) => (
              link.href.startsWith('http') ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === link.href 
                      ? "text-emerald-600 bg-emerald-50" 
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((link) => (
              link.href.startsWith('http') ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
