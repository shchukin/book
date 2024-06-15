import './Thai.css'
import {ReactNode} from "react";

type ThaiProps = {
  size?: 'big' | 'dictionary' | 'alphabet'
  children: ReactNode
}

function Thai({size, children}: ThaiProps) {

  return (
    <span className={`thai${ size ? ' thai--' + size : '' }`}>
      {children}
    </span>
  )
}

export default Thai;
