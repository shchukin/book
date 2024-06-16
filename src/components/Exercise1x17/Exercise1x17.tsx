import './Exercise1x17.css'
import { Exercise, ExerciseEntry, ExerciseHead } from "../Exercise/Exercise.tsx";
import Texting from '../Texting/Texting';
import TextingTable from "../TextingTable/TextingTable.tsx";

const data = [
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
        17. Переведите, напечатайте ответ по-тайски
      </ExerciseHead>
      <ExerciseEntry>
        <div className="exercise-1x17">
          <TextingTable>
            {data.map((item, index) => (
              <Texting
                key={index}
                question={item.question}
                answer={item.answer}
                answerInThai
                inputWidth={160}
              />
            ))}
          </TextingTable>
        </div>
      </ExerciseEntry>
    </Exercise>
);
}

export default Exercise1x17;
