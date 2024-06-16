import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Thai from "../Thai/Thai.tsx";

const data = [
  "…ถามสา",
  "ยายถาม…",
  "…สอนสา",
  "ยายสอน…",
  "…ขอตา",
  "ยายขอ…",
  "…ขอสี",
  "สาขอ…",
  "…มียา",
  "ยายมี…"
];

function Exercise1x15() {

  return (
    <Exercise>
      <ExerciseHead>
        15. Подставьте подходящие по смыслу слова из тех, которые вы уже знаете
      </ExerciseHead>
      <ExerciseEntry>
        <Thai size="big">
          <Sparse>
            {data.map((item, index) => (
              <SparseItem key={index}>{item}</SparseItem>
            ))}
          </Sparse>
        </Thai>
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x15;
