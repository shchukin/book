import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

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
              <SparseItem>ผา – พา</SparseItem>
              <SparseItem>ขอ – คอ</SparseItem>
              <SparseItem>ถี – ที</SparseItem>
              <SparseItem>สู – ซู</SparseItem>
              <SparseItem>หา – ฮา</SparseItem>
              <SparseItem>ขอม – คอม</SparseItem>
              <SparseItem>ถาว – ทาว</SparseItem>
              <SparseItem>สอย – ซอย</SparseItem>
              <SparseItem>หาย – ฮาย</SparseItem>
              <SparseItem>หนา – นา</SparseItem>
              <SparseItem>หมี – มี</SparseItem>
              <SparseItem>หวาน – วาน</SparseItem>
              <SparseItem>หยอ – ยอ</SparseItem>
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x6;
