import './Big.css'
import {ReactNode} from "react";

type BigProps = {
  children: ReactNode
}

function Big({children}: BigProps) {

  return (
    <span className="big">
      {children}
    </span>
  )
}

export default Big;
