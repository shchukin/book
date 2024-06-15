import './Exercise1KeysWords.css';
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";
import GridType1 from "../GridType1/GridType1.tsx";
import Key from "../Key/Key.tsx";
import Big from "../Big/Big.tsx";
import Thai from "../Thai/Thai.tsx";
import Placeholder from "../Placeholder/Placeholder.tsx";
import Sparse, {Pair} from "../Sparse/Sparse.tsx";

function Exercise1KeysWords() {
  const questions = [
    'คอ', 'ทูม', 'ยี', 'หอย', 'ตอน', 'ขา', 'ซาว', 'ผูน', 'ทีม', 'หนา', 'คาว', 'พา', 'มอม', 'สาย', 'คีม', 'ยาน', 'หาย', 'พู', 'ยอม', 'ปา', 'หนี', 'สาม', 'หมาย', 'ผี', 'ขาย', 'กอ', 'หาว', 'ขอม', 'สอน', 'พาย', 'หยาม', 'นาน', 'ขู', 'หวี', 'ฮา', 'ทอย', 'สี', 'ถอน', 'หนู', 'มา', 'หวาน', 'ผาว', 'นาย', 'ทอน', 'ขาว', 'ซอ', 'สาว', 'ยู', 'ถาน', 'ขูน', 'วาว'
  ];

  return (
    <Exercise>
      <ExerciseHead>
        8. Наберите текст. Гласные на клавиатуре:
        <div>
          <Sparse>
            <Big>
              <Pair><Thai><Placeholder/>า</Thai>: <Key>-</Key></Pair>
              <Pair><Thai><Placeholder/>อ</Thai>: <Key>v</Key></Pair>
              <Pair><Thai><Placeholder/>ี</Thai>: <Key>u</Key></Pair>
              <Pair><Thai><Placeholder/>ู</Thai>: <Key>^</Key></Pair>
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

export default Exercise1KeysWords;
