import './Exercise1x9.css'
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";

function Exercise1x9() {

  const questionsList = [
    'คอย', 'กาย', 'พอน', 'ตาย', 'กู', 'ตี', 'ปู', 'ทาน', 'คาว', 'ทอน', 'พาย', 'ปี', 'กา', 'ตูน'
  ];

  const answersList = [
    'Придыхательная', 'Нет', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная', 'Придыхательная'
  ];

  const options = [
    'Придыхательная', 'Нет'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        9. Прочитайте и определите, какая согласная в начале слога: придыхательная или нет.
      </ExerciseHead>
      <ExerciseEntry>

        {questionsList.map((question, index) => (
          <Question
            key={index}
            type="radio"
            question={questionsList[index]}
            correctAnswer={answersList[index]}
            options={options}
          />
        ))}

      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x9;
