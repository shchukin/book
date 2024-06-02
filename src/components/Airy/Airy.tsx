import './Airy.css'
import {ReactNode} from "react";

type AiryProps = {
  children: ReactNode
}

function Airy({children}: AiryProps) {

  return (
    <span className="airy">
      {children}
    </span>
  )
}

export default Airy;
