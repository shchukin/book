import './TextingTable.css'
import {ReactNode} from "react";

type TextingTableProps = {
  children: ReactNode
}

function TextingTable({children}: TextingTableProps) {

  return (
    <span className="texting-table">
      {children}
    </span>
  )
}

export default TextingTable;
