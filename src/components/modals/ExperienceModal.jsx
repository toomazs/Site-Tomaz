import LanguageSwitcher from './LanguageSwitcher';
import ModalWrapper from './ModalWrapper';

const ExperienceModal = ({ isClosing, onClose, currentLanguage, onLanguageChange, getTranslation }) => {
  const experiences = [
    {
      logo: '/img/hypesoft.png',
      title: getTranslation('jobTitleTwo'),
      company: getTranslation('jobCompanyTwo'),
      period: getTranslation('jobMetaTwo'),
      location: getTranslation('jobNoteTwo'),
      alt: 'Hypesoft Logo'
    },
    {
      logo: '/img/n-multifibra.jpg',
      title: getTranslation('jobTitleOne'),
      company: getTranslation('jobCompanyOne'),
      period: getTranslation('jobMetaOne'),
      location: getTranslation('jobNoteOne'),
      alt: 'N-Multifibra Logo'
    }
  ];

  return (
    <ModalWrapper id="experience" isClosing={isClosing} onClose={onClose}>
        <h1 className="experience-h1">{getTranslation('experienceTitle')}</h1>

        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="experience-item">
              <div className="company-logo">
                <img src={exp.logo} alt={exp.alt} />
              </div>
              <div className="experience-details">
                <h2>{exp.title}</h2>
                <p className="company-info">{exp.company}</p>
                <p className="meta-info">{exp.period}</p>
                <p className="linkedin-note">{exp.location}</p>
              </div>
            </div>
            {index < experiences.length - 1 && <br />}
          </div>
        ))}

        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
    </ModalWrapper>
  );
};

export default ExperienceModal;