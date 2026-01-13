import { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollEffects';

const Navbar = ({ isLoading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`navbar navbar-toggleable-sm navbar-light bg-faded site-navigation dark_bg_menu react-navbar ${scrollPosition > 100 ? 'scrolled menu-bg' : ''}`}
      style={{
        opacity: isLoading ? 0 : 1,
        visibility: isLoading ? 'hidden' : 'visible',
        transition: 'opacity 0.5s ease 0.3s, visibility 0.5s ease 0.3s',
        display: 'none'
      }}
    >
    </nav>
  );
};

export default Navbar;
