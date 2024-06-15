import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Big from "../Big/Big.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

function Exercise1x4() {

  return (
    <Exercise>
      <ExerciseHead>
        4. Прослушайте и повторяйте за диктором пары слогов, которые различаются непридыхательными и придыхательными согласными в начале слога:
      </ExerciseHead>
      <ExerciseEntry>
        <Voiced audioFile="06-kaa-khaa-kaay-khaay.mp3">
          <Big>
            <Thai>
              <Sparse>
                <SparseItem>กา – คา</SparseItem>
                <SparseItem>ตี – ที</SparseItem>
                <SparseItem>ปอ – พอ</SparseItem>
                <SparseItem>ตู – ทู</SparseItem>
                <SparseItem>ปี – พี</SparseItem>
                <SparseItem>กาย – คาย</SparseItem>
                <SparseItem>ปาว – พาว</SparseItem>
                <SparseItem>ปูม – พูม</SparseItem>
                <SparseItem>ตาว – ทาว</SparseItem>
                <SparseItem>กอย – คอย</SparseItem>
              </Sparse>
            </Thai>
          </Big>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x4;
