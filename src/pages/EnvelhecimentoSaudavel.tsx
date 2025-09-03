
import HeaderGenerico from '../components/HeaderGenerico';
import Footer from '../components/footer';

export default function EnvelhecimentoSaudavel() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
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
