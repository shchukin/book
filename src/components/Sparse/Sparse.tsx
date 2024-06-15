import './Sparse.css'
import {ReactNode} from "react";

type SparseProps = {
  children: ReactNode
}

function Sparse({children}: SparseProps) {

  return (
    <span className="sparse">
      {children}
    </span>
  )
}

type PairProps = {
  children: ReactNode
}


// Пояснение {' '}
//
// Поскольку React удаляет все текстовые разделители между компонентами, вывод типа такого:
// <Pair>...</Pair> <Pair>...</Pair> <Pair>...</Pair>
// превращается в
// <span className="Pair">...</span><span className="Pair">...</span><span className="Pair">...</span>
// Пробелы между компонентами уничтожаются. А они критически важны. Во-первых для переноса
// компонентов на новую строку (в Safari, например, это превращается в бесконечную линию).
// Во-вторых для лучшего форматирования в контексте word-spacing: 16px и text-wrap: balance
// Добавляем эти пробелы вручную при помощи {' '}

function SparseItem({children}: PairProps) {

  return (
    <>
      {' '}
      <span className="sparse__item">
        {children}
      </span>
      {' '}
    </>
  )
}

export {SparseItem};

export default Sparse;
