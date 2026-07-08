import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function SimSisbiPage() {
  const blueDocs = [
    "AUDITORIAS",
    "RELATÓRIOS DE ABATE",
    "RELATÓRIOS DE ANÁLISES LABORATORIAIS",
    "PROCESSOS ADMINISTRATIVOS",
    "REGISTRO DE ESTABELECIMENTOS",
    "RELATÓRIOS MENSAIS"
  ];

  const redDocs = [
    "RELATÓRIOS MENSAIS DE ENVIO AO CIDEMA",
    "PLANO DE TRABALHO",
    "RESOLUÇÕES",
    "CONTRATO DE VÍNCULO LABORATÓRIO DE ANÁLISES",
    "ESTATUTO DO CONSÓRCIO",
    "NOMEAÇÃO COORDENAÇÃO PROGRAMA PROSUASA",
    "SELO CIDEMA",
    "CANAL DE DENÚNCIA PRODUTOS CLANDESTINOS",
    "CONTRATO PLATAFORMA W3AGRO",
    "PROTOCOLO DE INTENÇÕES"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-light text-gray-900 mb-6 uppercase tracking-wider">SIM-SISBI</h1>
        <div className="prose max-w-none text-gray-600 text-sm md:text-base text-justify space-y-4">
          <p>
            O Sistema Brasileiro de Inspeção de Produtos de Origem Animal (SISBI-POA), que faz parte do Sistema Unificado de Atenção à Sanidade Agropecuária (SUASA), padroniza e harmoniza os procedimentos de inspeção de produtos de origem animal para garantir a inocuidade e segurança alimentar. Os Municípios podem solicitar a equivalência dos seus Serviços de Inspeção com o Serviço Coordenador do CIDEMA. Para obtê-la, é necessário comprovar que têm condições de avaliar a qualidade e a inocuidade dos produtos de origem animal com a mesma eficiência do Ministério da Agricultura. Neste sentido, o SISBI-POA é uma importante ferramenta de inclusão, uma vez que respeita as especificações regionais de produtos de origem animal em diferentes escalas de produção e permite a inserção no mercado formal (local, regional e nacional) de uma categoria de produtos que necessita ainda de regulamentação específica. Embora, o ingresso no SISBI-POA é voluntário, os municípios incluídos nesse sistema têm seus serviços de inspeção reconhecidos como equivalentes ao Serviço de Inspeção Federal (SIF).
          </p>
        </div>
      </div>

      <div className="mb-12 space-y-4">
        <a href="#" className="block font-bold text-blue-600 hover:underline uppercase text-sm">LISTA DE ESTABELECIMENTOS ATIVOS NO SIM-CIDEMA</a>
        <a href="#" className="block font-bold text-blue-600 hover:underline text-sm lg:text-base">Leis, Decretos e Portarias dos municípios consorciados.</a>
        <a href="#" className="block font-bold text-blue-600 hover:underline uppercase text-sm lg:text-base">POPs</a>
      </div>

      <hr className="border-gray-200 mb-8" />

      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentos e Formulários</h2>
        
        <div className="bg-white rounded-lg border border-gray-100 divide-y divide-gray-100 shadow-sm flex flex-col mb-8">
          {blueDocs.map((doc, idx) => (
            <a key={idx} href="#" className="flex items-center px-4 py-4 hover:bg-gray-50 transition-colors group">
              <ChevronRight className="w-4 h-4 text-blue-900 mr-3 group-hover:translate-x-1 transition-transform" />
              <span className="font-bold text-blue-900 text-sm tracking-wide">{doc}</span>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-100 divide-y divide-gray-100 shadow-sm flex flex-col">
          {redDocs.map((doc, idx) => (
            <a key={idx} href="#" className="flex items-center px-4 py-4 hover:bg-gray-50 transition-colors group">
              <ChevronRight className="w-4 h-4 text-red-700 mr-3 group-hover:translate-x-1 transition-transform" />
              <span className="font-bold text-red-700 text-sm tracking-wide">{doc}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
