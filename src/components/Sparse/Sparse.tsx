import './Sparse.css'
import {ReactNode} from "react";

// Основной компонент -- подходит для разреживания текстовых символов и строк разделённых пробелом.
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



// Вспомогательный элемент на случай если внутри не просто текст, а теги/JSX
// В этом случае то, что нужно разделить оборачиваем в <SparseItem>...</SparseItem>,
// пробельчик добавляем конструкцией {' '} (иначе React удалит все пробелы между компонентами),
// и внутри айтемов сбрасываем word-spacing, чтобы там работала любая другая разметка.

type SparseItemProps = {
  children: ReactNode
}

function SparseItem({children}: SparseItemProps) {

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
