import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse from "../Sparse/Sparse.tsx";
import Voiced from "../Voiced/Voiced.tsx";
import Script from "../Script/Script.tsx";

const syllables = [
  "ผี", "ขี", "ถี", "สี", "ปี", "กี", "ตี", "ซี", "พี", "คีม", "ปีน", "ตีน", "ซีน", "ทีม", "ผีน"
];

function Exercise1x3() {

  return (
    <Exercise>
      <ExerciseHead>
        3. Прослушайте и повторяйте за диктором слоги с гласной <Script>и:</Script>.
      </ExerciseHead>
      <ExerciseEntry>
        <Voiced audioFile="Lesson01xEx03-phii-khii-thii.mp3">
          <Thai size="big">
            <Sparse>
              {syllables.join(" ")}
            </Sparse>
          </Thai>
        </Voiced>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x3;
