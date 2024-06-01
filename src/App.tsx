// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './global/global-styles/global-style.css';
import Lesson from "./components/Lesson/Lesson.tsx";
import Thai from "./components/Thai/Thai.tsx";
function App() {

  return (
    <>
      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <Lesson>
        <h1>Урок 1</h1>
        <Thai>ภกหดฟหกด</Thai>
        <p>123</p>
      </Lesson>
    </>
  )
}

export default App
