# Portfólio Eduardo Tomaz - React

Este é o portfólio pessoal de Eduardo Tomaz migrado de HTML/CSS/JS puro para React, mantendo todas as funcionalidades, animações e design original.

## 🚀 Funcionalidades

- **Design Responsivo**: Layout adaptado para todas as telas
- **Modais Interativos**: 5 seções principais (About, Projects, Experience, Testimonials, Contact)
- **Multilíngue**: Suporte a Português, Inglês e Japonês
- **Animações Fluidas**: Transições suaves e efeitos visuais
- **Formulário de Contato**: Integração com EmailJS
- **Slider de Depoimentos**: Usando Swiper.js
- **Background Animado**: Vídeo de fundo com gradientes animados

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e desenvolvimento
- **Swiper**: Carrossel de depoimentos
- **EmailJS**: Serviço de envio de emails
- **Font Awesome**: Ícones
- **Ion Icons**: Ícones adicionais
- **CSS Moderno**: CSS3 com variáveis e animações

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## ⚡ Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone <seu-repositorio>
   cd portfolio-react
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto em desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
portfolio-react/
├── public/
│   └── img/              # Imagens e assets
├── src/
│   ├── components/
│   │   ├── modals/       # Componentes dos modais
│   │   ├── BackgroundVideo.jsx
│   │   └── IconContainer.jsx
│   ├── utils/
│   │   └── translations.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🌟 Componentes Principais

- **App.jsx**: Componente principal com gerenciamento de estado
- **ModalWrapper.jsx**: Wrapper reutilizável para todos os modals
- **AboutModal.jsx**: Modal da seção "Sobre"
- **ProjectsModal.jsx**: Modal de projetos e habilidades
- **ExperienceModal.jsx**: Modal de experiências profissionais
- **TestimonialModal.jsx**: Modal com slider de depoimentos
- **ContactModal.jsx**: Modal com formulário de contato
- **LanguageSwitcher.jsx**: Componente para troca de idiomas

## 🎨 Personalização

### Alterando Conteúdo
- **Traduções**: Edite `src/utils/translations.js`
- **Projetos**: Modifique as arrays em `ProjectsModal.jsx`
- **Experiências**: Atualize os dados em `ExperienceModal.jsx`
- **Depoimentos**: Edite a array de testimonials em `TestimonialModal.jsx`

### Alterando Estilos
- **CSS Global**: `src/App.css`
- **Variáveis CSS**: Definidas em `:root` no App.css

### EmailJS Configuration
Para que o formulário de contato funcione, configure suas credenciais do EmailJS em `ContactModal.jsx`:

```javascript
emailjs.init("SUA_PUBLIC_KEY");
// e
emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this)
```

## 📱 Responsividade

O projeto inclui breakpoints para:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## 🚀 Deploy

O projeto pode ser deployado em qualquer serviço de hosting estático como:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados a Eduardo Tomaz.

## 📞 Contato

- **LinkedIn**: [Eduardo Tomaz](https://www.linkedin.com/in/eduardotoomazs/)
- **GitHub**: [toomazs](https://github.com/toomazs)
- **Instagram**: [@tomazdudux](https://instagram.com/tomazdudux)
