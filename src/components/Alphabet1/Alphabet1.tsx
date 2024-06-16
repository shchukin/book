import Heading from "../Heading/Heading.tsx";
import Row from "../Row/Row.tsx";
import Thai from "../Thai/Thai.tsx";
import Script from "../Script/Script.tsx";
import Placeholder from "../Placeholder/Placeholder.tsx";

function Alphabet1() {

  return (
    <>
      <Heading level={2}>
        Буквы высокого класса
      </Heading>

      <Row>
        <Thai size="alphabet">ผ</Thai> <Script>пхɔ:ˇ</Script> — «пчела» <Script>пхынг^</Script>
      </Row>

      <Row>
        <Thai size="alphabet">ข</Thai> <Script>кхɔ:ˇ</Script> — «яйцо» <Script>кхай`</Script>
      </Row>

      <Row>
        <Thai size="alphabet">ถ</Thai> <Script>тхɔ:ˇ</Script> — «пакет»<Script>тхунгˇ</Script>
      </Row>

      <Row>
        <Thai size="alphabet">ส</Thai> <Script>сɔ:ˇ</Script> — «тигр» <Script>сы:аˇ</Script>
      </Row>

      <Row>
        <Thai size="alphabet">ห</Thai> <Script>хɔ:ˇ</Script> — «ящик» <Script>хи:п`</Script>
      </Row>

      <Row>
        <Thai size="big">ผ ข ถ ส ห</Thai>
      </Row>


      <Heading level={2}>
        Буквы низкого класса
      </Heading>

      <Row>
        <Thai size="alphabet">พ</Thai> <Script>пхɔ:</Script> — «чаша», точнее, основание для подношений, <Script>пха:н</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ค</Thai> <Script>кхɔ:</Script> — «буйвол» <Script>кхва:й</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ท</Thai> <Script>тхɔ:</Script> — «военный» <Script>тхаʹха:нˇ</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ซ</Thai> <Script>сɔ:</Script> — «цепь» <Script>со: ˆ</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ม</Thai> <Script>мɔ:</Script> — «лошадь» <Script>ма: ʹ</Script>
      </Row>
      <Row>
        <Thai size="alphabet">น</Thai> <Script>нɔ:</Script> — «мышь» <Script>ну:ˇ</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ย</Thai> <Script>йɔ:</Script> — «Якшас», мифологический персонаж <Script>йакʹ</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ว</Thai> <Script>вɔ:</Script> — «кольцо» <Script>вэ:нˇ</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ฮ</Thai> <Script>хɔ:</Script> — «филин» <Script>нокʹху:кˆ</Script>
      </Row>

      <Row>
        <Thai size="big">พ ค ท ซ ม น ย ว ฮ</Thai>
      </Row>


      <Heading level={2}>Буквы среднего класса</Heading>

      <Row>
        <Thai size="alphabet">ก</Thai> <Script>кɔ:</Script> — «курица» <Script>кай`</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ป</Thai> <Script>пɔ:</Script> — «рыба» <Script>пла:</Script>
      </Row>
      <Row>
        <Thai size="alphabet">ต</Thai> <Script>тɔ:</Script> — «черепаха» <Script>тау`</Script>
      </Row>

      <Row>
        <Thai size="big">ก ป ต</Thai>
      </Row>


      <Heading level={2}>Долгие гласные</Heading>

      <Row>
        <Thai size="alphabet"><Placeholder/>า</Thai> <Script>aː</Script> — Знак долгой гласной <Script>aː</Script>
      </Row>
      <Row>
        <Thai size="alphabet"><Placeholder/>อ</Thai> <Script>ɔː</Script> — знак долгой гласной <Script>ɔː</Script>
      </Row>
      <Row>
        <Thai size="alphabet"><Placeholder/>ี</Thai> <Script>иː</Script> — знак гласной <Script>иː</Script>
      </Row>
      <Row>
        <Thai size="alphabet"><Placeholder/>ู</Thai> <Script>уː</Script> — знак гласной <Script>у:</Script>
      </Row>

      <Row>
        <Thai size="big">กา กอ กี กู</Thai>
      </Row>

    </>
  )
}

export default Alphabet1;
