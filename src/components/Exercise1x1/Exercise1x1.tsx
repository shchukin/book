import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

const data1 = [
  "กา", "กอ", "กู", "กี", "ปา", "ปอ", "ปู", "ปี", "ตา", "ตอ", "ตู", "ตี", "ซา", "ซอ", "ซี", "ฮา", "ฮอ", "มา", "มี", "มู", "วา", "ยอ", "นี", "มอ", "นู", "วอ", "ยี", "วู", "ยู", "ฮา"
];

const data2 = [
  "กาม", "กอน", "กาย", "กาว", "ตาย", "ปาน", "ปอย", "ปาม", "ปาว", "ตาว", "ตอน", "ตอม", "ตอย", "ซาน", "ซาย", "ตีน", "ปูน", "ฮาน", "ฮอม", "ฮอย"
];

function Exercise1x1() {
  return (
    <Exercise id="exercise1">
      <ExerciseHead>
        1. Прослушайте и повторяйте за диктором слоги с долгими гласными ровным тоном.
      </ExerciseHead>
      <ExerciseEntry>
        а) открытые слоги:
        <Voiced audioFile="01-kaa-taa-paa.mp3">
          <Thai size="big">
            <Sparse>
              {data1.join(" ")}
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
      <ExerciseEntry>
        б) закрытые слоги:
        <Voiced audioFile="02-kaam-kaay-taay.mp3">
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

export default Exercise1x1;
