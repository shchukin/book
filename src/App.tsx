import {useState} from 'react';
import './global/global-style.css';
import Contains from "./components/Contains/Contains.tsx";
import Lesson1 from "./components/Lesson1/Lesson1.tsx";
import Burger from "./components/Burger/Burger.tsx";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Open by default on desktop

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">

      <Burger onClick={toggleMenu} expanded={isMenuOpen} />

      {
        isMenuOpen && <Contains/>
      }


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
