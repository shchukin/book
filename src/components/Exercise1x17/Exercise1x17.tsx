import { Exercise, ExerciseEntry, ExerciseHead } from "../Exercise/Exercise.tsx";
import Texting from '../Texting/Texting';

const questions = [
  { question: "Дедушка спрашивает бабушку.", correctAnswer: "ตาถามยาย" },
  { question: "Бабушка спрашивает сторожа.", correctAnswer: "ยายถามยาม" },
  { question: "Малышка просит бабушку.", correctAnswer: "หนูขอยาย" },
  { question: "Са просит дедушку.", correctAnswer: "สาขอตา" },
  { question: "Бабушка просит подушку.", correctAnswer: "ยายขอหมอน" },
  { question: "Сторож просит краску.", correctAnswer: "ยามขอสี" },
  { question: "Са учит малышку.", correctAnswer: "สาสอนหนู" },
  { question: "Дедушка учит сторожа.", correctAnswer: "ตาสอนยาม" },
  { question: "Бабушка взбивает подушку.", correctAnswer: "ยายตีหมอน" },
  { question: "Бабушка намазала шею.", correctAnswer: "ยายนวดคอ" },
  { question: "Сторож втирает лекарство.", correctAnswer: "ยามทายา" },
  { question: "Дедушка красит.", correctAnswer: "ตาทาสี" },
  { question: "Дедушка продает свинину.", correctAnswer: "ตาขายหมู" },
  { question: "У бабушки есть краски.", correctAnswer: "ยายมีสี" },
  { question: "У Са есть лекарство.", correctAnswer: "สามียา" },
  { question: "Бабушка спит.", correctAnswer: "ยายนอน" },
  { question: "Дедушка мерзнет.", correctAnswer: "ตาหนาว" },
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
            answer={item.correctAnswer}
          />
        </ExerciseEntry>
      ))}
    </Exercise>
  );
}

export default Exercise1x17;
