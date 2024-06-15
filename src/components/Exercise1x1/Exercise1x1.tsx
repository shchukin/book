import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Big from "../Big/Big.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

function Exercise1x1() {

  return (
    <Exercise>
      <ExerciseHead>
        1. Прослушайте и повторяйте за диктором слоги с долгими гласными ровным тоном.
      </ExerciseHead>
      <ExerciseEntry>
        а) открытые слоги:
        <Voiced audioFile="01-kaa-taa-paa.mp3">
          <Thai size="big">
            <Sparse>
              กา กอ กู กี ปา ปอ ปู ปี ตา ตอ ตู ตี ซา ซอ ซี ฮา ฮอ มา มี มู วา ยอ นี มอ นู วอ ยี วู ยู ฮา
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
      <ExerciseEntry>
        б) закрытые слоги:
        <Voiced audioFile="02-kaam-kaay-taay.mp3">
          <Thai size="big">
            <Sparse>
              กาม กอน กาย กาว ตาย ปาน ปอย ปาม ปาว ตาว ตอน ตอม ตอย ซาน ซาย ตีน ปูน ฮาน ฮอม ฮอย
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x1;
