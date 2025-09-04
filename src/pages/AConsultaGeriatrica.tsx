
import { Helmet } from 'react-helmet-async';
import HeaderGenerico from '../components/HeaderGenerico';
import Footer from '../components/footer';

import Velhos from '../assets/img/Imagem-interna-consulta-geriatrica.webp'
import { Link } from 'react-router-dom';
import { ClipboardList, Stethoscope, Handshake, CalendarCheck, Book, Users } from 'lucide-react';

import novaImagemLateral from '../assets/img/IMG_28433.jpg';

export default function AConsultaGeriatrica() {
  const cards = [
    {
      icon: <ClipboardList size={48} className="text-[#2E4E1E]" />,
      number: '01',
      title: 'Liste Seus Sintomas e Preocupações',
      description: 'Antes da consulta, anote quaisquer sintomas que tenha notado recentemente, mesmo que pareçam pequenos. Inclua informações como quando começaram, com que frequência ocorrem e se algo os agrava ou alivia. Isso ajuda a Dra. Fernanda a ter uma visão clara do seu estado de saúde.',
      bgColor: 'bg-[#2E4E1E]', // dark-green
      textColor: 'text-white'
    },
    {
      icon: <Stethoscope size={48} className="text-[#2E4E1E]" />,
      number: '02',
      title: 'Leve Seu Histórico Médico Completo',
      description: 'Reúna todas as informações sobre sua saúde anterior, incluindo diagnósticos, cirurgias, tratamentos e doenças crônicas. Se estiver utilizando medicamentos, suplementos ou remédios naturais, leve uma lista completa com as dosagens e horários de uso.',
      bgColor: 'bg-[#A8C4A2]', // soft-green
      textColor: 'text-[#2E4E1E]' // dark-green
    },
    {
      icon: <Handshake size={48} className="text-[#2E4E1E]" />,
      number: '03',
      title: 'Faça uma Relação de Seus Hábitos Diários',
      description: 'Anotar seus hábitos diários, como alimentação, atividade física, qualidade do sono e consumo de bebidas alcoólicas ou cigarro, é essencial para que a Dra. Fernanda possa criar um plano de cuidados personalizado e adequado ao seu estilo de vida.',
      bgColor: 'bg-[#E6D7B4]', // light-gold
      textColor: 'text-[#2E4E1E]' // dark-green
    },
    {
      icon: <Book size={48} className="text-[#2E4E1E]" />,
      number: '04',
      title: 'Organize Suas Dúvidas',
      description: 'É comum ter dúvidas sobre o processo de envelhecimento ou sobre como melhorar sua saúde. Anote todas as perguntas que você gostaria de fazer durante a consulta. Isso pode incluir dúvidas sobre prevenção de doenças, alimentação, exercícios, ou qualquer outro aspecto da sua saúde.',
      bgColor: 'bg-[#2E4E1E]', // dark-green
      textColor: 'text-white'
    },
    {
      icon: <Users size={48} className="text-[#2E4E1E]" />,
      number: '05',
      title: 'Leve um Acompanhante, se Necessário',
      description: 'Se você se sentir mais confortável ou precisar de ajuda para lembrar todas as orientações, considere levar um familiar ou amigo de confiança. Eles podem ajudar a relembrar os detalhes da consulta e dar suporte emocional.',
      bgColor: 'bg-[#A8C4A2]', // soft-green
      textColor: 'text-[#2E4E1E]' // dark-green
    },
    {
      icon: <CalendarCheck size={48} className="text-[#2E4E1E]" />,
      number: '06',
      title: 'Documentos e Exames Recentes',
      description: 'Não se esqueça de levar todos os documentos médicos recentes, como resultados de exames de sangue, imagens, ou laudos de outros profissionais. Isso facilita a avaliação e evita a necessidade de novos exames desnecessários.',
      bgColor: 'bg-[#E6D7B4]', // light-gold
      textColor: 'text-[#2E4E1E]' // dark-green
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Helmet>
        <title>A Consulta Geriátrica - Dra. Fernanda Sena</title>
        <meta name="description" content="Saiba como se preparar para a consulta geriátrica com a Dra. Fernanda Sena e conheça a importância de um acompanhamento completo para a sua saúde." />
        <meta property="og:title" content="A Consulta Geriátrica - Dra. Fernanda Sena" />
        <meta property="og:description" content="Saiba como se preparar para a consulta geriátrica com a Dra. Fernanda Sena e conheça a importância de um acompanhamento completo para a sua saúde." />
        <meta property="og:type" content="website" />
        {/* Você pode adicionar uma URL de imagem aqui para as redes sociais, por exemplo: */}
        {/* <meta property="og:image" content="https://seusite.com/imagem-consulta.jpg" /> */}
        {/* <meta property="og:url" content="https://seusite.com/a-consulta-geriatrica" /> */}
      </Helmet>
      
      <HeaderGenerico />

      <main className="container mx-auto px-4 pt-32 pb-16 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card Principal de Conteúdo */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="font-serif text-[#E6D7B4]">Consulta Geriátrica em Campinas:</span>
              <br />
              <span className="font-sans font-normal text-3xl md:text-4xl text-[#2E4E1E]">Cuidado Especializado para um Envelhecimento Saudável</span>
            </h1>

            <p className="text-[#36454F] mb-4">
              A consulta geriátrica é um momento fundamental para quem está na fase dos 50 anos ou mais e deseja manter a qualidade de vida e o bem-estar à medida que o tempo passa. Com foco em um atendimento humanizado e individualizado, a Dra. Fernanda Sena, especialista em Clínica Médica e Geriatria, oferece um acompanhamento completo para quem busca envelhecer com saúde e vitalidade.
            </p>
            
            <img
              src={Velhos}
              alt="Casal de idosos felizes em uma consulta."
              className="w-full h-auto rounded-lg shadow-md object-cover mb-8"
            />

            {/* Nova Seção: O que é a Consulta Geriátrica? */}
            <div className="mt-8">
              <h2 className="text-3xl font-serif text-[#2E4E1E] mb-4">O que é a Consulta Geriátrica?</h2>
              <p className="text-[#36454F] mb-6">
                A consulta geriátrica é um tipo de atendimento médico especializado, voltado para as necessidades únicas dos pacientes mais maduros. Nesse encontro, a Dra. Fernanda avalia a saúde de maneira integral, levando em conta tanto o físico quanto o emocional. Através de uma escuta atenta, ela identifica possíveis riscos, condições crônicas e auxilia na prevenção de doenças que podem impactar o processo natural de envelhecimento.
              </p>

              <h3 className="text-xl font-semibold font-sans text-[#2E4E1E] mb-2">Um Atendimento Humanizado e Personalizado</h3>
              <p className="text-[#36454F] mb-6">
                Cada paciente é único, e a consulta geriátrica com a Dra. Fernanda Sena é pensada para oferecer um cuidado individualizado. Ela trabalha em parceria com o paciente para desenvolver um plano de cuidado que inclua orientações sobre alimentação, exercícios físicos, prevenção de quedas e medicamentos, além de tratar com delicadeza as questões emocionais e sociais que podem surgir nessa fase da vida.
              </p>
              
              <h3 className="text-xl font-semibold font-sans text-[#2E4E1E] mb-2">A Importância da Prevenção na Terceira Idade</h3>
              <p className="text-[#36454F] mb-6">
                Um dos principais focos da consulta geriátrica é a prevenção. O envelhecimento saudável depende de hábitos diários e cuidados específicos, que podem evitar o surgimento de doenças como hipertensão, diabetes e problemas osteomusculares. Com uma abordagem preventiva, a Dra. Fernanda Sena auxilia seus pacientes a viverem essa fase da vida com mais qualidade, mantendo a independência e a autonomia.
              </p>

              <h3 className="text-xl font-semibold font-sans text-[#2E4E1E] mb-2">Quando Devo Procurar uma Consulta Geriátrica?</h3>
              <p className="text-[#36454F] mb-6">
                É recomendável iniciar o acompanhamento geriátrico a partir dos 50 anos, mesmo para quem está em plena saúde. Essa é uma forma de monitorar o bem-estar de maneira preventiva, identificando possíveis alterações antes que elas causem maiores transtornos. A Dra. Fernanda Sena está preparada para oferecer suporte a quem busca viver a maturidade de forma ativa e saudável.
              </p>
            </div>
          </div>


          {/* Card Lateral - Barra de Informações */}
          <aside className="w-full lg:w-80">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6">
              <h2 className="text-xl font-bold font-serif text-[#2E4E1E] mb-2">Conheça a Dra. Fernanda Sena</h2>
              <p className="text-sm text-[#36454F] mb-4">
                Descubra a filosofia de trabalho de uma médica que une o rigor científico da geriatria com um cuidado profundamente humanizado.
              </p>
              <Link
                to="/fernanda-sena"
                className="inline-block border-2 border-[#E6D7B4] bg-white text-[#2E4E1E] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#E6D7B4] hover:border-[#36454F] hover:text-white text-center w-full mb-4"
              >
                Leia a Biografia Completa
              </Link>
              <img
                src={novaImagemLateral}
                alt="Dra. Fernanda Sena apontando"
                className="w-full h-auto object-cover"
              />
            </div>
          </aside>

        </div>

        {/* Seção com os Cards de Dicas */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2E4E1E] mb-4">Como Se Preparar para a Consulta Geriátrica</h2>
            <p className="text-[#36454F] mb-8 max-w-2xl">
              Preparar-se adequadamente para uma consulta geriátrica pode ajudar a aproveitar melhor o tempo com o médico e garantir que todas as suas necessidades sejam atendidas. Veja algumas dicas para chegar bem preparado ao encontro com a Dra. Fernanda Sena:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg ${card.bgColor} ${card.textColor}`}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  {card.icon}
                </div>
                <p className="font-sans text-xl font-bold mb-2">{card.number}</p>
                <h3 className="font-serif text-xl mb-4">{card.title}</h3>
                <p className="font-sans text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4">
          <p className="mt-8 text-[#36454F] text-base lg:text-xl text-center max-w-4xl mx-auto">
            Seguindo essas dicas, você estará bem preparado para a sua consulta geriátrica com a Dra. Fernanda Sena, garantindo um atendimento mais completo e eficaz.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}