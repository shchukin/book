import './Exercise.css';
import { ReactNode, HTMLAttributes } from "react";

type ExerciseProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

// Exercise component
const Exercise = ({ children, ...rest }: ExerciseProps) => {
  return <div className="exercise" {...rest}>{children}</div>;
};

// ExerciseHead component
const ExerciseHead = ({ children }: ExerciseProps) => {
  return <div className="exercise__head">{children}</div>;
};

// ExerciseEntry component
const ExerciseEntry = ({ children }: ExerciseProps) => {
  return <div className="exercise__entry">{children}</div>;
};

// Named exports for individual components
export { Exercise, ExerciseHead, ExerciseEntry };

// Default export with an object containing all components
export default {
  Exercise,
  ExerciseHead,
  ExerciseEntry,
};
