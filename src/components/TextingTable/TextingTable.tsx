import './TextingTable.css'
import {ReactNode} from "react";

type TextingTableProps = {
  children: ReactNode
}

function TextingTable({children}: TextingTableProps) {

  return (
    <div className="texting-table">
      {children}
    </div>
  )
}

export default TextingTable;
