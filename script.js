const iconBoxes = document.querySelectorAll(".icon-box");
const iconBoxContainers = document.querySelectorAll(".icon-container");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");
const popup = document.querySelector('.popup');
const closeBtns = document.querySelectorAll(".close-btn");

// Fechar popup ao clicar no botão de fechar
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
    }, 500); // tempo de animação em milissegundos
  });
});

// Abrir popup ao clicar em um icon-box
iconBoxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.getAttribute("data-modal");
    let currentModal = document.getElementById(modal);
    currentModal.style.display = "block";
    currentModal.classList.remove("closing");
    body.classList.add("prevent-background-scroll");

    // Fechar outros popups que estejam abertos
    document.querySelectorAll('.popup').forEach((otherModal) => {
      if (otherModal !== currentModal) {
        otherModal.classList.add('closing');
        setTimeout(() => {
          otherModal.style.display = 'none';
        }, 500);
      }
    });
  });
});

// Fechar popup ao clicar fora dele
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    e.target.classList.add('closing');
    setTimeout(() => {
      e.target.style.display = "none";
      body.classList.remove("prevent-background-scroll");
    }, 500);
  }
});

// Maximizar/minimizar popup
maximizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    let container = modal.querySelector(".popup-container");
    let body = modal.querySelector(".popup-body");

    if (modal.classList.contains("maximized")) {
      container.style.width = "min(900px, 90%)";
      container.style.top = "45%";
      body.style.height = "70vh";
    } else {
      container.style.width = "90%";
      container.style.top = "50%";
      body.style.height = "80vh";
    }

    modal.classList.toggle("maximized");
    body.classList.toggle("prevent-scroll");
  });
});



const translations = {
  en: {
    title: "Eduardo Tomaz",
    description: "Hey there! I am a <strong>Front-End Developer</strong> and also a <strong>Computer Science</strong> undergraduate student. <br> I created this site inspired by the macOS interface <img src='img/apple.png' id='icone-apple'>. See more about me & my work by clicking the buttons below! <br> <br> ",
    skills: "TECH STACK",
    projects: "PROJECTS",
    underc: "Under construction.",
    online: "Website Online",
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
    linkedinpage: "From&nbsp; <a href='https://linkedin.com/in/eduardotoomazs' target='_blank' ><img src='img/linkedinfull.png' class='linkedin'>",
    contato: "CONTACT",
    contatop: "Feel free to contact me.",
    name1: "Your name",
    email1: "Your e-mail",
    message1: "Subject",
    send: "Send <i class='fa-solid fa-paper-plane'></i> ",
  },

  pt: {
    title: "Eduardo Tomaz",
    description: "Opa! Prazer, seja bem-vindo ao meu site! <br>Sou <strong>Front-End Developer</strong> e também um Graduando de <strong>Ciências da Computação.</strong> <br>Fiz esse site me inspirando na interface do macOS <img src='img/apple.png' id='icone-apple'>. Saiba mais um pouco sobre mim clicando nos botões abaixo! <br> <br>",
    skills: "HABILIDADES",
    projects: "PROJETOS",
    underc: "Site em construção.",
    online: "Website Online",
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
    linkedinpage: "Tiradas do&nbsp; <a href='https://linkedin.com/in/eduardotoomazs' target='_blank' ><img src='img/linkedinfull.png' class='linkedin'>",
    contato: "CONTATO",
    contatop: "Me mande uma mensagem!",
    name1: "Seu nome",
    email1: "Seu e-mail",
    message1: "Sua mensagem",
    send: "Enviar <i class='fa-solid fa-paper-plane'></i> ",
  },

  jp: {
    title: "Eduardo Tomaz",
    description: "こんにちは！初めまして、私のウェブサイトへようこそ！ <br>私は<strong>フロントエンド開発者</strong>で、<strong>コンピュータ サイエンス</strong>も勉強しています。<br>このサイトは、macOS インターフェイス からインスピレーションを得て作成しました。 <img src='img/apple.png' id='icone-apple'>。下のボタンをクリックして、私についてもう少し詳しくご覧ください。 <br> <br>",
    skills: "スキル",
    projects: "プロジェクト",
    underc: "ウェブサイトは建設中です",
    online: "オンラインウェブサイト",
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
    linkedinpage: "からのレビュー&nbsp; <a href='https://linkedin.com/in/eduardotoomazs' target='_blank' ><img src='img/linkedinfull.png' class='linkedin'>",
    contato: "接触",
    contatop: "メッセージを送ってください！",
    name1: "あなたの名前",
    email1: "あなたのメールアドレス",
    message1: "あなたのメッセージ",
    send: "送信 <i class='fa-solid fa-paper-plane'></i> ",
  },
};



const languageSwitcher = document.querySelector('.language-switcher');
const elementsToTranslate = document.querySelectorAll('[data-translate]');
const languageSwitchers = document.querySelectorAll('.language-switcher');

languageSwitchers.forEach(languageSwitcher => {
  languageSwitcher.addEventListener('click', (event) => {
    const lang = event.target.id; // 'pt' or 'en'
    updateTranslations(lang);
  });
});

function updateTranslations(lang) {
  // Update translations for all tabs
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(element => {
    const translationKey = element.getAttribute('data-translate');
    element.innerHTML = translations[lang][translationKey];
  });
}

languageSwitcher.addEventListener('click', (event) => {
  const lang = event.target.id; // 'pt' ou 'en'

  elementsToTranslate.forEach(element => {
    const translationKey = element.getAttribute('data-translate');
    element.innerHTML = translations[lang][translationKey];
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const languageSwitchers = document.querySelectorAll('.language-switcher');
    languageSwitchers.forEach(languageSwitcher => {
      languageSwitcher.addEventListener('click', (event) => {
        const lang = event.target.id; // 'pt' or 'en'
        updateTranslations(lang);
      });
    });
  });

  function updateTranslations(lang) {
    // Update translations for all tabs
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute('data-translate');
      element.innerHTML = translations[lang][translationKey];
      element.classList.add('translate-transition');
      element.classList.add('fade-in');
      setTimeout(() => {
        element.classList.remove('fade-in');
      }, 500); // tempo de animação em milissegundos
    });
  
  }
  
  // Add event listener to language switcher
  document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', event => {
      const lang = event.target.id; // 'pt' or 'en'
      updateTranslations(lang);
    });
  });

});





( function( $ ) {

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
  

// Swiper
var swiper = new Swiper(".swiper", {
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  spaceBetween: 10,
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
    },
    680: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
} )
}( jQuery ) );




