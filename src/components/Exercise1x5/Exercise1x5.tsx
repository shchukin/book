import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Big from "../Big/Big.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

function Exercise1x5() {

  return (
    <Exercise>
      <ExerciseHead>
        5. Прослушайте и повторите за диктором пары слогов ровным и восходящим тоном.
      </ExerciseHead>
      <ExerciseEntry>
        <Voiced audioFile="07-phii-phii-khaa-khaa.mp3">
          <Big>
            <Thai>
              <Sparse>
                <SparseItem>พี – ผี</SparseItem>
                <SparseItem>คา – ขา</SparseItem>
                <SparseItem>ที – ถี</SparseItem>
                <SparseItem>ซา – สา</SparseItem>
                <SparseItem>ฮา – หา</SparseItem>
                <SparseItem>ยู – หยู</SparseItem>
                <SparseItem>มี – หมี</SparseItem>
                <SparseItem>วา – หวา</SparseItem>
                <SparseItem>นาว – หนาว</SparseItem>
                <SparseItem>ยอม – หยอม</SparseItem>
                <SparseItem>คอม - ขอม</SparseItem>
                <SparseItem>ซอย -สอย</SparseItem>
                <SparseItem>ทาว – ถาว</SparseItem>
              </Sparse>
            </Thai>
          </Big>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x5;
