import LanguageSwitcher from './LanguageSwitcher';
import ModalWrapper from './ModalWrapper';

const AboutModal = ({ isClosing, onClose, currentLanguage, onLanguageChange, getTranslation }) => {
  return (
    <ModalWrapper id="about" isClosing={isClosing} onClose={onClose}>
      <div className="popup-body-modal about-container">
        <div className="img-frame">
          <img src="/img/foto.jpg" alt="Eduardo Tomaz" />
        </div>
        <div className="hero-content">
          <h1 dangerouslySetInnerHTML={{ __html: getTranslation('title') }}></h1>
          <p dangerouslySetInnerHTML={{ __html: getTranslation('description') }}></p>

          <div className="icones-container">
            <div className="icones">
              <a href="https://github.com/toomazs" target="_blank" rel="noopener noreferrer" className="icon-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com/tomazdudux" target="_blank" rel="noopener noreferrer" className="icon-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/eduardotoomazs/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <div className="icones-direita">
              <a
                href="https://drive.google.com/file/d/1cg-cYrX6athe1lthmjKPWJX77rZ7tLOa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i className="fas fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </div>

        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </ModalWrapper>
  );
};

export default AboutModal;