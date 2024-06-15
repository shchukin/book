import './Key.css'
import {ReactNode} from "react";

type KeyProps = {
  size?: 'big'
  children: ReactNode
}

function Key({size, children}: KeyProps) {

  return (
    <kbd className={`key${ size ? ' key--' + size : '' }`}>
      {children}
    </kbd>
  )
}

export default Key;
