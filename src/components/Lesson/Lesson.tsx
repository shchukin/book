import './Lesson.css'
import {ReactNode} from "react";

type lessonProps = {
  children: ReactNode
}

function Lesson({children}: lessonProps) {

  return (
    <div className="lesson">
      {children}
    </div>
  )
}

export default Lesson;
