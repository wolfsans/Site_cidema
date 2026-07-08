import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCategories, mockBiddings } from '../../mockData';
import { LayoutDashboard, LogIn, Lock } from 'lucide-react';
import { Logo } from '../../components/Logo';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app we'd validate credentials. Here we just redirect.
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
           <Logo className="w-20 h-20" />
        </div>
        <h2 className="mt-2 text-center text-3xl font-black text-slate-800 tracking-tighter uppercase">
          CIDEMA Admin
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
           Painel de Gerenciamento Institucional
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 sm:rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
              >
                E-mail Institucional
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="admin@cidema.sc.gov.br"
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor="remember-me" 
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lembrar de mim
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors"
              >
                <LogIn className="w-5 h-5 mr-2" /> Entrar no sistema
              </button>
            </div>
            
            <div className="mt-4 flex bg-gray-50 p-4 rounded text-sm text-gray-500 align-center border border-gray-100 items-start">
               <Lock className="w-4 h-4 text-gray-400 mr-2 mt-0.5 shrink-0" />
               <p>Acesso restrito aos servidores e colaboradores autorizados do consórcio.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
