import { useState, useEffect, useRef } from 'react';
import './global/global-style.css';
import Contains from "./components/Contains/Contains.tsx";
import Lesson1 from "./components/Lesson1/Lesson1.tsx";
import Burger from "./components/Burger/Burger.tsx";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
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
    <div className="container">
      <div className="menu" ref={menuRef}>
        <Burger onClick={toggleMenu} expanded={isMenuOpen} />
        {isMenuOpen && <Contains />}
      </div>
      <Lesson1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
