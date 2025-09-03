
import { Helmet } from 'react-helmet-async';
import HeaderGenerico from '../components/HeaderGenerico';
import Footer from '../components/footer';

export default function EnvelhecimentoSaudavel() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Helmet>
        <title>Envelhecimento Saudável - Dra. Fernanda Sena</title>
        <meta name="description" content="Descubra a importância do envelhecimento saudável com a Dra. Fernanda Sena. Oferecemos um acompanhamento especializado para a maturidade." />
        <meta property="og:title" content="Envelhecimento Saudável - Dra. Fernanda Sena" />
        <meta property="og:description" content="Descubra a importância do envelhecimento saudável com a Dra. Fernanda Sena. Oferecemos um acompanhamento especializado para a maturidade." />
        <meta property="og:type" content="website" />
        {/* Você pode adicionar uma URL de imagem aqui para as redes sociais, por exemplo: */}
        {/* <meta property="og:image" content="https://seusite.com/imagem-envelhecimento-saudavel.jpg" /> */}
        {/* <meta property="og:url" content="https://seusite.com/envelhecimento-saudavel" /> */}
      </Helmet>

      {/* O componente HeaderGenerico é importado e usado aqui */}
      <HeaderGenerico />

      {/* Container principal da página com espaçamento e layout flexível */}
      <main className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[#2E4E1E] mb-4">
            Envelhecimento Saudável
          </h1>
          <p className="text-lg text-[#36454F]">
            Esta é a página de envelhecimento saudável. O conteúdo detalhado será adicionado aqui em breve. 
            É o espaço ideal para descrever o processo de envelhecimento com saúde e bem-estar.
          </p>
        </div>
      </main>

      {/* O componente Footer é importado e usado aqui */}
      <Footer />
    </div>
  );
}