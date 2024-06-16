// App.tsx
import { useState } from 'react';
import './global/global-style.css';
import Heading from "./components/Heading/Heading.tsx";
import Exercise1x9 from "./components/Exercise1x9/Exercise1x9.tsx";
import Exercise1x10 from "./components/Exercise1x10/Exercise1x10.tsx";
import Exercise1x11 from "./components/Exercise1x11/Exercise1x11.tsx";
import Exercise1x8 from "./components/Exercise1x8/Exercise1x8.tsx";
import Exercise1x7 from "./components/Exercise1x7/Exercise1x7.tsx";
import Exercise1x12 from "./components/Exercise1x12/Exercise1x12.tsx";
import Exercise1x13 from "./components/Exercise1x13/Exercise1x13.tsx";
import Alphabet1 from "./components/Alphabet1/Alphabet1.tsx";
import Exercise1x6 from "./components/Exercise1x6/Exercise1x6.tsx";
import Exercise1x5 from "./components/Exercise1x5/Exercise1x5.tsx";
import Exercise1x4 from "./components/Exercise1x4/Exercise1x4.tsx";
import Exercise1x3 from "./components/Exercise1x3/Exercise1x3.tsx";
import Exercise1x2 from "./components/Exercise1x2/Exercise1x2.tsx";
import Exercise1x1 from "./components/Exercise1x1/Exercise1x1.tsx";
import Dictionary1 from "./components/Dictionary1/Dictionary1.tsx";
import Sentences1 from "./components/Sentences1/Sentences1.tsx";
import Exercise1x14 from "./components/Exercise1x14/Exercise1x14.tsx";
import Exercise1x15 from "./components/Exercise1x15/Exercise1x15.tsx";
import Exercise1x16 from "./components/Exercise1x16/Exercise1x16.tsx";
import Exercise1x17 from "./components/Exercise1x17/Exercise1x17.tsx";
import Contains from "./components/Contains/Contains.tsx";

function App() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
      <div className="container">
          <button className="burger-menu" onClick={toggleMenu}>
              ☰
          </button>
          <div className={`toc-container ${isMenuOpen ? 'open' : ''}`}>
              <Contains />
          </div>

          <Heading level={1}>
              Урок 1
          </Heading>

          <Alphabet1 />

          <br />
          <Heading level={2}>Фонетические упражнения</Heading>

          <Exercise1x1 />

          <br />
          <br />

          <Exercise1x2 />

          <br />
          <br />

          <Exercise1x3 />

          <br />
          <br />

          <Exercise1x4 />

          <br />
          <br />

          <Exercise1x5 />

          <br />
          <br />

          <Exercise1x6 />

          <br />
          <br />

          <Heading level={2}>
              Упражнения на изучение клавиатуры
          </Heading>

          <Exercise1x7 />

          <br />
          <br />

          <Exercise1x8 />

          <br />
          <br />

          <Heading level={2}>
              Упражнения на подстановку
          </Heading>

          <Exercise1x9 />

          <br />
          <br />

          <Exercise1x10 />

          <br />
          <br />
          <br />
          <br />

          <Heading level={2}>
              Проверьте себя
          </Heading>

          <Exercise1x11 />

          <br />
          <br />

          <Exercise1x12 />

          <br />
          <br />

          <Exercise1x13 />

          <br />
          <br />

          <Exercise1x14 />

          <br />
          <br />

          <Dictionary1 />

          <br />
          <br />

          <Sentences1 />

          <br />
          <br />

          <Heading level={2}>
              Грамматические упражнения
          </Heading>

          <Exercise1x15 />

          <br />
          <br />

          <Exercise1x16 />

          <br />
          <br />

          <Exercise1x17 />

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
