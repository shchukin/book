import React, {useState} from 'react';
import './global/global-style.css';
import Contains from "./components/Contains/Contains.tsx";
import Lesson1 from "./components/Lesson1/Lesson1.tsx";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(true); // Open by default on desktop

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <button className="burger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <Contains isOpen={isMenuOpen}/>

      <Lesson1/>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
