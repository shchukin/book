import './Nobr.css'
import {ReactNode} from "react";

type NobrProps = {
  children: ReactNode
}

function Nobr({children}: NobrProps) {

  return (
    <span className="nobr">
      /{children}/
    </span>
  )
}

export default Nobr;
