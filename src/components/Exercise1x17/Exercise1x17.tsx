import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Thai from "../Thai/Thai.tsx";

function Exercise1x17() {

  return (
    <Exercise>
      <ExerciseHead>
        17. Переведите
      </ExerciseHead>
      <ExerciseEntry>
          Дедушка спрашивает бабушку. Бабушка спрашивает сторожа.
          Малышка просит бабушку. Са просит дедушку.
          Бабушка просит подушку. Сторож просит краску.
          Са учит малышку. Дедушка учит сторожа.
          Бабушка взбивает подушку.
          Бабушка намазала шею.
          Сторож втирает лекарство. Дедушка красит.
          Дедушка продает свинину.
          У бабушки есть краски. У Са есть лекарство.
          Бабушка спит. Дедушка мерзнет.
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x17;
