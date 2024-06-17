import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Version from "./components/Version/Version.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Version />
  </React.StrictMode>,
)
