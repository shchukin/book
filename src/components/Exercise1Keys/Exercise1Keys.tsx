import './Exercise1Keys.css';
import { Exercise, ExerciseEntry, ExerciseHead } from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";

function Exercise1Keys() {
  const questionsList = [
    'ผ ผ ผ ผ', 'ข ข ข ข', 'ถ ถ ถ ถ', 'ส ส ส ส', 'ห ห ห ห', 'พ พ พ พ', 'ค ค ค ค', 'ท ท ท ท',
    'ซ ซ ซ ซ', 'ม ม ม ม', 'น น น น', 'ย ย ย ย', 'ว ว ว ว', 'ฮ ฮ ฮ ฮ', 'ก ก ก ก', 'ป ป ป ป',
    'ต ต ต ต'
  ];

  const answersList = [
    'ผ ผ ผ ผ', 'ข ข ข ข', 'ถ ถ ถ ถ', 'ส ส ส ส', 'ห ห ห ห', 'พ พ พ พ', 'ค ค ค ค', 'ท ท ท ท',
    'ซ ซ ซ ซ', 'ม ม ม ม', 'น น น น', 'ย ย ย ย', 'ว ว ว ว', 'ฮ ฮ ฮ ฮ', 'ก ก ก ก', 'ป ป ป ป',
    'ต ต ต ต'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        7. Преобразуйте слог с ровным тоном в слог с восходящим тоном (ˇ), заменив начальную букву в данных слогах:
      </ExerciseHead>
      <ExerciseEntry>
        {questionsList.map((question, index) => (
          <Question
            key={index}
            type="typing"
            question={questionsList[index]}
            correctAnswer={answersList[index]}
          />
        ))}
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1Keys;