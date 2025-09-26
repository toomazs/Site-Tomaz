import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LanguageSwitcher from './LanguageSwitcher';
import ModalWrapper from './ModalWrapper';

const TestimonialModal = ({ isClosing, onClose, currentLanguage, onLanguageChange, getTranslation }) => {
  const testimonials = [
    {
      img: '/img/gui.jpg',
      name: 'Guilherme Rodrigues',
      text: getTranslation('r1')
    },
    {
      img: '/img/carlos.jpeg',
      name: 'Carlos Eduardo Ifanger',
      text: getTranslation('r2')
    },
    {
      img: '/img/jade.jpeg',
      name: 'Jade Nascimento',
      text: getTranslation('r3')
    },
    {
      img: '/img/leandro.jpg',
      name: 'Leandro Tomaz',
      text: getTranslation('r4')
    },
    {
      img: '/img/ze.jpg',
      name: 'Eduardo Silva',
      text: getTranslation('r5')
    },
    {
      img: '/img/muri.jpg',
      name: 'Murilo Ferreira',
      text: getTranslation('r6')
    },
    {
      img: '/img/joao.png',
      name: 'João Pedro Dias',
      text: getTranslation('r7')
    },
    {
      img: '/img/yas.png',
      name: 'Yasmin Tomaz',
      text: getTranslation('r8')
    },
    {
      img: '/img/gui2.png',
      name: 'Guilherme De Paula',
      text: getTranslation('r9')
    }
  ];

  return (
    <ModalWrapper id="testimonial" isClosing={isClosing} onClose={onClose}>
      <div className="popup-body-modal testimonial-container">
        <h1>{getTranslation('review')}</h1>

        <div className="slider-container">
          <Swiper
            modules={[Navigation, Mousewheel]}
            preventClicks={true}
            noSwiping={false}
            freeMode={false}
            loop={true}
            centeredSlides={false}
            spaceBetween={30}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
            mousewheel={{
              invert: false,
              thresholdDelta: 50,
              sensitivity: 1,
            }}
            breakpoints={{
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
            }}
            grabCursor={true}
            watchOverflow={true}
            speed={600}
            resistance={true}
            resistanceRatio={0.85}
            className="swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="user-info">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className="user-info-text">
                    <h2>{testimonial.name}</h2>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <ul className="control" id="custom-control">
            <li className="prev">
              <ion-icon className="arrow" name="caret-back-outline"></ion-icon>
            </li>
            <li className="next">
              <ion-icon className="arrow" name="caret-forward-outline"></ion-icon>
            </li>
          </ul>
        </div>

        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </ModalWrapper>
  );
};

export default TestimonialModal;