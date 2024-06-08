import './Exercise1Keys.css';
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";
import TypingGridType1 from "../TypingGridType1/TypingGridType1.tsx";
import Key from "../Key/Key.tsx";
import Big from "../Big/Big.tsx";
import Airy from "../Airy/Airy.tsx";
import Thai from "../Thai/Thai.tsx";

function Exercise1Keys() {
  const questions = [
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
            <Airy><Thai>ผ</Thai>: <Key>z</Key></Airy>
            <Airy><Thai>ข</Thai>: <Key>-</Key></Airy>
            <Airy><Thai>ถ</Thai>: <Key>5</Key></Airy>
            <Airy><Thai>ส</Thai>: <Key>l</Key></Airy>
            <Airy><Thai>ห</Thai>: <Key>s</Key></Airy>
            <Airy><Thai>พ</Thai>: <Key>r</Key></Airy>
            <Airy><Thai>พ</Thai>: <Key>r</Key></Airy>
            <Airy><Thai>ค</Thai>: <Key>8</Key></Airy>
            <Airy><Thai>ท</Thai>: <Key>m</Key></Airy>
            <Airy><Thai>ซ</Thai>: <Key>:</Key></Airy>
            <Airy><Thai>ม</Thai>: <Key>,</Key></Airy>
            <Airy><Thai>น</Thai>: <Key>o</Key></Airy>
            <Airy><Thai>ย</Thai>: <Key>p</Key></Airy>
            <Airy><Thai>ว</Thai>: <Key>;</Key></Airy>
            <Airy><Thai>ฮ</Thai>: <Key>V</Key></Airy>
            <Airy><Thai>ก</Thai>: <Key>d</Key></Airy>
            <Airy><Thai>ป</Thai>: <Key>x</Key></Airy>
            <Airy><Thai>ต</Thai>: <Key>9</Key></Airy>
          </Big>
        </div>
      </ExerciseHead>
      <ExerciseEntry>
        <TypingGridType1>
          {questions.map((question, index) => (
            <Question
              key={index}
              type="typing"
              question={question}
              correctAnswer={question}
            />
          ))}
        </TypingGridType1>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1Keys;
