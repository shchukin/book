import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import GridType2 from "../GridType2/GridType2.tsx";
import Texting from "../Texting/Texting.tsx";

function Exercise1x10() {

  const questionsList = ['ผี', 'ขาว', 'สอย', 'หนู', 'ขาย', 'หวาน', 'ขอ', 'ผาย', 'หมี', 'ถู', 'หยา', 'ถอน', 'หนาย', 'ถอน', 'หวาว', 'หนาม', 'ถี', 'หอย', 'หมา', 'ขาม'];

  const answersList = ['พี', 'คาว', 'ซอย', 'นู', 'คาย', 'วาน', 'คอ', 'พาย', 'มี', 'ทู', 'ยา', 'ทอน', 'นาย', 'ทอน', 'วาว', 'นาม', 'ที', 'ฮอย', 'มา', 'คาม'];

  return (
    <Exercise>
      <ExerciseHead>
        10. Преобразуйте слог с восходящим тоном (ˇ) в слог с ровным тоном:
      </ExerciseHead>
      <ExerciseEntry>
        <GridType2>
          {questionsList.map((question, index) => (
            <Texting
              key={index}
              question={question}
              answer={answersList[index]}
              maxLength={4}
            />
          ))}
        </GridType2>

      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x10;
