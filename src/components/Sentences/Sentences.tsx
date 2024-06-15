import './Sentences.css'
import {ReactNode} from "react";

type SentencesProps = {
  children: ReactNode
}

function Sentences({children}: SentencesProps) {

  return (
    <span className="sentences">
      {children}
    </span>
  )
}

export default Sentences;
