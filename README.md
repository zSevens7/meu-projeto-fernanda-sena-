# Migração de Site: Dra. Fernanda Sena (WordPress → React + TypeScript + Tailwind)

Este documento detalha o plano de ação para a migração completa do site oficial da [Dra. Fernanda Sena](https://drafernandasena.com.br/), atualmente hospedado em **WordPress**, para uma nova plataforma moderna e otimizada, utilizando **React + TypeScript + Tailwind CSS**.

O objetivo é criar uma experiência de usuário mais rápida, responsiva e com um design atrativo, mantendo a estrutura e o conteúdo existentes.

---

## 📑 Roadmap do Projeto

### ✅ Etapa 1 – Setup Inicial (já concluída)
- Criado o projeto com **React + TypeScript + Tailwind**.
- Instaladas bibliotecas essenciais:
  - `react-router-dom` → rotas e navegação.
  - `react-helmet-async` → SEO (títulos, meta tags para Google, Facebook e Instagram).
  - `lucide-react` (ou `react-icons`) → ícones sociais.
- Estrutura de pastas definida:

---
src/

├── assets/ # imagens

├── components/ # HeaderHome e HeaderGenerico, footer, 

├── pages/ # cada página do site

├── routes/ # <- não foi utilizado

├── App.tsx -< Link das routas

└── main.tsx

---

- Repositório configurado e enviado para o **GitHub**.

---

### ✅ Etapa 2 – Sidebar + Header
- Header fixo com logo.
- Menu lateral responsivo para mobile.
- Botão em destaque **"Agendar Consulta"** com link para WhatsApp.

---

### ✅ Etapa 3 – Footer
- Endereço da clínica (**Google Maps embed**).
- Ícones de contato (**WhatsApp, Email, Instagram**).
- Informar responsável técnico:  
  **Dra. Fernanda Sena Rabelo Santos**.

---

### ✅ Etapa 4 – Página Principal
- Estrutura em **carrossel vertical** (seções deslizando de cima para baixo).
- Foto principal em destaque.
- Texto explicativo sobre a clínica.
- CTA: **"Agende sua consulta"**.

---

### ✅ Etapa 5 – Página "Fernanda Sena"
- Formato em **carrossel vertical**.
- Apresentação da médica.
- Histórico e especialização.

---

### ✅ Etapa 6 – Página "A Consulta Geriátrica"
- Layout normal, sem carrossel.
- Conteúdo em **cards explicativos**.

---

### ⚠️ Etapa 7 – Página "Especialidades"  
- Estrutura criada.  
- Falta apenas alinhar com a cliente quais especialidades serão exibidas e em qual formato.

---

### ✅ Etapa 8 – Agendamento
- Botão fixo **"Agendar Consulta"** (verde) → link direto para WhatsApp.
- Email incluso no footer.

---

## 🔎 Observações sobre Imagens
- O WordPress gera múltiplas resoluções automaticamente.
- No **React**:
  - Usar a **maior resolução** disponível (preferência `.webp` pela leveza).
  - Tailwind garante responsividade sem precisar de múltiplas versões.
- Se necessário otimizar:
  - Usar serviços como **ImageKit** ou **Cloudinary**.

---

## 🚀 Próximos Passos
- Reunião com a cliente (**Dra. Fernanda**) para validação do site.  
- Definição final da seção **Especialidades**.  
- Ajustes de refinamento conforme feedback.
