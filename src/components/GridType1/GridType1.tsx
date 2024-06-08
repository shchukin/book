import './GridType1.css'
import {ReactNode} from "react";

type GridType1Props = {
  children: ReactNode
}

function GridType1({children}: GridType1Props) {

  return (
    <span className="grid-type-1">
      {children}
    </span>
  )
}

export default GridType1;
