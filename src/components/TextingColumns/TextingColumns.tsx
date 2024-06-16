import './TextingColumns.css'
import {ReactNode} from "react";

type TextingColumnsProps = {
  children: ReactNode
}

function TextingColumns({children}: TextingColumnsProps) {

  return (
    <div className="texting-columns">
      {children}
    </div>
  )
}

export default TextingColumns;
