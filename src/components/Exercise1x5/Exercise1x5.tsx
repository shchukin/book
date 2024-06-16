import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

const data = [
  "พี – ผี",
  "คา – ขา",
  "ที – ถี",
  "ซา – สา",
  "ฮา – หา",
  "ยู – หยู",
  "มี – หมี",
  "วา – หวา",
  "นาว – หนาว",
  "ยอม – หยอม",
  "คอม - ขอม",
  "ซอย - สอย",
  "ทาว – ถาว"
];

function Exercise1x5() {

  return (
    <Exercise>
      <ExerciseHead>
        5. Прослушайте и повторите за диктором пары слогов ровным и восходящим тоном.
      </ExerciseHead>
      <ExerciseEntry>
        <Voiced audioFile="Lesson01xEx05-phii-phi-khaa-khaa.mp3">
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

export default Exercise1x5;
