import { Helmet } from 'react-helmet-async';
import HeaderGenerico from '../components/HeaderGenerico';
import Footer from '../components/footer';
import desktopImage from '../assets/img/Banner-Fernanda-Sena.webp';
import mobileImage from '../assets/img/Banner-Fernanda-Sena-510x382.webp';

// Importe as logos aqui
import uspLogo from '../assets/logo/usp.png';
import unicampLogo from '../assets/logo/unicamp.png';
import supremaLogo from '../assets/logo/suprema.png';
import madreLogo from '../assets/logo/madre.png';

import abordagemImage from '../assets/img/imagem28493.jpg';
import atuacaoImage from '../assets/img/imagem28373.jpg';

export default function FernandaSena() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Helmet>
        <title>Dra. Fernanda Sena - Clínica Médica e Geriatria</title>
        <meta name="description" content="Conheça a Dra. Fernanda Sena, médica especialista em Clínica Médica e Geriatria, dedicada a um envelhecimento saudável e humanizado." />
        <meta property="og:title" content="Dra. Fernanda Sena - Clínica Médica e Geriatria" />
        <meta property="og:description" content="Conheça a Dra. Fernanda Sena, médica especialista em Clínica Médica e Geriatria, dedicada a um envelhecimento saudável e humanizado." />
        <meta property="og:type" content="website" />
        {/* Adicionei a tag og:image para exibir a imagem principal em compartilhamentos */}
        <meta property="og:image" content={desktopImage} />
        <meta property="og:url" content="https://seusite.com/fernanda-sena" />
      </Helmet>
      
      <HeaderGenerico />

      {/* Seção 1: Informações de Perfil e Imagem de Destaque */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center pt-24">
        {/* Títulos e Credenciais */}
        <h1 className="text-4xl font-bold font-serif text-[#006A4E] mb-2">
          Fernanda Sena
        </h1>
        <p className="text-[#006A4E] text-lg font-semibold mb-8">
          CRM 202512 / RQE 125149
        </p>
        
        {/* Parágrafo de Descrição */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 leading-relaxed">
            A Dra. Fernanda Sena é uma médica especializada em Clínica Médica e Geriatria, com um compromisso especial em promover o envelhecimento saudável. Com residência em geriatria pela USP (Universidade de São Paulo), uma das melhores instituições do país, ela dedica-se a oferecer cuidados personalizados e humanizados para homens e mulheres que buscam cuidado integral, qualidade de vida e bem-estar.
          </p>
        </div>

        {/* Imagem de Destaque */}
        <div className="w-full max-w-5xl">
          <img 
            src={desktopImage} 
            alt="Dra. Fernanda Sena" 
            className="hidden md:block w-full h-auto object-cover" 
          />
          <img 
            src={mobileImage} 
            alt="Dra. Fernanda Sena" 
            className="block md:hidden w-full h-auto object-cover" 
          />
        </div>
      </main>


      {/* --- Seção 2: Formação e Credenciais --- */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#006A4E] mb-12">Minha Trajetória</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Graduação */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                <img src={supremaLogo} alt="Logo da Faculdade Suprema" className="w-full h-auto rounded-xl object-contain border border-gray-200 p-2" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Graduação</h3>
              <p className="text-sm text-gray-600 mt-1">Faculdade Ciências Médicas e da Saúde de Juiz de Fora.</p>
            </div>

            {/* Card 2: Residência em Clínica Médica */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                <img src={unicampLogo} alt="Logo da UNICAMP" className="w-full h-auto rounded-xl object-contain border border-gray-200 p-2" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Residência em Clínica Médica</h3>
              <p className="text-sm text-gray-600 mt-1">Hospital de Clínicas da UNICAMP.</p>
            </div>

            {/* Card 3: Residência em Geriatria */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                <img src={uspLogo} alt="Logo da USP" className="w-full h-auto rounded-xl object-contain border border-gray-200 p-2" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Residência em Geriatria</h3>
              <p className="text-sm text-gray-600 mt-1">Hospital das Clínicas da USP.</p>
            </div>

            {/* Card 4: Coordenadora */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                <img src={madreLogo} alt="Logo do Hospital Madre Theodora" className="w-full h-auto rounded-xl object-contain border border-gray-200 p-2" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Coordenadora</h3>
              <p className="text-sm text-gray-600 mt-1">Hospital e Maternidade Madre Theodora.</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* --- Seção 3: Avaliação Integral e Cuidado Humanizado --- */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#006A4E] mb-12">Avaliação Integral e Cuidado Humanizado</h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Imagem (Coluna 1) */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img 
                src={abordagemImage} 
                alt="Dra. Fernanda Sena em uma pose acolhedora" 
                className="w-full max-w-sm rounded-2xl shadow-xl" 
              />
            </div>

            {/* Texto (Coluna 2) */}
            <div className="w-full md:w-1/2">
              {/* Descrição */}
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                O diferencial da minha consulta é a <strong>avaliação do paciente por inteiro</strong>, conhecendo o paciente além das doenças que ele possui. É uma abordagem que busca entender o paciente como um todo, englobando aspectos sociais, funcionais, de saúde mental, nutricionais e muitos outros.
              </p>

              {/* Valores em destaque */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#006A4E] mb-4">Meus Valores Inegociáveis</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Respeito</strong></li>
                  <li><strong>Cordialidade e empatia</strong></li>
                  <li><strong>Transparência e honestidade</strong> comigo mesma e com os outros.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* --- Seção 4: Principais Áreas de Atuação (Melhorada) --- */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#006A4E] mb-12">Principais Áreas de Atuação</h2>

          {/* Layout com imagem na direita */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Imagem (Coluna 1, na direita em telas grandes) */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img 
                src={atuacaoImage} 
                alt="Dra. Fernanda Sena em pose pensativa" 
                className="w-full max-w-sm rounded-2xl shadow-xl" 
              />
            </div>

            {/* Texto (Coluna 2, na esquerda em telas grandes) - AGORA DENTRO DE UM CARD */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Sendo especialista em pessoas idosas, avalio e atuo nas principais condições relacionadas à idade, promovendo um envelhecimento saudável e com mais qualidade de vida.
                </p>
                
                <ul className="list-none space-y-3 text-gray-700 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-2xl text-[#006A4E]">✓</span>
                    Quedas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl text-[#006A4E]">✓</span>
                    Fragilidade
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl text-[#006A4E]">✓</span>
                    Perda de funcionalidade
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl text-[#006A4E]">✓</span>
                    Perda de Peso e Sarcopenia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl text-[#006A4E]">✓</span>
                    Perda cognitiva
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}