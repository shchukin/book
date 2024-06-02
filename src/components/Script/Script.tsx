import './Script.css'
import {ReactNode} from "react";

type ScriptProps = {
  children: ReactNode
}

function Script({children}: ScriptProps) {

  return (
    <span className="script">
      [{children}]
    </span>
  )
}

export default Script;
