import logo from "../assets/img/Logotipo-rodape-Fernanda-Sena.png";

export default function Footer() {
  return (
    <footer className="bg-[#014421] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-serif font-bold text-[#E6D7B4] mb-4">Entre em Contato</h3>
            
            <div className="space-y-3">
              {/* Ícone e link de endereço */}
              <div className="flex items-start">
                <a 
                  href="https://www.google.com/maps/place/0. Dr. Emílio Ribas, 1058 - Cambuí, Campinas - SP, 13025-141"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Localização no Google Maps"
                  className="flex-shrink-0"
                >
                  <svg className="w-6 h-6 mr-3 mt-1 text-[#E6D7B4] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </a>
                <div className="flex flex-col">
                  <p className="font-semibold mb-1">Endereço</p>
                  <a 
                    href="https://www.google.com/maps/place/0. Dr. Emílio Ribas, 1058 - Cambuí, Campinas - SP, 13025-141"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#E6D7B4] transition-colors text-sm"
                  >
                    Rua Doutor Emílio Ribas 1058 - Cambuí, Campinas
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center">
                <a 
                  href="mailto:fernandasena.geriatra@gmail.com"
                  className="flex-shrink-0"
                >
                  <svg className="w-6 h-6 mr-3 text-[#E6D7B4] hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:fernandasena.geriatra@gmail.com" className="hover:text-[#E6D7B4] transition-colors text-sm">
                    fernandasena.geriatra@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Telefone/WhatsApp */}
              <div className="flex items-center">
                <a 
                  href="https://wa.me/5519989609449"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <svg className="w-6 h-6 mr-3 text-[#E6D7B4] hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <div>
                  <p className="font-semibold">Telefone/WhatsApp</p>
                  <a href="https://wa.me/5519989609449" className="hover:text-[#E6D7B4] transition-colors text-sm">
                    (19) 98960-9449
                  </a>
                </div>
              </div>
              {/* Instagram */}
                <div className="flex items-start">
                {/* Ícone - Centralizado verticalmente com as duas linhas de texto */}
                <a 
                    href="https://www.instagram.com/fersenars/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-shrink-0 mr-3 mt-3" // mt-3 para alinhar com a primeira linha de texto
                >
                    <svg className="w-6 h-6 text-[#E6D7B4] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                </a>
                
                {/* Textos em coluna */}
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#ffffff] mb-1">Instagram</span>
                    <a 
                    href="https://www.instagram.com/fersenars/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#E6D7B4] transition-colors text-sm"
                    >
                    fersenars
                    </a>
                </div>
                </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-4">
            <div className="w-full h-40 md:h-48"> 
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.249451152571!2d-47.0583623253504!3d-22.94056077926131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c72804f32edb%3A0xc3f124c6e91f0932!2sRua%20Doutor%20Em%C3%ADlio%20Ribas%2C%201058%20-%20Cambu%C3%AD%2C%20Campinas%20-%20SP%2C%2013025-141!5e0!3m2!1spt-BR!2sbr!4v1691456728035!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localização da clínica no Google Maps">
              </iframe>
            </div>

            <img 
              src={logo} 
              alt="Logo Dra. Fernanda Sena" 
              className="h-25 object-contain"
            />
          </div>
        </div>

        <div className="border-t border-[#E6D7B4] pt-4 text-center text-xs">
          <p className="mb-1">Responsável Técnico: Fernanda Sena Rabelo Santos - CRM 2025512 / RQE 125149</p>
          <p>Todos os direitos reservados / Desenvolvido por Gabriel Teperino</p>
        </div>
      </div>

      <a
        href="https://wa.me/5519989609449"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="Agendar consulta via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
        </svg>
      </a>
    </footer>
  );
}