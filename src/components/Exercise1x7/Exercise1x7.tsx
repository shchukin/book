import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import GridType1 from "../GridType1/GridType1.tsx";
import Key from "../Key/Key.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Typing from "../Typing/Typing.tsx";

function Exercise1x7() {
  const data = [
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
            <SparseItem><Thai size="big">ผ</Thai>: <Key size="big">z</Key></SparseItem>
            <SparseItem><Thai size="big">ข</Thai>: <Key size="big">-</Key></SparseItem>
            <SparseItem><Thai size="big">ถ</Thai>: <Key size="big">5</Key></SparseItem>
            <SparseItem><Thai size="big">ส</Thai>: <Key size="big">l</Key></SparseItem>
            <SparseItem><Thai size="big">ห</Thai>: <Key size="big">s</Key></SparseItem>
            <SparseItem><Thai size="big">พ</Thai>: <Key size="big">r</Key></SparseItem>
            <SparseItem><Thai size="big">พ</Thai>: <Key size="big">r</Key></SparseItem>
            <SparseItem><Thai size="big">ค</Thai>: <Key size="big">8</Key></SparseItem>
            <SparseItem><Thai size="big">ท</Thai>: <Key size="big">m</Key></SparseItem>
            <SparseItem><Thai size="big">ซ</Thai>: <Key size="big">:</Key></SparseItem>
            <SparseItem><Thai size="big">ม</Thai>: <Key size="big">,</Key></SparseItem>
            <SparseItem><Thai size="big">น</Thai>: <Key size="big">o</Key></SparseItem>
            <SparseItem><Thai size="big">ย</Thai>: <Key size="big">p</Key></SparseItem>
            <SparseItem><Thai size="big">ว</Thai>: <Key size="big">;</Key></SparseItem>
            <SparseItem><Thai size="big">ฮ</Thai>: <Key size="big">V</Key></SparseItem>
            <SparseItem><Thai size="big">ก</Thai>: <Key size="big">d</Key></SparseItem>
            <SparseItem><Thai size="big">ป</Thai>: <Key size="big">x</Key></SparseItem>
            <SparseItem><Thai size="big">ต</Thai>: <Key size="big">9</Key></SparseItem>
          </Sparse>
        </div>
      </ExerciseHead>
      <ExerciseEntry>
        <GridType1>
          {data.map((question, index) => (
            <Typing
              key={index}
              correctAnswer={question}
            />
          ))}
        </GridType1>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x7;
