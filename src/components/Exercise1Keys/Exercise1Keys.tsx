import './Exercise1Keys.css';
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";
import GridType1 from "../GridType1/GridType1.tsx";
import Key from "../Key/Key.tsx";
import Big from "../Big/Big.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {Pair} from "../Sparse/Sparse.tsx";

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
          <Sparse>
            <Big>
              <Pair><Thai>ผ</Thai>: <Key>z</Key></Pair>
              <Pair><Thai>ข</Thai>: <Key>-</Key></Pair>
              <Pair><Thai>ถ</Thai>: <Key>5</Key></Pair>
              <Pair><Thai>ส</Thai>: <Key>l</Key></Pair>
              <Pair><Thai>ห</Thai>: <Key>s</Key></Pair>
              <Pair><Thai>พ</Thai>: <Key>r</Key></Pair>
              <Pair><Thai>พ</Thai>: <Key>r</Key></Pair>
              <Pair><Thai>ค</Thai>: <Key>8</Key></Pair>
              <Pair><Thai>ท</Thai>: <Key>m</Key></Pair>
              <Pair><Thai>ซ</Thai>: <Key>:</Key></Pair>
              <Pair><Thai>ม</Thai>: <Key>,</Key></Pair>
              <Pair><Thai>น</Thai>: <Key>o</Key></Pair>
              <Pair><Thai>ย</Thai>: <Key>p</Key></Pair>
              <Pair><Thai>ว</Thai>: <Key>;</Key></Pair>
              <Pair><Thai>ฮ</Thai>: <Key>V</Key></Pair>
              <Pair><Thai>ก</Thai>: <Key>d</Key></Pair>
              <Pair><Thai>ป</Thai>: <Key>x</Key></Pair>
              <Pair><Thai>ต</Thai>: <Key>9</Key></Pair>
            </Big>
          </Sparse>
        </div>
      </ExerciseHead>
      <ExerciseEntry>
        <GridType1>
          {questions.map((question, index) => (
            <Question
              key={index}
              type="typing"
              question={question}
              correctAnswer={question}
            />
          ))}
        </GridType1>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1Keys;
