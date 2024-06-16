import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

const data = [
  "ผา – พา",
  "ขอ – คอ",
  "ถี – ที",
  "สู – ซู",
  "หา – ฮา",
  "ขอม – คอม",
  "ถาว – ทาว",
  "สอย – ซอย",
  "หาย – ฮาย",
  "หนา – นา",
  "หมี – มี",
  "หวาน – วาน",
  "หยอ – ยอ"
];

function Exercise1x6() {

  return (
    <Exercise>
      <ExerciseHead>
        6. Прослушайте и повторите за диктором пары слогов восходящим и ровным тоном.
      </ExerciseHead>
      <ExerciseEntry>
        <Voiced audioFile="08-phaa-phaa-thau-thau.mp3">
          <Thai size="big">
            <Sparse>
              {data.map((item, index) => (
                <SparseItem key={index}>{item}</SparseItem>
              ))}
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x6;
