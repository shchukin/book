import './Exercise1Keys.css';
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";
import GridType1 from "../GridType1/GridType1.tsx";
import Key from "../Key/Key.tsx";
import Big from "../Big/Big.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";

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
            <Sparse>
              <SparseItem><Thai>ผ</Thai>: <Key>z</Key></SparseItem>
              <SparseItem><Thai>ข</Thai>: <Key>-</Key></SparseItem>
              <SparseItem><Thai>ถ</Thai>: <Key>5</Key></SparseItem>
              <SparseItem><Thai>ส</Thai>: <Key>l</Key></SparseItem>
              <SparseItem><Thai>ห</Thai>: <Key>s</Key></SparseItem>
              <SparseItem><Thai>พ</Thai>: <Key>r</Key></SparseItem>
              <SparseItem><Thai>พ</Thai>: <Key>r</Key></SparseItem>
              <SparseItem><Thai>ค</Thai>: <Key>8</Key></SparseItem>
              <SparseItem><Thai>ท</Thai>: <Key>m</Key></SparseItem>
              <SparseItem><Thai>ซ</Thai>: <Key>:</Key></SparseItem>
              <SparseItem><Thai>ม</Thai>: <Key>,</Key></SparseItem>
              <SparseItem><Thai>น</Thai>: <Key>o</Key></SparseItem>
              <SparseItem><Thai>ย</Thai>: <Key>p</Key></SparseItem>
              <SparseItem><Thai>ว</Thai>: <Key>;</Key></SparseItem>
              <SparseItem><Thai>ฮ</Thai>: <Key>V</Key></SparseItem>
              <SparseItem><Thai>ก</Thai>: <Key>d</Key></SparseItem>
              <SparseItem><Thai>ป</Thai>: <Key>x</Key></SparseItem>
              <SparseItem><Thai>ต</Thai>: <Key>9</Key></SparseItem>
            </Sparse>
          </Big>
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
