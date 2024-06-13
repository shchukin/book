import './Exercise1x11.css'
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";

function Exercise1x11() {

  const questionsAndAnswers = [
    { question: 'คอ', answer: 'Ровный' },
    { question: 'หอย', answer: 'Восходящий' },
    { question: 'ขา', answer: 'Восходящий' },
    { question: 'สอน', answer: 'Восходящий' },
    { question: 'ผูน', answer: 'Восходящий' },
    { question: 'ทีม', answer: 'Ровный' },
    { question: 'ขาย', answer: 'Восходящий' },
    { question: 'ตอน', answer: 'Ровный' },
    { question: 'หนา', answer: 'Восходящий' },
    { question: 'คาว', answer: 'Ровный' },
    { question: 'พา', answer: 'Ровный' },
    { question: 'สาย', answer: 'Восходящий' },
  ];

  const options = [
    'Ровный', 'Восходящий'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        13. Определите, каким тоном произносится слог
      </ExerciseHead>
      <ExerciseEntry>
        {questionsAndAnswers.map((item, index) => (
          <Question
            key={index}
            type="radio"
            question={item.question}
            correctAnswer={item.answer}
            options={options}
          />
        ))}
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x11;
