const iconBoxes = document.querySelectorAll(".icon-box");
const iconBoxContainers = document.querySelectorAll(".icon-container");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");
const closeBtns = document.querySelectorAll(".close-btn");

const translations = {

  // Traducao EN
  en: {
    title: "Eduardo Tomaz",
    description: "Hey there! I am a <strong>Software Engineer, Full Stack Developer</strong> and also a <strong>Computer Science</strong> undergraduate student. <br>See more about me & my work by clicking the buttons below! <br> <br>",
    skills: "TECH STACK",
    projects: "REAL PROJECTS",
    repo: "Repository",
    online: "Website Online",
    certificates: "CERTIFICATES",
    cred: "Credential",
    experienceTitle: "EXPERIENCES",
    jobTitleOne: "Technical Support Intern",
    jobCompanyOne: "N-Multifibra · Internship",
    jobMetaOne: "Sep 2024 - Sep 2025",
    jobNoteOne: "Cotia, São Paulo, Brazil · On-site",
    jobTitleTwo: "Full-Stack Software Developer Jr",
    jobCompanyTwo: "Hypesoft · Full-time",
    jobMetaTwo: "Sep 2025 - Present",
    jobNoteTwo: "Pinheiros, São Paulo, Brazil · Hybrid",
    jobResp1: "Provide technical support to clients by phone, email, and chat;",
    jobResp2: "Diagnose and resolve network connectivity and configuration issues;",
    jobResp3: "Assist in the installation and configuration of network equipment;",
    jobResp4: "Log and track support tickets in the internal system;",
    jobResp5: "Collaborate with the team to identify trends and improvements in support processes.",
    review: "REVIEWS",
    r1: "Working with Eduardo was a pleasure, everything with mastery in a great period of time.",
    r2: "Eduardo has vast knowledge and is a proactive and responsible person.",
    r3: "Eduardo is committed to the challenges proposed, always looking for the best to offer.",
    r4: "My website turned out perfectly as I requested. Responsive and aesthetic! Very good!",
    r5: "The project turned out so great! Comply with what you propose.",
    r6: "Eduardo Tomaz's project was well worked and thought out.",
    r7: "I gave error feedbacks and it was fixed in just minutes. Clean and aesthetically beautiful website.",
    r8: "Very beautiful and modern website, Du! Congratulations, Great step!",
    r9: "Wow! Sensational, bro! It's awesome, I'm going to set up a Linkedin to follow you there too.",
    contato: "CONTACT",
    contatop: "Feel free to contact me.",
    name1: "Your name",
    email1: "Your e-mail",
    message1: "Your message",
    send: "Send <i class='fa-solid fa-paper-plane'></i> ",
  },

  // Traducao PT
  pt: {
    title: "Eduardo Tomaz",
    description: "Opa, salve! Prazer, sou <strong>Engenheiro de Software, Desenvolvedor Full Stack</strong> e também um graduando em <strong>Ciências da Computação</strong>. <br>Veja mais sobre mim e meu trabalho clicando nos botões abaixo! <br> <br>",
    skills: "HABILIDADES",
    projects: "PROJETOS REAIS",
    repo: "Repositório",
    online: "Website Online",
    certificates: "CERTIFICADOS",
    cred: "Credencial",
    experienceTitle: "EXPERIÊNCIAS",
    jobTitleOne: "Estagiário de Suporte Técnico",
    jobCompanyOne: "N-Multifibra · Estágio",
    jobMetaOne: "set de 2024 - set de 2025",
    jobNoteOne: "Cotia, São Paulo, Brasil · Presencial",
    jobTitleTwo: "Desenvolvedor de Software Full-Stack Jr",
    jobCompanyTwo: "Hypesoft · Tempo integral",
    jobMetaTwo: "set de 2025 - o momento",
    jobNoteTwo: "Pinheiros, São Paulo, Brasil · Hibrido",
    jobResp1: "Prestar suporte técnico aos clientes por telefone, e-mail e chat;",
    jobResp2: "Diagnosticar e resolver problemas de conectividade e configuração de rede;",
    jobResp3: "Auxiliar na instalação e configuração de equipamentos de rede;",
    jobResp4: "Registrar e acompanhar chamados de suporte no sistema interno;",
    jobResp5: "Colaborar com a equipe para identificar tendências e melhorias nos processos de suporte.",
    review: "AVALIAÇÕES",
    r1: "Trabalhar com o Eduardo foi excepcional, Tudo com maestria em um período de tempo ótimo.",
    r2: "Eduardo possui vasto conhecimento, e é uma pessoa proativa e responsável.",
    r3: "Eduardo é comprometido com os desafios propostos, sempre buscando o melhor para oferecer.",
    r4: "Meu site ficou perfeitamente como eu pedi. Responsivo e estético! Muito bom!",
    r5: "O projeto ficou ótimo! Cumpre com o que propõe.",
    r6: "O Projeto de Eduardo Tomaz foi bem trabalhado e pensado.",
    r7: "Dei feedbacks de erro e foi arrumado em minutos. Site limpo e esteticamente bonito.",
    r8: "Site muito bonito e moderno, Dudu! Parabéns, Ótimo passo!!",
    r9: "Pô! Sensacional, mano! Ficou demais, vou no LinkedIn pra acompanhar também.",
    contato: "CONTATO",
    contatop: "Me mande uma mensagem!",
    name1: "Seu nome",
    email1: "Seu e-mail",
    message1: "Sua mensagem",
    send: "Enviar <i class='fa-solid fa-paper-plane'></i> ",
  },


  // Traducao JP
  jp: {
    title: "Eduardo Tomaz",
    description: "こんにちは！私は<strong>ソフトウェアエンジニア、フルスタック開発者</strong>であり、<strong>コンピュータサイエンス</strong>の学部生でもあります。<br>下のボタンをクリックして、私と私の仕事についてもっと知ってください。<br> <br>",
    skills: "スキル",
    projects: "プロジェクト",
    repo: "リポジトリ",
    online: "オンラインウェブサイト",
    certificates: "証明書",
    cred: "資格情報",
    experienceTitle: "職務経歴",
    jobTitleOne: "テクニカルサポートインターン",
    jobCompanyOne: "N-Multifibra · インターンシップ",
    jobMetaOne: "2024年9月 - 2025年9月",
    jobNoteOne: "コチア、サンパウロ、ブラジル · 対面",
    jobTitleTwo: "ソフトウェアエンジニアフルスタック Jr",
    jobCompanyTwo: "Hypesoft · パートタイム",
    jobMetaTwo: "2025年9月 - 現在",
    jobNoteTwo: "ピンヘイロス、サンパウロ、ブラジル · ハイブリッド",
    review: "レビュー",
    r1: "エドゥアルドとの仕事は並外れたもので、素晴らしい期間の中ですべてが熟達していました。",
    r2: "エドゥアルドは豊富な知識を持ち、積極的で責任感のある人物です。",
    r3: "エドゥアルドは提案された課題に全力で取り組み、常に最善のものを提供できるよう努めています。",
    r4: "私のウェブサイトは私が要求したとおりに完璧に完成しました。反応性が高く、見た目も美しい！とても良い！",
    r5: "プロジェクトは素晴らしいものになりました！あなたが提案したものに従います。",
    r6: "Eduardo Tomaz のプロジェクトはよく練られ、よく考えられていました。",
    r7: "エラーのフィードバックを送ったところ、数分で修正されました。クリーンで審美的に美しいウェブサイト。",
    r8: "とても美しくてモダンなウェブサイト、Du!おめでとうございます、素晴らしい一歩です!!",
    r9: "おお！センセーショナルだよ、兄弟！素晴らしいですね。私も Linkedin を設定して、あなたをフォローするつもりです。",
    contato: "接触",
    contatop: "メッセージを送ってください！",
    name1: "あなたの名前",
    email1: "あなたのメールアドレス",
    message1: "あなたのメッセージ",
    send: "送信 <i class='fa-solid fa-paper-plane'></i> ",
  },
};

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    modal.classList.add("closing");
    setTimeout(() => {
      modal.style.display = "none";
      body.classList.remove("prevent-background-scroll");
      iconBoxContainers.forEach((container) => {
        container.style.display = "flex";
      });
    }, 500);
  });
});

iconBoxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modalId = btn.getAttribute("data-modal");
    let currentModal = document.getElementById(modalId);
    
    document.querySelectorAll('.popup').forEach((otherModal) => {
      if (otherModal !== currentModal) {
        otherModal.classList.add('closing');
        setTimeout(() => {
          otherModal.style.display = 'none';
        }, 500);
      }
    });

    currentModal.style.display = "block";
    currentModal.classList.remove("closing");
    body.classList.add("prevent-background-scroll");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    e.target.classList.add('closing');
    setTimeout(() => {
      e.target.style.display = "none";
      body.classList.remove("prevent-background-scroll");
    }, 500);
  }
});

maximizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    let container = modal.querySelector(".popup-container");
    let popupBody = modal.querySelector(".popup-body");

    modal.classList.toggle("maximized");
    if (modal.classList.contains("maximized")) {
      container.style.width = "95%";
      popupBody.style.height = "80vh";
    } else {
      container.style.width = "min(900px, 90%)";
      popupBody.style.height = "70vh";
    }
    popupBody.classList.toggle("prevent-scroll");
  });
});

// --- Lógica de Tradução ---

function updateTranslations(lang) {
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
      element.classList.add('fade-in');
      setTimeout(() => {
        element.classList.remove('fade-in');
      }, 500);
    }
  });
}

document.querySelectorAll('.flag').forEach(flag => {
  flag.addEventListener('click', (event) => {
    event.preventDefault();
    const lang = event.currentTarget.id;
    updateTranslations(lang);
  });
});

// --- Lógica de Inicialização ---

document.addEventListener("DOMContentLoaded", function() {
  const aboutPopup = document.getElementById("about");
  if (aboutPopup) {
    aboutPopup.style.display = "block";
    body.classList.add("prevent-background-scroll");
  }

  updateTranslations('en');
});

// --- Inicialização de Plugins ---

(function($) {
  "use strict";

  $(".popup").tilt({
    maxTilt: 15,
    perspective: 3000,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 500,
    glare: false,
    maxGlare: 0.2,
    scale: 1.01
  });

  var swiper = new Swiper(".swiper", {
    preventClicks: true,
    noSwiping: false, 
    freeMode: false,
    loop: true, 
    centeredSlides: false, 
    spaceBetween: 30,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    mousewheel: {
      invert: false,
      thresholdDelta: 50,
      sensitivity: 1,
    },
    breakpoints: {
      0: { 
        slidesPerView: 1,
        spaceBetween: 20
      },
      680: { 
        slidesPerView: 2,
        spaceBetween: 25
      },
      1100: { 
        slidesPerView: 'auto', 
        spaceBetween: 30
      },
      1600: { 
        slidesPerView: 'auto', 
        spaceBetween: 35
      },
      2048: { 
        slidesPerView: 'auto',
        spaceBetween: 40
      }
    },
    
    grabCursor: true,
    watchOverflow: true, 
    speed: 600,
    
    resistance: true,
    resistanceRatio: 0.85,
});

window.addEventListener('resize', function() {
    swiper.update();
});
}(jQuery));