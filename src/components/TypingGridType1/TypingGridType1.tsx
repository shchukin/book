import './TypingGridType1.css'
import {ReactNode} from "react";

type TypingGridType1Props = {
  children: ReactNode
}

function TypingGridType1({children}: TypingGridType1Props) {

  return (
    <span className="TypingGridType1">
      {children}
    </span>
  )
}

export default TypingGridType1;
