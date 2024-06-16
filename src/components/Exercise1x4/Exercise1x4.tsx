import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";

const data = [
  "กา – คา",
  "ตี – ที",
  "ปอ – พอ",
  "ตู – ทู",
  "ปี – พี",
  "กาย – คาย",
  "ปาว – พาว",
  "ปูม – พูม",
  "ตาว – ทาว",
  "กอย – คอย"
];

function Exercise1x4() {

  return (
    <Exercise>
      <ExerciseHead>
        4. Прослушайте и повторяйте за диктором пары слогов, которые различаются непридыхательными и придыхательными согласными в начале слога:
      </ExerciseHead>
      <ExerciseEntry>
        <Voiced audioFile="06-kaa-khaa-kaay-khaay.mp3">
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

export default Exercise1x4;
