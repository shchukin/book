import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import GridType1 from "../GridType1/GridType1.tsx";
import Key from "../Key/Key.tsx";
import Thai from "../Thai/Thai.tsx";
import Placeholder from "../Placeholder/Placeholder.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Typing from "../Typing/Typing.tsx";

function Exercise1x8() {
  const questions = [
    'คอ', 'ทูม', 'ยี', 'หอย', 'ตอน', 'ขา', 'ซาว', 'ผูน', 'ทีม', 'หนา', 'คาว', 'พา', 'มอม', 'สาย', 'คีม', 'ยาน', 'หาย', 'พู', 'ยอม', 'ปา', 'หนี', 'สาม', 'หมาย', 'ผี', 'ขาย', 'กอ', 'หาว', 'ขอม', 'สอน', 'พาย', 'หยาม', 'นาน', 'ขู', 'หวี', 'ฮา', 'ทอย', 'สี', 'ถอน', 'หนู', 'มา', 'หวาน', 'ผาว', 'นาย', 'ทอน', 'ขาว', 'ซอ', 'สาว', 'ยู', 'ถาน', 'ขูน', 'วาว'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        8. Наберите текст. Гласные на клавиатуре:
        <div>
            <Sparse>
              <SparseItem><Thai size="big"><Placeholder/>า</Thai>: <Key size="big">-</Key></SparseItem>
              <SparseItem><Thai size="big"><Placeholder/>อ</Thai>: <Key size="big">v</Key></SparseItem>
              <SparseItem><Thai size="big"><Placeholder/>ี</Thai>: <Key size="big">u</Key></SparseItem>
              <SparseItem><Thai size="big"><Placeholder/>ู</Thai>: <Key size="big">^</Key></SparseItem>
            </Sparse>
        </div>
      </ExerciseHead>
      <ExerciseEntry>
        <GridType1>
          {questions.map((question, index) => (
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

export default Exercise1x8;
