// src/pages/HomePage.tsx
import HeaderHome from "../components/HeaderHome";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroBanner from "../assets/img/Banner-Fernanda-Sena-2.webp";
import heroBannerMobile from "../assets/img/Banner-Mobile-Fernanda-Sena.webp";
import FernandaDestaque from "../assets/img/Imagem-destaque-Dra-Fernanda-Sena-1.webp";
import FernandaDestaqueMobile from "../assets/img/Imagem-destaque-Dra-Fernanda-Sena-1-218x300.webp";
import AconsultaGeriatrica from "../assets/img/Imagem-destaque-secao-consulta-geriatrica.webp";
import EnvelhecimentoSaudavel from "../assets/img/Imagem-destaque-secao-Envelhecimento-Saudavel.webp";
import Checkup from "../assets/img/Imagem-destaque-secao-check-up.webp"
import Footer from "../components/footer";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dra. Fernanda Sena | Geriatria e Cuidados</title>
        <meta
          name="description"
          content="Página inicial da Dra. Fernanda Sena, especialista em geriatria em Campinas - SP."
        />
      </Helmet>

      {/* Banner para desktop */}
      <div className="relative h-screen hidden md:block bg-cover bg-center"
           style={{ backgroundImage: `url(${heroBanner})` }}>
        <HeaderHome />
        <div className="absolute inset-0 bg-black/5"></div>
        <main className="relative z-10 h-full flex flex-col items-center justify-center p-4">
          <div className="ml-0 lg:ml-[-350px] text-left w-full max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="font-serif text-[#E6D7B4] text-shadow-md">A saúde do futuro</span>
              <br />
              <span className="font-sans font-normal text-3xl md:text-4xl text-white text-shadow-md">começa com cuidados de hoje!</span>
            </h1>
          </div>
        </main>
      </div>

      {/* Banner para mobile - usando imagem mobile específica */}
      <div className="relative h-screen md:hidden bg-cover bg-center"
           style={{ backgroundImage: `url(${heroBannerMobile})` }}>
        <HeaderHome />
        <div className="absolute inset-0 bg-black/30"></div>
        <main className="relative z-10 h-full flex flex-col items-center justify-start p-4 text-center">
          {/* Ajuste a margem superior (mt) para a distância desejada */}
          <div className="mt-60">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight px-2">
              <span className="font-serif text-[#E6D7B4]">A saúde do futuro</span>
              <br />
              <span className="font-sans font-normal text-3xl text-white">começa com cuidados de hoje!</span>
            </h1>
          </div>
        </main>
      </div>

      {/* Seção de Destaque da Dra. Fernanda Sena */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Imagem - Padrão mobile (order-2), Inverte em desktop (md:order-1) */}
            <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
              <img
                src={FernandaDestaque}
                alt="Dra. Fernanda Sena"
                className="hidden md:block rounded-lg shadow-xl w-full max-w-md"
              />
              <img
                src={FernandaDestaqueMobile}
                alt="Dra. Fernanda Sena"
                className="md:hidden rounded-lg shadow-xl w-full max-w-xs mb-6"
              />
            </div>

            {/* Texto - Padrão mobile (order-1), Inverte em desktop (md:order-2) */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#A8C4A2] mb-3">
                Geriatria em Campinas-SP
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2E4E1E] mb-6">
                Fernanda Sena
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                A Dra. Fernanda Sena é uma médica especializada em Clínica Médica e Geriatria, com um
                compromisso especial em promover o envelhecimento saudável. Com residência em geriatria
                pela USP (Universidade de São Paulo), uma das melhores instituições do país, ela dedica-se
                a oferecer cuidados personalizados e humanizados para homens e mulheres que buscam cuidado
                integral, qualidade de vida e bem-estar.
              </p>
              <Link
                to="/fernanda-sena"
                className="inline-block border-2 border-[#E6D7B4] bg-white text-[#2E4E1E] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#E6D7B4] hover:border-[#36454F] hover:text-white"
              >
                Conheça a Dra. Fernanda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Consulta Geriátrica */}
      <section className="relative py-24 px-4">
        {/* Imagem de fundo para desktop */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${AconsultaGeriatrica})` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* Imagem de fundo para mobile */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${AconsultaGeriatrica})` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Conteúdo sobreposto */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-shadow-md">
              Cuidar de cada paciente de forma única, promovendo o bem-estar contínuo.
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-shadow">
              A Dra. Fernanda Sena oferece uma gama completa de serviços focados no envelhecimento saudável, 
              com atenção especial à prevenção e ao acompanhamento contínuo. Todos os serviços são pensados 
              para atender às necessidades específicas de cada paciente, garantido uma abordagem cuidadosa e individualizada.
            </p>
            <Link
              to="/a-consulta-geriatrica"
              className="inline-block border-2 border-[#E6D7B4] bg-white text-[#2E4E1E] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#E6D7B4] hover:border-[#36454F] hover:text-white"
            >
              Mais sobre a Consulta Geriátrica
            </Link>
          </div>
        </div>
      </section>

      {/* Seção: Envelhecimento Saudável */}
      <section className="flex flex-col md:flex-row bg-[#2E4E1E] md:bg-white">
        {/* Texto - Esquerda no desktop, centralizado no mobile */}
        <div className="w-full md:w-2/3 bg-[#2E4E1E] py-20 px-6 md:px-12 flex flex-col justify-center order-2 md:order-1">
          <div className="max-w-lg mx-auto text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#E6D7B4] mb-8">
              O Segredo para uma Vida Longa e Saudável
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              O envelhecimento pode ser uma fase cheia de novas descobertas e experiências, e a Dra. Fernanda Sena acredita que cuidar da saúde desde já é essencial para viver essa fase com plenitude. Com foco na prevenção e em práticas que promovam o bem-estar, ela trabalha para que você possa envelhecer com autonomia, segurança e qualidade de vida.
            </p>
            <div className="text-center md:text-left">
              <Link
                to="/especialidades/envelhecimento-saudavel"
                className="inline-block border-2 border-[#E6D7B4] bg-transparent text-[#E6D7B4] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#E6D7B4] hover:text-[#2E4E1E]"
              >
                Envelhecimento Saudável
              </Link>
            </div>
          </div>
        </div>

        {/* Imagem - Direita no desktop, embaixo no mobile */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 order-1 md:order-2">
          <img
            src={EnvelhecimentoSaudavel}
            alt="Envelhecimento Saudável"
            className="w-full max-w-lg md:max-w-2xl rounded-lg shadow-xl md:-ml-24"
          />
        </div>
      </section>

      {/* Seção: Check-up */}
      <section className="flex flex-col md:flex-row bg-white">
        {/* Imagem - Esquerda no desktop, embaixo no mobile */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 order-2 md:order-1">
          <img
            src={Checkup}
            alt="Check-up geriátrico"
            className="w-full max-w-md rounded-lg shadow-xl md:-mr-16"
          />
        </div>

        {/* Texto - Direita no desktop, primeiro no mobile */}
        <div className="w-full md:w-1/2 bg-[#2E4E1E] py-16 px-6 md:px-12 flex flex-col justify-center order-1 md:order-2">
          <div className="max-w-lg mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#E6D7B4] mb-6">
              Prevenção e Qualidade de Vida
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              O check-up geriátrico preventivo é a melhor maneira de garantir que você está no caminho certo para um envelhecimento saudável. Através de uma avaliação completa e personalizada, são identificados fatores de risco e realizadas orientações para prevenir doenças e promover uma vida mais longa e plena.
            </p>
            <div className="text-center md:text-left">
              <Link
                to="/especialidades/checkup"
                className="inline-block border-2 border-[#E6D7B4] bg-transparent text-[#E6D7B4] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#E6D7B4] hover:text-[#2E4E1E]"
              >
                Mais sobre Check-up
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
}