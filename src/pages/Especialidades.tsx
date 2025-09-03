
import HeaderGenerico from '../components/HeaderGenerico';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import EspecialidadesImg from '../assets/img/Especialidades.webp'; // Certifique-se de que o caminho da imagem está correto

export default function Especialidades() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <HeaderGenerico />

      <main className="container mx-auto px-4 py-30 flex-grow">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Coluna da Imagem */}
          <div className="lg:w-1/2 max-w-64 flex justify-center lg:max-w-xs sm:max-w-xs mx-auto">
            <img 
              src={EspecialidadesImg} 
              alt="Dra. Fernanda Sena especializada em Geriatria" 
              className="rounded-lg shadow-lg w-full" 
            />
          </div>

          {/* Coluna do Conteúdo e Botões */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-serif text-[#E6D7B4] mb-4">
              Especialidades em Geriatria
            </h1>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold text-[#2E4E1E] mb-6">
              Cuidado Completo para o seu Envelhecimento
            </h2>
            <p className="text-[#36454F] mb-8 leading-relaxed text-lg">
              Na clínica da Dra. Fernanda Sena, cada etapa da sua vida é valorizada com um cuidado dedicado e especializado. Nossas abordagens são desenhadas para atender às necessidades únicas de cada paciente, promovendo saúde e bem-estar em todas as fases da vida adulta.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link 
                to="/especialidades/checkup"
                className="inline-block border-2 border-[#E6D7B4] bg-[#2E4E1E] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#E6D7B4] hover:border-[#36454F] hover:text-[#2E4E1E]"
              >
                Check-up 
              </Link>
              <Link
                to="/especialidades/envelhecimento-saudavel"
                className="inline-block border-2 border-[#E6D7B4] bg-[#2E4E1E] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#E6D7B4] hover:border-[#36454F] hover:text-[#2E4E1E]"
              >
                Envelhecimento Saudável
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}