import './Row.css'
import {ReactNode} from "react";

type RowProps = {
  children: ReactNode
}

function Row({children}: RowProps) {

  return (
    <div className="row">
      {children}
    </div>
  )
}

export default Row;
