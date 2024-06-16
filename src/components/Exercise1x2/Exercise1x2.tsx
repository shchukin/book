import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

const data1 = [
  "ผา", "ขา", "ถา", "สี", "หา", "ขอ", "สอ", "หอ", "ถู", "หู", "หมา", "หนี", "หยา", "หมอ", "หนอ", "สา", "หยอ", "หมี", "หวี", "หยี", "หมู", "หนู", "หวู", "หยู"
];

const data2 = [
  "ผาน", "ขาม", "ถาว", "สาย", "ถาย", "หาย", "ผอม", "ขอม", "ถอย", "สอน", "หอย", "ถูน", "สูน", "หาน"
];

function Exercise1x2() {
  return (
    <Exercise id="exercise2">
      <ExerciseHead>
        2. Прослушайте и повторяйте за диктором слоги с долгими гласными восходящим тоном:
      </ExerciseHead>
      <ExerciseEntry>
        а) открытые слоги:
        <Voiced audioFile="03-pha-kha-tha.mp3">
          <Thai size="big">
            <Sparse>
              {data1.join(" ")}
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
      <ExerciseEntry>
        б) закрытые слоги:
        <Voiced audioFile="04-phan-kham-thau.mp3">
          <Thai size="big">
            <Sparse>
              {data2.join(" ")}
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x2;
