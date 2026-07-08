import { Link } from 'react-router-dom';

export function AcessoInformacaoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Acesso à Informação</h1>
        <p className="text-gray-600 text-lg">
          Esta página está em estruturação. Em breve, disponibilizaremos mais informações e documentos pertinentes ao Acesso à Informação.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
         <p className="text-gray-500 mb-6">Estamos trabalhando para trazer a melhor experiência de transparência ativa e passiva.</p>
         <Link to="/" className="text-emerald-600 hover:underline font-medium">Voltar para a página inicial</Link>
      </div>
    </div>
  );
}
