import { Exercise, ExerciseEntry, ExerciseHead } from "../Exercise/Exercise";
import Texting from "../Texting/Texting";
import TextingColumns from "../TextingColumns/TextingColumns";
import { splitArrayInHalf } from "../../utils";  // Adjust the import path as needed
import TextingTable from "../TextingTable/TextingTable";  // Adjust the import path as needed

interface ExerciseData {
  question: string;
  answer: string;
}

function Exercise1x10() {
  const data: ExerciseData[] = [
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
    {question: 'หนам', answer: 'นาม'},
    {question: 'ถี', answer: 'ที'},
    {question: 'หอย', answer: 'ฮอย'},
    {question: 'หมา', answer: 'มา'},
    {question: 'ขาม', answer: 'คาม'}
  ];

  const [firstHalf, secondHalf] = splitArrayInHalf(data);

  return (
    <Exercise>
      <ExerciseHead>
        10. Преобразуйте слог с восходящим тоном (ˇ) в слог с ровным тоном:
      </ExerciseHead>
      <ExerciseEntry>
        <TextingColumns>
          <TextingTable>
            {firstHalf.map((exercise, index) => (
              <Texting
                key={index}
                question={exercise.question}
                questionInThai
                answer={exercise.answer}
                answerInThai
              />
            ))}
          </TextingTable>
          <TextingTable>
            {secondHalf.map((exercise, index) => (
              <Texting
                key={index}
                question={exercise.question}
                questionInThai
                answer={exercise.answer}
                answerInThai
              />
            ))}
          </TextingTable>
        </TextingColumns>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x10;
