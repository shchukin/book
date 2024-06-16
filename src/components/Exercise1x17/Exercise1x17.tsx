import { Exercise, ExerciseEntry, ExerciseHead } from "../Exercise/Exercise.tsx";
import Texting from '../Texting/Texting';

const questions = [
  { question: "Дедушка спрашивает бабушку", answer: "ตาถามยาย" },
  { question: "Бабушка спрашивает сторожа", answer: "ยายถามยาม" },
  { question: "Малышка просит бабушку", answer: "หนูขอยาย" },
  { question: "Са просит дедушку", answer: "สาขอตา" },
  { question: "Бабушка просит подушку", answer: "ยายขอหมอน" },
  { question: "Сторож просит краску", answer: "ยามขอสี" },
  { question: "Са учит малышку", answer: "สาสอนหนู" },
  { question: "Дедушка учит сторожа", answer: "ตาสอนยาม" },
  { question: "Бабушка взбивает подушку", answer: "ยายตีหมอน" },
  { question: "Бабушка намазала шею", answer: "ยายนวดคอ" },
  { question: "Сторож втирает лекарство", answer: "ยามทายา" },
  { question: "Дедушка красит", answer: "ตาทาสี" },
  { question: "Дедушка продает свинину", answer: "ตาขายหมู" },
  { question: "У бабушки есть краски", answer: "ยายมีสี" },
  { question: "У Са есть лекарство", answer: "สามียา" },
  { question: "Бабушка спит", answer: "ยายนอน" },
  { question: "Дедушка мерзнет", answer: "ตาหนาว" },
];

function Exercise1x17() {
  return (
    <Exercise>
      <ExerciseHead>
        17. Переведите, запишите ответ по-тайски
      </ExerciseHead>
      {questions.map((item, index) => (
        <ExerciseEntry key={index}>
          <Texting
            question={item.question}
            answer={item.answer}
          />
        </ExerciseEntry>
      ))}
    </Exercise>
  );
}

export default Exercise1x17;
