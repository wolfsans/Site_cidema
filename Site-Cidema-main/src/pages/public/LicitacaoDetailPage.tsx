import { Link } from 'react-router-dom';

export function LicitacaoDetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-6">
        <Link to="/licitacoes" className="text-emerald-600 hover:underline text-sm font-medium">
          &larr; Voltar para Licitações
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Detalhes do Processo Licitatório</h1>
      <p className="text-gray-600">A página de detalhes será integrada com banco de dados real nas próximas etapas de implementação.</p>
    </div>
  );
}
