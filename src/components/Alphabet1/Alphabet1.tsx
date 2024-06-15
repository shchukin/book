import Heading from "../Heading/Heading.tsx";
import Row from "../Row/Row.tsx";
import Big from "../Big/Big.tsx";
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
        <Big><Thai>ผ</Thai></Big> <Script>пхɔ:ˇ</Script> — «пчела» <Script>пхынг^</Script>
      </Row>

      <Row>
        <Big><Thai>ข</Thai></Big> <Script>кхɔ:ˇ</Script> — «яйцо» <Script>кхай`</Script>
      </Row>

      <Row>
        <Big><Thai>ถ</Thai></Big> <Script>тхɔ:ˇ</Script> — «пакет»<Script>тхунгˇ</Script>
      </Row>

      <Row>
        <Big><Thai>ส</Thai></Big> <Script>сɔ:ˇ</Script> — «тигр» <Script>сы:аˇ</Script>
      </Row>

      <Row>
        <Big><Thai>ห</Thai></Big> <Script>хɔ:ˇ</Script> — «ящик» <Script>хи:п`</Script>
      </Row>

      <Row>
        <Big>
          <Thai>ผ ข ถ ส ห</Thai>
        </Big>
      </Row>


      <Heading level={2}>
        Буквы низкого класса
      </Heading>

      <Row>
        <Big><Thai>พ</Thai></Big> <Script>пхɔ:</Script> — «чаша», точнее, основание для подношений, <Script>пха:н</Script>
      </Row>
      <Row>
        <Big><Thai>ค</Thai></Big> <Script>кхɔ:</Script> — «буйвол» <Script>кхва:й</Script>
      </Row>
      <Row>
        <Big><Thai>ท</Thai></Big> <Script>тхɔ:</Script> — «военный» <Script>тхаʹха:нˇ</Script>
      </Row>
      <Row>
        <Big><Thai>ซ</Thai></Big> <Script>сɔ:</Script> — «цепь» <Script>со: ˆ</Script>
      </Row>
      <Row>
        <Big><Thai>ม</Thai></Big> <Script>мɔ:</Script> — «лошадь» <Script>ма: ʹ</Script>
      </Row>
      <Row>
        <Big><Thai>น</Thai></Big> <Script>нɔ:</Script> — «мышь» <Script>ну:ˇ</Script>
      </Row>
      <Row>
        <Big><Thai>ย</Thai></Big> <Script>йɔ:</Script> — «Якшас», мифологический персонаж <Script>йакʹ</Script>
      </Row>
      <Row>
        <Big><Thai>ว</Thai></Big> <Script>вɔ:</Script> — «кольцо» <Script>вэ:нˇ</Script>
      </Row>
      <Row>
        <Big><Thai>ฮ</Thai></Big> <Script>хɔ:</Script> — «филин» <Script>нокʹху:кˆ</Script>
      </Row>

      <Row>
        <Big>
          <Thai>พ ค ท ซ ม น ย ว ฮ</Thai>
        </Big>
      </Row>


      <Heading level={2}>Буквы среднего класса</Heading>

      <Row>
        <Big><Thai>ก</Thai></Big> <Script>кɔ:</Script> — «курица» <Script>кай`</Script>
      </Row>
      <Row>
        <Big><Thai>ป</Thai></Big> <Script>пɔ:</Script> — «рыба» <Script>пла:</Script>
      </Row>
      <Row>
        <Big><Thai>ต</Thai></Big> <Script>тɔ:</Script> — «черепаха» <Script>тау`</Script>
      </Row>

      <Row>
        <Big>
          <Thai>ก ป ต</Thai>
        </Big>
      </Row>


      <Heading level={2}>Долгие гласные</Heading>

      <Row>
        <Big><Thai><Placeholder/>า</Thai></Big> <Script>aː</Script> — Знак долгой гласной <Script>aː</Script>
      </Row>
      <Row>
        <Big><Thai><Placeholder/>อ</Thai></Big> <Script>ɔː</Script> — знак долгой гласной <Script>ɔː</Script>
      </Row>
      <Row>
        <Big><Thai><Placeholder/>ี</Thai></Big> <Script>иː</Script> — знак гласной <Script>иː</Script>
      </Row>
      <Row>
        <Big><Thai><Placeholder/>ู</Thai></Big> <Script>уː</Script> — знак гласной <Script>у:</Script>
      </Row>

      <Row>
        <Big>
          <Thai>กา กอ กี กู</Thai>
        </Big>
      </Row>

    </>
  )
}

export default Alphabet1;
