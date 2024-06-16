import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import GridType2 from "../GridType2/GridType2.tsx";
import Texting from "../Texting/Texting.tsx";

function Exercise1x9() {

  const data = [
    {question: 'พอม', answer: 'ผอม'},
    {question: 'คา', answer: 'ขา'},
    {question: 'ทู', answer: 'ถู'},
    {question: 'ซอน', answer: 'สอน'},
    {question: 'ฮอ', answer: 'หอ'},
    {question: 'ยี', answer: 'หยี'},
    {question: 'มา', answer: 'หมา'},
    {question: 'วี', answer: 'หวี'},
    {question: 'นา', answer: 'หนา'},
    {question: 'ทาม', answer: 'ถาม'},
    {question: 'วาน', answer: 'หวาน'},
    {question: 'คาย', answer: 'ขาย'},
    {question: 'มี', answer: 'หมี'},
    {question: 'ทอน', answer: 'ถอน'},
    {question: 'ฮาย', answer: 'หาย'},
    {question: 'พี', answer: 'หพี'},
    {question: 'ยาม', answer: 'หยาม'},
    {question: 'นู', answer: 'หนู'},
    {question: 'ซี', answer: 'สี'},
    {question: 'ฮู', answer: 'หู'},
    {question: 'นอน', answer: 'หนอน'},
    {question: 'มาย', answer: 'หมาย'}
  ];

  return (
    <Exercise>
      <ExerciseHead>
        9. Преобразуйте слог с ровным тоном в слог с восходящим тоном (ˇ), заменив начальную букву в данных слогах. Напечатайте весь слог:
      </ExerciseHead>
      <ExerciseEntry>
        <GridType2>
          {data.map((exercise, index) => (
            <Texting
              key={index}
              question={exercise.question}
              questionInThai
              answer={exercise.answer}
              answerInThai
            />
          ))}
        </GridType2>
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x9;
