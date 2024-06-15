import './Sparse.css'
import {ReactNode} from "react";

type SparseProps = {
  children: ReactNode
}

function Sparse({children}: SparseProps) {

  return (
    <span className="Sparse">
      {children}
    </span>
  )
}

export default Sparse;
