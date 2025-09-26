const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'pt', flag: '/img/br-flag.png', alt: 'Português' },
    { code: 'en', flag: '/img/us-flag.png', alt: 'English' },
    { code: 'jp', flag: '/img/jp-flag.png', alt: 'Japan' }
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <a
          key={lang.code}
          href="#"
          className={`flag ${currentLanguage === lang.code ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            onLanguageChange(lang.code);
          }}
        >
          <img src={lang.flag} alt={lang.alt} />
        </a>
      ))}
    </div>
  );
};

export default LanguageSwitcher;