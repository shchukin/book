import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Thai from "../Thai/Thai.tsx";

function Exercise1x16() {

  return (
    <Exercise>
      <ExerciseHead>
        16. В данных предложениях переставьте местами субъект и объект, обратите внимание на то, как изменились их функции в предложении. Исходные и полученные предложения переведите
      </ExerciseHead>
      <ExerciseEntry>
        <Thai size="big">
          <Sparse>
            <SparseItem>สาถามยาม</SparseItem>
            <SparseItem>ยายสอนหนู</SparseItem>
            <SparseItem>สาขอตา</SparseItem>
            <SparseItem>สามีตา</SparseItem>
          </Sparse>
        </Thai>
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x16;
