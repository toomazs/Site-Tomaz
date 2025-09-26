import LanguageSwitcher from './LanguageSwitcher';
import ModalWrapper from './ModalWrapper';

const ProjectsModal = ({ isClosing, onClose, currentLanguage, onLanguageChange, getTranslation }) => {
  const skills = [
    { img: '/img/java.png', name: 'Java' },
    { img: '/img/springboot.png', name: 'Spring' },
    { img: '/img/maven.png', name: 'Maven' },
    { img: '/img/gradle.png', name: 'Gradle' },
    { img: '/img/go.png', name: 'Go' },
    { img: '/img/csharp.png', name: 'C#' },
    { img: '/img/typescript.png', name: 'Typescript' },
    { img: '/img/react.png', name: 'React' },
    { img: '/img/react.png', name: 'React Native' },
    { img: '/img/postgresql.png', name: 'Postgres' },
    { img: '/img/mariadb.png', name: 'MariaDB' },
    { img: '/img/aws.png', name: 'AWS' },
    { img: '/img/docker.png', name: 'Docker' },
    { img: '/img/cloud.png', name: 'Google Cloud' },
    { img: '/img/azure.png', name: 'Microsoft Azure' },
    { img: '/img/git.png', name: 'Git/Github' }
  ];

  const projects = [
    {
      img: '/img/taskhub.png',
      title: 'NM TaskHub (2025)',
      link: 'https://github.com/toomazs/NM-TaskHub',
      buttonText: getTranslation('repo')
    },
    {
      img: '/img/oltapp.jpeg',
      title: 'NM OLT App (2025)',
      link: 'https://github.com/toomazs/NM-OLT-App',
      buttonText: getTranslation('repo')
    },
    {
      img: '/img/bryan.png',
      title: 'Barbearia Bryan App (2025)',
      link: 'https://github.com/toomazs/BarbeariaBryanApp',
      buttonText: getTranslation('repo')
    },
    {
      img: '/img/tomaz.png',
      title: 'Tomaz Contábil (2024)',
      link: 'https://tomaz-contabil.vercel.app/',
      buttonText: getTranslation('online')
    },
    {
      img: '/img/karilu.png',
      title: 'Karilu Concept (2024)',
      link: 'https://karilu-concept.vercel.app/',
      buttonText: getTranslation('online')
    }
  ];

  const certificates = [
    {
      img: '/img/fundjava.png',
      title: 'Fundamentos de Java',
      link: 'https://app.rocketseat.com.br/certificates/de77d31e-e86e-43d7-a9c8-7c89caabf174'
    },
    {
      img: '/img/fundspring.png',
      title: 'Fundamentos em Spring Boot',
      link: 'https://app.rocketseat.com.br/certificates/aa3b776f-f6e8-4d17-84f9-f3aec50f801e'
    },
    {
      img: '/img/minijava.png',
      title: 'Minicurso de Java',
      link: 'https://app.rocketseat.com.br/certificates/d84f68d1-e893-457f-b740-69cd62669dcc'
    },
    {
      img: '/img/fundgo.png',
      title: 'Fundamentos em Go',
      link: 'https://app.rocketseat.com.br/certificates/1329ab04-2d3f-4df8-89a1-cb101a997e4b'
    },
    {
      img: '/img/apigo.png',
      title: 'Criando uma API REST em Go',
      link: 'https://app.rocketseat.com.br/certificates/0fdf543d-6570-4904-b55e-c84dd2c524e3'
    },
    {
      img: '/img/concgo.png',
      title: 'Conceitos Avançados de Go',
      link: 'https://app.rocketseat.com.br/certificates/9e7902fc-2cc0-4740-b0cb-6c5253f30f0c'
    },
    {
      img: '/img/concintebago.png',
      title: 'Banco de dados em Go',
      link: 'https://app.rocketseat.com.br/certificates/dc197b67-728a-42d5-a74a-9090f29cae58'
    },
    {
      img: '/img/conchttpgo.png',
      title: 'HTTP Servers em Go',
      link: 'https://app.rocketseat.com.br/certificates/7b30c50c-d4a0-4e78-b8da-11ea0b38e50d'
    },
    {
      img: '/img/conctestego.png',
      title: 'Testes Automatizados em Go',
      link: 'https://app.rocketseat.com.br/certificates/bd5a3daf-7049-43fa-b5d1-f92038b9a886'
    },
    {
      img: '/img/godeploy.png',
      title: 'Go - Deploy',
      link: 'https://app.rocketseat.com.br/certificates/465efb22-1b62-48f9-8d65-4e9cbc6cf503'
    },
    {
      img: '/img/fundreactn.png',
      title: 'Fundamentos de React Native',
      link: 'https://app.rocketseat.com.br/certificates/5e829f79-6632-4485-a769-dd0c1c8417b4'
    },
    {
      img: '/img/reactdbs.png',
      title: 'API, DBs e Estados Globais',
      link: 'https://app.rocketseat.com.br/certificates/12634548-6363-44d1-9e5d-5100024563bb'
    },
    {
      img: '/img/fundnode.png',
      title: 'Fundamentos em Node.js',
      link: 'https://app.rocketseat.com.br/certificates/835998b7-aaa5-4538-8fd3-20f4aa5f4b5f'
    },
    {
      img: '/img/ddd.png',
      title: 'DDD no Node.js',
      link: 'https://app.rocketseat.com.br/certificates/e6bbdeee-3164-4fc5-acb5-7e94e64471a4'
    },
    {
      img: '/img/nestjs.png',
      title: 'NestJS',
      link: 'https://app.rocketseat.com.br/certificates/f07fe912-cb19-41c8-8f48-ef9104466f35'
    },
    {
      img: '/img/introalura.png',
      title: 'Introdução a Computação',
      link: 'https://cursos.alura.com.br/certificate/c43b04b6-e06b-4a38-a06f-25df597ed8d3'
    },
    {
      img: '/img/listaalura.png',
      title: 'Projetos com Programação',
      link: 'https://cursos.alura.com.br/certificate/27d31761-93c3-4b09-a0ed-26086d88de74'
    },
    {
      img: '/img/aps.png',
      title: 'Evento APS Unip',
      link: 'https://www.even3.com.br/documentos/imprimir?i=18928470.84015514.6.8.89284708401551468&cc=78766D61-BBE4-4643-BBD1-26D1C6D32E07'
    }
  ];

  return (
    <ModalWrapper id="projects" isClosing={isClosing} onClose={onClose}>
        <div className="skill-list">
          <h1>{getTranslation('skills')}</h1>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <img src={skill.img} alt={skill.name} /> {skill.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-container">
          <h1>{getTranslation('projects')}</h1>
          <div className="all-projects">
            {projects.map((project, index) => (
              <div key={index} className="project-box">
                <img src={project.img} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="more-btn">
                      <span>{project.buttonText}</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="project-container">
          <h1>{getTranslation('certificates')}</h1>
          <div className="all-projects">
            {certificates.map((cert, index) => (
              <div key={index} className="project-box">
                <img src={cert.img} alt={cert.title} />
                <div className="overlay">
                  <h3>{cert.title}</h3>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <button className="more-btn">
                      <span>{getTranslation('cred')}</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
    </ModalWrapper>
  );
};

export default ProjectsModal;