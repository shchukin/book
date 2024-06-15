import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import GridType2 from "../GridType2/GridType2.tsx";
import Texting from "../Texting/Texting.tsx";

function Exercise1x9() {

  const questionsList = [
    'พอม', 'คา', 'ทู', 'ซอน', 'ฮอ', 'ยี', 'มา', 'วี', 'นา', 'ทาม', 'วาน', 'คาย', 'มี', 'ทอน', 'ฮาย', 'พี', 'ยาม', 'นู', 'ซี', 'ฮู', 'นอน', 'มาย'
  ];

  const answersList = [
    'ผอม', 'ขา', 'ถู', 'สอน', 'หอ', 'หยี', 'หมา', 'หวี', 'หนา', 'ถาม', 'หวาน', 'ขาย', 'หมี', 'ถอน', 'หาย', 'หพี', 'หยาม', 'หนู', 'สี', 'หู', 'หนอน', 'หมาย'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        9. Преобразуйте слог с ровным тоном в слог с восходящим тоном (ˇ), заменив начальную букву в данных слогах. Напечатайте весь слог:
      </ExerciseHead>
      <ExerciseEntry>
        <GridType2>
          {questionsList.map((question, index) => (
            <Texting
              key={index}
              question={question}
              correctAnswer={answersList[index]}
              maxLength={4}
            />
          ))}
        </GridType2>
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x9;
