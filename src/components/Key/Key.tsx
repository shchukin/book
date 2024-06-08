import './Key.css'
import {ReactNode} from "react";

type KeyProps = {
  children: ReactNode
}

function Key({children}: KeyProps) {

  return (
    <kbd className="key">
      {children}
    </kbd>
  )
}

export default Key;
