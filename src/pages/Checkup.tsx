
import { Helmet } from 'react-helmet-async';
import HeaderGenerico from '../components/HeaderGenerico';
import Footer from '../components/footer';

export default function Checkup() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Helmet>
        <title>Check-up Geriátrico - Dra. Fernanda Sena</title>
        <meta name="description" content="Saiba mais sobre o check-up geriátrico com a Dra. Fernanda Sena. Um acompanhamento completo e preventivo para a sua saúde." />
        <meta property="og:title" content="Check-up Geriátrico - Dra. Fernanda Sena" />
        <meta property="og:description" content="Saiba mais sobre o check-up geriátrico com a Dra. Fernanda Sena. Um acompanhamento completo e preventivo para a sua saúde." />
        <meta property="og:type" content="website" />
        {/* Adicione uma URL de imagem aqui para as redes sociais, por exemplo: */}
        {/* <meta property="og:image" content="https://seusite.com/imagem-checkup.jpg" /> */}
        {/* <meta property="og:url" content="https://seusite.com/checkup-geriatrico" /> */}
      </Helmet>

      {/* O componente HeaderGenerico é importado e usado aqui */}
      <HeaderGenerico />

      {/* Container principal da página com espaçamento e layout flexível */}
      <main className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[#2E4E1E] mb-4">
            Check-up Geriátrico
          </h1>
          <p className="text-lg text-[#36454F]">
            Esta é a página de check-up. O conteúdo detalhado será adicionado aqui em breve. 
            É o espaço ideal para descrever a importância de um acompanhamento preventivo e os benefícios para a saúde.
          </p>
        </div>
      </main>

      {/* O componente Footer é importado e usado aqui */}
      <Footer />
    </div>
  );
}
