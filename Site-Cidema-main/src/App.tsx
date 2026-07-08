import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { HomePage } from './pages/public/HomePage';
import { LicitacoesPage } from './pages/public/LicitacoesPage';
import { LicitacaoDetailPage } from './pages/public/LicitacaoDetailPage';
import { NoticiasPage } from './pages/public/NoticiasPage';
import { SimSisbiPage } from './pages/public/SimSisbiPage';
import { AcessoInformacaoPage } from './pages/public/AcessoInformacaoPage';
import { LoginPage } from './pages/admin/LoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminLicitacoes } from './pages/admin/AdminLicitacoes';
import { useAuth } from './hooks/useAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="licitacoes" element={<LicitacoesPage />} />
          <Route path="licitacoes/:id" element={<LicitacaoDetailPage />} />
          <Route path="noticias" element={<NoticiasPage />} />
          <Route path="noticias/:id" element={<div className="p-10 flex-1"><h2>Notícia Detalhe (Em Breve)</h2></div>} />
          <Route path="sim-sisbi" element={<SimSisbiPage />} />
          <Route path="acesso-informacao" element={<AcessoInformacaoPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contratos" element={<div className="p-10 flex-1"><h2>Contratos e Atas (Em Breve)</h2></div>} />
          <Route path="transparencia" element={<div className="p-10 flex-1"><h2>Portal da Transparência (Em Breve)</h2></div>} />
          <Route path="institucional" element={<div className="p-10 flex-1"><h2>Institucional (Em Breve)</h2></div>} />
          <Route path="municipios" element={<div className="p-10 flex-1"><h2>Municípios (Em Breve)</h2></div>} />
          <Route path="programas" element={<div className="p-10 flex-1"><h2>Programas e Projetos (Em Breve)</h2></div>} />
        </Route>

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="noticias" element={<div className="p-6">Gestão de Notícias (Em breve)</div>} />
          <Route path="licitacoes" element={<AdminLicitacoes />} />
          <Route path="contratos" element={<div className="p-6">Gestão de Contratos (Em breve)</div>} />
          <Route path="paginas" element={<div className="p-6">Gestão de Páginas (Em breve)</div>} />
          <Route path="usuarios" element={<div className="p-6">Gestão de Usuários (Em breve)</div>} />
          <Route path="configuracoes" element={<div className="p-6">Configurações (Em breve)</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
