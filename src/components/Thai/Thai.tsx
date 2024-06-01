import './Thai.css'
import {ReactNode} from "react";

type ThaiProps = {
  children: ReactNode
}

function Thai({children}: ThaiProps) {

  return (
    <span className="thai">
      {children}
    </span>
  )
}

export default Thai;
