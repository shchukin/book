import './Exercise1x8.css'
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";

function Exercise1x8() {

  const questionsList = ['ผี', 'ขาว', 'สอย', 'หนู', 'ขาย', 'หวาน', 'ขอ', 'ผาย', 'หมี', 'ถู', 'หยา', 'ถอน', 'หนาย', 'ถอน', 'หวาว', 'หนาม', 'ถี', 'หอย', 'หมา', 'ขาม'];

  const answersList = ['พี', 'คาว', 'ซอย', 'นู', 'คาย', 'วาน', 'คอ', 'พาย', 'มี', 'ทู', 'ยา', 'ทอน', 'นาย', 'ทอน', 'วาว', 'นาม', 'ที', 'ฮอย', 'มา', 'คาม'];

  return (
    <Exercise>
      <ExerciseHead>
        8. Преобразуйте слог с восходящим тоном (ˇ) в слог с ровным тоном:
      </ExerciseHead>
      <ExerciseEntry>

        {questionsList.map((question, index) => (
          <Question
            key={index}
            question={question}
            type="text"
            correctAnswer={answersList[index]}
            maxLength={4}
          />
        ))}

      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x8;
