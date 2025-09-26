import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ModalWrapper from './ModalWrapper';

const ContactModal = ({ isClosing, onClose, currentLanguage, onLanguageChange, getTranslation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init("KlPF6KJZxTjnas-zx");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4s3tzfk', 'template_fqk9w7l', e.target)
      .then(() => {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert('Failed to send email, please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <ModalWrapper id="contact" isClosing={isClosing} onClose={onClose}>
      <div className="popup-body-modal contact-container">
        <h1>{getTranslation('contato')}</h1>
        <p>{getTranslation('contatop')}</p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">{getTranslation('name1')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Eduardo"
            required
          />

          <label htmlFor="email">{getTranslation('email1')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="eduardo@email.com"
            required
          />

          <label htmlFor="message">{getTranslation('message1')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder=""
            style={{ height: '150px' }}
            required
          />

          <button className="submit-btn more-btn" type="submit">
            <span
              className="contato"
              dangerouslySetInnerHTML={{ __html: getTranslation('send') }}
            />
          </button>
        </form>

        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </ModalWrapper>
  );
};

export default ContactModal;