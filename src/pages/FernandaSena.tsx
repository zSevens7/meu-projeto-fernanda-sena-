import HeaderGenerico from '../components/HeaderGenerico';
import Footer from '../components/footer';
import desktopImage from '../assets/img/Banner-Fernanda-Sena.webp';
import mobileImage from '../assets/img/Banner-Fernanda-Sena-510x382.webp';

export default function FernandaSena() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <HeaderGenerico />

      {/* Adicionando padding-top para evitar que o conteúdo fique por baixo do cabeçalho fixo */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center pt-24">
        <h1 className="text-4xl font-bold font-serif text-[#006A4E] mb-2">
          Fernanda Sena
        </h1>
        <p className="text-[#006A4E] text-lg font-semibold mb-8">
          CRM 202512 / RQE 125149
        </p>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 leading-relaxed">
            A Dra. Fernanda Sena é uma médica especializada em Clínica Médica e Geriatria, com um compromisso especial em promover o envelhecimento saudável. Com residência em geriatria pela USP (Universidade de São Paulo), uma das melhores instituições do país, ela dedica-se a oferecer cuidados personalizados e humanizados para homens e mulheres que buscam cuidado integral, qualidade de vida e bem-estar.
          </p>
        </div>

        {/* Imagens responsivas */}
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

      <Footer />
    </div>
  );
}