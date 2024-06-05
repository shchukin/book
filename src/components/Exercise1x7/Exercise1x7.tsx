import './Exercise1x7.css'
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";

function Exercise1x7() {

  const questionsList = [
    'พอม', 'คา', 'ทู', 'ซอน', 'ฮอ', 'ยี', 'มา', 'วี', 'นา', 'ทาม', 'วาน', 'คาย', 'มี', 'ทอน', 'ฮาย', 'พี', 'ยาม', 'นู', 'ซี', 'ฮู', 'นอน', 'มาย'
  ];

  const answersList = [
    'ผอม', 'ขา', 'ถู', 'สอน', 'หอ', 'หยี', 'หมา', 'หวี', 'หนา', 'ถาม', 'หวาน', 'ขาย', 'หมี', 'ถอน', 'หาย', 'หพี', 'หยาม', 'หนู', 'สี', 'หู', 'หนอน', 'หมาย'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        7. Преобразуйте слог с ровным тоном в слог с восходящим тоном (ˇ), заменив начальную букву в данных слогах:
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

export default Exercise1x7;
