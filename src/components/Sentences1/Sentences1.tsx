import Heading from "../Heading/Heading.tsx";
import Thai from "../Thai/Thai.tsx";
import Sparse, {SparseItem} from "../Sparse/Sparse.tsx";
import Sentences from "../Sentences/Sentences.tsx";

function Sentences1() {

  return (
    <>
      <Heading level={2}>
        Фразы
      </Heading>

      <Sentences>
        <Thai size="dictionary">
          <Sparse>
            <SparseItem>ตาทาสี</SparseItem>
            <SparseItem>ตาทาคอ</SparseItem>
            <SparseItem>ยายทายา</SparseItem>
            <SparseItem>ยายขายปู</SparseItem>
            <SparseItem>สาตีหมอน</SparseItem>
            <SparseItem>ตาขอหมู</SparseItem>
            <SparseItem>ตาขอยาย</SparseItem>
            <SparseItem>ยายสอนหนู</SparseItem>
            <SparseItem>ยายถามยาม</SparseItem>
            <SparseItem>ยามมีหมู</SparseItem>
            <SparseItem>ยามนอน</SparseItem>
            <SparseItem>ยายหนาว</SparseItem>
          </Sparse>
        </Thai>
      </Sentences>

    </>
  )
}

export default Sentences1;
