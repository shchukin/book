import './Exercise.css'
import {ReactNode} from "react";

type ExerciseProps = {
  children: ReactNode
}


// Exercise component
const Exercise = ({children}: ExerciseProps) => {
  return <div className="exercise">{children}</div>;
};

// ExerciseHead component
const ExerciseHead = ({children}: ExerciseProps) => {
  return <h3 className="exercise__head">{children}</h3>;
};

// ExerciseEntry component
const ExerciseEntry = ({children}: ExerciseProps) => {
  return <div className="exercise__entry">{children}</div>;
};

// Named exports for individual components
export {Exercise, ExerciseHead, ExerciseEntry};

// Default export with an object containing all components
export default {
  Exercise,
  ExerciseHead,
  ExerciseEntry,
};
