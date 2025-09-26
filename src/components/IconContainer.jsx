const IconContainer = ({ onIconClick, activeModal }) => {
  const icons = [
    { id: 'about', icon: 'fa-regular fa-address-card', title: 'About' },
    { id: 'projects', icon: 'fa-solid fa-laptop-code', title: 'Projects' },
    { id: 'experience', icon: 'fa-solid fa-briefcase', title: 'Experience' },
    { id: 'testimonial', icon: 'fa-solid fa-users-rectangle', title: 'Reviews' },
    { id: 'contact', icon: 'fa-solid fa-envelope', title: 'Contact' }
  ];

  return (
    <div className="icon-container">
      {icons.map((iconData) => (
        <div
          key={iconData.id}
          className={`icon-box ${iconData.id} ${activeModal === iconData.id ? 'active' : ''}`}
          onClick={() => onIconClick(iconData.id)}
          title={iconData.title}
        >
          <i className={iconData.icon}></i>
        </div>
      ))}
    </div>
  );
};

export default IconContainer;