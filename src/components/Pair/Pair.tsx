import './Pair.css'
import {ReactNode} from "react";

type PairProps = {
  children: ReactNode
}

function Pair({children}: PairProps) {

  return (
    <span className="Pair">
      {children}
    </span>
  )
}

export default Pair;
