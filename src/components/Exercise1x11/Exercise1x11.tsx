import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Choosing from "../Choosing/Choosing.tsx";

function Exercise1x11() {

  const data = [
    { question: 'คอย', answer: 'Придыхательная' },
    { question: 'กาย', answer: 'Нет' },
    { question: 'พอน', answer: 'Придыхательная' },
    { question: 'ตาย', answer: 'Нет' },
    { question: 'กู', answer: 'Нет' },
    { question: 'ตี', answer: 'Нет' },
    { question: 'ปู', answer: 'Нет' },
    { question: 'ทาน', answer: 'Придыхательная' },
    { question: 'คาว', answer: 'Придыхательная' },
    { question: 'ทอน', answer: 'Придыхательная' },
    { question: 'พาย', answer: 'Придыхательная' },
    { question: 'ปี', answer: 'Нет' },
    { question: 'กา', answer: 'Нет' },
    { question: 'ตูน', answer: 'Нет' },
  ];

  const options = [
    'Придыхательная', 'Нет'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        11. Прочитайте и определите, какая согласная в начале слога: придыхательная или нет
      </ExerciseHead>
      <ExerciseEntry>
        {data.map((item, index) => (
          <Choosing
            key={index}
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
