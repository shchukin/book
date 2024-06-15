import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Big from "../Big/Big.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

function Exercise1x2() {

  return (
    <Exercise>
      <ExerciseHead>
        2. Прослушайте и повторяйте за диктором слоги с долгими гласными восходящим тоном:
      </ExerciseHead>
      <ExerciseEntry>
        а) открытые слоги:
        <Voiced audioFile="03-pha-kha-tha.mp3">
          <Thai size="big">
            <Sparse>
              ผา ขา ถา สี หา ขอ สอ หอ ถู หู หมา หนี หยา หมอ หนอ สา หยอ หมี หวี หยี หมู หนู หวู หยู
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
      <ExerciseEntry>
        б) закрытые слоги:
        <Voiced audioFile="04-phan-kham-thau.mp3">
          <Thai size="big">
            <Sparse>
              ผาน ขาม ถาว สาย ถาย หาย ผอม ขอม ถอย สอน หอย ถูน สูน หาน
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x2;
