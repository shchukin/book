import './Voiced.css'
import {ReactNode} from "react";

type VoicedProps = {
  children: ReactNode,
  audioFile: string
}

function Voiced({children, audioFile}: VoicedProps) {

  return (
    <div className="voiced">
      <div className="voiced__entry">
        {children}
      </div>
      <div className="voiced__audio">
        <audio controls src={'/' + audioFile}></audio>
      </div>
    </div>
  )
}

export default Voiced;
