import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, FileText, FileSignature, Settings, Users, ArrowLeft, LogOut, LayoutDashboard } from 'lucide-react';
import { cn } from '../utils';

export function AdminLayout() {
  const location = useLocation();

  const menu = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Notícias', href: '/admin/noticias', icon: FileText },
    { name: 'Licitações', href: '/admin/licitacoes', icon: FileSignature },
    { name: 'Contratos', href: '/admin/contratos', icon: FileSignature },
    { name: 'Páginas', href: '/admin/paginas', icon: FileText },
    { name: 'Usuários', href: '/admin/usuarios', icon: Users },
    { name: 'Configurações', href: '/admin/configuracoes', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-white flex flex-col">
        <div className="p-4 h-16 flex items-center justify-center border-b border-blue-900 font-bold text-lg">
          CIDEMA Admin
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {menu.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.href || (location.pathname.startsWith(item.href) && item.href !== '/admin')
                  ? "bg-emerald-600 text-white"
                  : "text-gray-300 hover:bg-blue-900 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-blue-900 space-y-2">
           <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-900 rounded-lg">
              <ArrowLeft className="w-4 h-4 mr-3" />
              Voltar ao Site
           </Link>
           <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-red-900/50 rounded-lg text-left transition-colors">
              <LogOut className="w-4 h-4 mr-3" />
              Sair
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shadow-sm z-10">
           <div className="text-xl font-medium text-gray-800">
             {menu.find(m => location.pathname === m.href || (location.pathname.startsWith(m.href) && m.href !== '/admin'))?.name || 'Painel de Controle'}
           </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
           <Outlet />
        </div>
      </main>
    </div>
  );
}
