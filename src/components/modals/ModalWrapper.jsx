import { useEffect, useState } from 'react';

const ModalWrapper = ({ id, isClosing, onClose, children, onMaximize }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    if (onMaximize) {
      onMaximize(!isMaximized);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    const rotateX = (e.clientY / window.innerHeight - 0.5) * -3;
    const rotateY = (e.clientX / window.innerWidth - 0.5) * 3;
    setMousePosition({ x, y, rotateX, rotateY });
  };

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.classList.add('prevent-background-scroll');

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.classList.remove('prevent-background-scroll');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`popup ${isClosing ? 'closing' : ''} ${isMaximized ? 'maximized' : ''}`}
      id={id}
      style={{ display: 'block' }}
      onClick={handleBackdropClick}
    >
      <div
        className="popup-container"
        style={{
          ...(isMaximized ? { width: '95%' } : {}),
          transform: `translate(calc(-50% + ${mousePosition.x || 0}px), calc(-50% + ${mousePosition.y || 0}px))
                      perspective(1000px)
                      rotateX(${mousePosition.rotateX || 0}deg)
                      rotateY(${mousePosition.rotateY || 0}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="popup-header">
          <div className="button-container">
            <button className="close-btn circle-btn red" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="close-btn circle-btn yellow">
              <i className="fa-solid fa-window-minimize"></i>
            </button>
            <button className="maximize-btn circle-btn green" onClick={handleMaximize}>
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>
        <div
          className={`popup-body ${isMaximized ? 'prevent-scroll' : ''}`}
          style={isMaximized ? { height: '80vh' } : {}}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;