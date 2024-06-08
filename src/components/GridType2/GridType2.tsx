import './GridType2.css'
import {ReactNode} from "react";

type GridType2Props = {
  children: ReactNode
}

function GridType2({children}: GridType2Props) {

  return (
    <span className="grid-type-2">
      {children}
    </span>
  )
}

export default GridType2;
