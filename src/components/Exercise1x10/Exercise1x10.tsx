import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import GridType2 from "../GridType2/GridType2.tsx";
import Texting from "../Texting/Texting.tsx";

function Exercise1x10() {

  const data = [
    {question: 'ผี', answer: 'พี'},
    {question: 'ขาว', answer: 'คาว'},
    {question: 'สอย', answer: 'ซอย'},
    {question: 'หนู', answer: 'นู'},
    {question: 'ขาย', answer: 'คาย'},
    {question: 'หวาน', answer: 'วาน'},
    {question: 'ขอ', answer: 'คอ'},
    {question: 'ผาย', answer: 'พาย'},
    {question: 'หมี', answer: 'มี'},
    {question: 'ถู', answer: 'ทู'},
    {question: 'หยา', answer: 'ยา'},
    {question: 'ถอน', answer: 'ทอน'},
    {question: 'หนาย', answer: 'นาย'},
    {question: 'ถอน', answer: 'ทอน'},
    {question: 'หวาว', answer: 'วาว'},
    {question: 'หนาม', answer: 'นาม'},
    {question: 'ถี', answer: 'ที'},
    {question: 'หอย', answer: 'ฮอย'},
    {question: 'หมา', answer: 'มา'},
    {question: 'ขาม', answer: 'คาม'}
  ];

  return (
    <Exercise>
      <ExerciseHead>
        10. Преобразуйте слог с восходящим тоном (ˇ) в слог с ровным тоном:
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
              maxLength={4}
            />
          ))}
        </GridType2>

      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x10;
