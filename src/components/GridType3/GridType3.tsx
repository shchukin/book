import './GridType3.css'
import {ReactNode} from "react";

type GridType3Props = {
  children: ReactNode
}

function GridType3({children}: GridType3Props) {

  return (
    <span className="grid-type-3">
      {children}
    </span>
  )
}

export default GridType3;
