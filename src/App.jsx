import { useEffect, useState } from 'react'
import './App.css'
import IconContainer from './components/IconContainer'
import AboutModal from './components/modals/AboutModal'
import ContactModal from './components/modals/ContactModal'
import ExperienceModal from './components/modals/ExperienceModal'
import ProjectsModal from './components/modals/ProjectsModal'
import TestimonialModal from './components/modals/TestimonialModal'
import { translations } from './utils/translations'

function App() {
  const [activeModal, setActiveModal] = useState('about')
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    setActiveModal('about')
  }, [])

  const openModal = (modalId) => {
    if (modalId !== activeModal) {
      setIsClosing(true)
      setTimeout(() => {
        setActiveModal(modalId)
        setIsClosing(false)
      }, 500)
    } else {
      setActiveModal(modalId)
      setIsClosing(false)
    }
  }

  const closeModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setActiveModal(null)
      setIsClosing(false)
    }, 500)
  }

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang)
  }

  const getTranslation = (key) => {
    return translations[currentLanguage]?.[key] || key
  }

  return (
    <div className="App">

      <section>
        <IconContainer onIconClick={openModal} activeModal={activeModal} />
      </section>

      {activeModal === 'about' && (
        <AboutModal
          isClosing={isClosing}
          onClose={closeModal}
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
          getTranslation={getTranslation}
        />
      )}

      {activeModal === 'projects' && (
        <ProjectsModal
          isClosing={isClosing}
          onClose={closeModal}
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
          getTranslation={getTranslation}
        />
      )}

      {activeModal === 'experience' && (
        <ExperienceModal
          isClosing={isClosing}
          onClose={closeModal}
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
          getTranslation={getTranslation}
        />
      )}

      {activeModal === 'testimonial' && (
        <TestimonialModal
          isClosing={isClosing}
          onClose={closeModal}
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
          getTranslation={getTranslation}
        />
      )}

      {activeModal === 'contact' && (
        <ContactModal
          isClosing={isClosing}
          onClose={closeModal}
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
          getTranslation={getTranslation}
        />
      )}
    </div>
  )
}

export default App
