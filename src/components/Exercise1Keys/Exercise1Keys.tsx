import './Exercise1Keys.css';
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";
import TypingGridType1 from "../TypingGridType1/TypingGridType1.tsx";
import Key from "../Key/Key.tsx";
import Big from "../Big/Big.tsx";
import Airy from "../Airy/Airy.tsx";

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
        7. Наберите текст. Значки на клавиатуре:
        <div>
          <Big>
            <Airy>ผ: <Key>z</Key></Airy>
            <Airy>ข: <Key>-</Key></Airy>
            <Airy>ถ: <Key>5</Key></Airy>
            <Airy>ส: <Key>l</Key></Airy>
            <Airy>ห: <Key>s</Key></Airy>
            <Airy>พ: <Key>r</Key></Airy>
            <Airy>พ: <Key>r</Key></Airy>
            <Airy>ค: <Key>8</Key></Airy>
            <Airy>ท: <Key>m</Key></Airy>
            <Airy>ซ: <Key>:</Key></Airy>
            <Airy>ม: <Key>,</Key></Airy>
            <Airy>น: <Key>o</Key></Airy>
            <Airy>ย: <Key>p</Key></Airy>
            <Airy>ว: <Key>;</Key></Airy>
            <Airy>ฮ: <Key>V</Key></Airy>
            <Airy>ก: <Key>d</Key></Airy>
            <Airy>ป: <Key>x</Key></Airy>
            <Airy>ต: <Key>9</Key></Airy>
          </Big>
        </div>
      </ExerciseHead>
      <ExerciseEntry>
        <TypingGridType1>
          {questionsList.map((question, index) => (
            <Question
              key={index}
              type="typing"
              question={question[index]}
              correctAnswer={answersList[index]}
            />
          ))}
        </TypingGridType1>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1Keys;
