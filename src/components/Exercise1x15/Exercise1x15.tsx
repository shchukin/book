import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Thai from "../Thai/Thai.tsx";

function Exercise1x15() {

  return (
    <Exercise>
      <ExerciseHead>
        15. Подставьте подходящие по смыслу слова из тех, которые вы уже знаете.
      </ExerciseHead>
      <ExerciseEntry>
        <Thai size="big">
          <Sparse>
            <SparseItem>…ถามสา</SparseItem>
            <SparseItem>ยายถาม…</SparseItem>
            <SparseItem>…สอนสา</SparseItem>
            <SparseItem>ยายสอน…</SparseItem>
            <SparseItem>…ขอตา</SparseItem>
            <SparseItem>ยายขอ…</SparseItem>
            <SparseItem>…ขอสี</SparseItem>
            <SparseItem>สาขอ…</SparseItem>
            <SparseItem>…มียา</SparseItem>
            <SparseItem>ยายมี…</SparseItem>
          </Sparse>
        </Thai>
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x15;
