import { useState, useEffect, useRef } from 'react';
import './global/global-style.css';
import Contains from "./components/Contains/Contains";
import Lesson1 from "./components/Lesson1/Lesson1";
import Burger from "./components/Burger/Burger";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (newState && window.matchMedia('(max-width: 739px)').matches) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
      return newState;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.documentElement.style.overflow = '';
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="page container">
      <div className="menu" ref={menuRef}>
        <Burger onClick={toggleMenu} expanded={isMenuOpen} />
        {isMenuOpen && <Contains closeMenu={closeMenu} />}
      </div>
      <Lesson1 />
    </div>
  );
}

export default App;
