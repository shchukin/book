import './Exercise1x12.css'
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";
import GridType2 from "../GridType2/GridType2.tsx";

function Exercise1x12() {

  const questionsAndAnswers = [
    { question: 'т/тха:м', answer: 'ทาม' },
    { question: 'к/кха:й', answer: 'คาย' },
    { question: 'к/кхɔ:н', answer: 'กอน' },
    { question: 'п/пха:н', answer: 'ปาน' },
    { question: 'т/тхи:н', answer: 'ตีน' },
    { question: 'п/пха', answer: 'ผา' },
    { question: 'т/тхи:м', answer: 'ทีม' },
    { question: 'п/пху:н', answer: 'ผูน' },
    { question: 'т/тхɔ:', answer: 'ตอ' },
    { question: 'к/кха:н', answer: 'กาน' },
    { question: 'п/пхи:н', answer: 'ผีน' },
    { question: 'п/пху:н', answer: 'ผูน' },
  ];

  return (
    <Exercise>
      <ExerciseHead>
        12. Прослушайте запись, определите придыхательную или непридыхательную согласную в начале слога, запишите по-тайски.
      </ExerciseHead>
      <ExerciseEntry>
        <GridType2>
          {questionsAndAnswers.map((item, index) => (
            <Question
              type="text"
              key={index}
              question={item.question}
              correctAnswer={item.answer}
              maxLength={4}
            />
          ))}
        </GridType2>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x12;
