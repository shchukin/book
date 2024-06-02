// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './global/global-styles/global-style.css';
import Lesson from "./components/Lesson/Lesson.tsx";
import Thai from "./components/Thai/Thai.tsx";
import Script from "./components/Script/Script.tsx";
import Placeholder from "./components/Placeholder/Placeholder.tsx";
import {Exercise, ExerciseHead, ExerciseEntry} from './components/Exercise/Exercise.tsx';
import Voiced from "./components/Voiced/Voiced.tsx";
import Big from "./components/Big/Big.tsx";
import Airy from "./components/Airy/Airy.tsx";
import Nobr from "./components/Nobr/Nobr.tsx";
import Row from "./components/Row/Row.tsx";
import Heading from "./components/Heading/Heading.tsx";

function App() {

  return (
    <>
      <Lesson>

        <Heading level={1}>
          Урок 1
        </Heading>


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
          <Big><Thai>ฮ</Thai></Big> <Script>хɔ:</Script> — «филин» <Script>нокʹ ху:кˆ</Script>
        </Row>

        <Big><Thai>พ ค ท ซ ม น ย ว ฮ</Thai></Big>


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

        <Big><Thai>ก ป ต</Thai></Big>


        <Heading level={2}>Долгие гласные</Heading>

        <Row>
          <Big><Thai><Placeholder/>า</Thai></Big> <Script>aː</Script> — Знак долгой гласной <Script>aː</Script> располагается после согласной буквы.
        </Row>
        <Row>
          <Big><Thai><Placeholder/>อ</Thai></Big> <Script>ɔː</Script> — знак долгой гласной <Script>ɔː</Script> располагается после согласной буквы.
        </Row>
        <Row>
          <Big><Thai><Placeholder/>ี</Thai></Big> <Script>иː</Script> — знак гласной <Script>иː</Script> располагается над согласной буквой.
        </Row>
        <Row>
          <Big><Thai><Placeholder/>ู</Thai></Big> <Script>уː</Script> — знак гласной <Script>у:</Script> располагается под согласной буквой под правым краем.
        </Row>

        <Big><Thai>กา กอ กี กู</Thai></Big>


        <Heading level={2}>Фонетические упражнения</Heading>

        <Exercise>
          <ExerciseHead>
            1. Прослушайте и повторяйте за диктором слоги с долгими гласными ровным тоном.
          </ExerciseHead>
          <ExerciseEntry>
            а) открытые слоги:
            <Voiced audioFile="01-kaa-taa-paa.mp3">
              <Big>
                <Thai>
                  <Airy>กา</Airy>
                  <Airy>ตา</Airy>
                  <Airy>ปา</Airy>
                  <Airy>ซา</Airy>
                  <Airy>ยา</Airy>
                  <Airy>มา</Airy>
                  <Airy>วา</Airy>
                  <Airy>นา</Airy>
                  <Airy>กอ</Airy>
                  <Airy>ปอ</Airy>
                  <Airy>ตอ</Airy>
                  <Airy>ซอ</Airy>
                  <Airy>มอ</Airy>
                  <Airy>ยอ</Airy>
                  <Airy>วอ</Airy>
                  <Airy>นอ</Airy>
                  <Airy>กู</Airy>
                  <Airy>ปู</Airy>
                  <Airy>ตู</Airy>
                  <Airy>ยู</Airy>
                  <Airy>มู</Airy>
                  <Airy>วู</Airy>
                  <Airy>นู</Airy>
                  <Airy>กี</Airy>
                  <Airy>ปี</Airy>
                  <Airy>ตี</Airy>
                  <Airy>ซี</Airy>
                  <Airy>ยี</Airy>
                  <Airy>มี</Airy>
                  <Airy>นี</Airy>
                </Thai></Big>
            </Voiced>
          </ExerciseEntry>
          <ExerciseEntry>
            б) закрытые слоги:
            <Voiced audioFile="02-kaam-kaay-taay.mp3">
              <Big>
                <Thai>
                  <Airy>กาม</Airy>
                  <Airy>กาย</Airy>
                  <Airy>ตาย</Airy>
                  <Airy>ตาว</Airy>
                  <Airy>ปาน</Airy>
                  <Airy>ปาม</Airy>
                  <Airy>ปาว</Airy>
                  <Airy>ซาน</Airy>
                  <Airy>ซาย</Airy>
                  <Airy>วาน</Airy>
                  <Airy>กอน</Airy>
                  <Airy>ตอน</Airy>
                  <Airy>ปอย</Airy>
                  <Airy>นอน</Airy>
                  <Airy>ยอย</Airy>
                  <Airy>ตูน</Airy>
                  <Airy>ปูน</Airy>
                  <Airy>มูน</Airy>
                  <Airy>นูม</Airy>
                  <Airy>ตีน</Airy>
                  <Airy>วีม</Airy>
                  <Airy>ยีน</Airy>
                </Thai>
              </Big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>

        <Exercise>
          <ExerciseHead>
            2. Прослушайте и повторяйте за диктором слоги с долгими гласными восходящим тоном:
          </ExerciseHead>
          <ExerciseEntry>
            а) открытые слоги:
            <Voiced audioFile="03-pha-kha-tha.mp3">
              <Big>
                <Thai>
                  <Airy>ผา</Airy>
                  <Airy>ขา</Airy>
                  <Airy>ถา</Airy>
                  <Airy>สา</Airy>
                  <Airy>หา</Airy>
                  <Airy>หยา</Airy>
                  <Airy>หมา</Airy>
                  <Airy>ถู</Airy>
                  <Airy>หู</Airy>
                  <Airy>หมู</Airy>
                  <Airy>หนู</Airy>
                  <Airy>หวู</Airy>
                  <Airy>หยู</Airy>
                  <Airy>ขอ</Airy>
                  <Airy>สอ</Airy>
                  <Airy>หอ</Airy>
                  <Airy>หมอ</Airy>
                  <Airy>หนอ</Airy>
                  <Airy>หยอ</Airy>
                  <Airy>หนี</Airy>
                  <Airy>หมี</Airy>
                  <Airy>สี</Airy>
                  <Airy>หวี</Airy>
                  <Airy>หยี</Airy>
                </Thai>
              </Big>
            </Voiced>
          </ExerciseEntry>
          <ExerciseEntry>
            б) закрытые слоги:
            <Voiced audioFile="04-phan-kham-thau.mp3">
              <Big>
                <Thai>
                  <Airy>ผาน</Airy>
                  <Airy>ขาม</Airy>
                  <Airy>ถาว</Airy>
                  <Airy>สาย</Airy>
                  <Airy>หาน</Airy>
                  <Airy>ถาย</Airy>
                  <Airy>หาย</Airy>
                  <Airy>ผอม</Airy>
                  <Airy>ขอม</Airy>
                  <Airy>ถอย</Airy>
                  <Airy>สอน</Airy>
                  <Airy>หอย</Airy>
                  <Airy>ถูม</Airy>
                  <Airy>สูน</Airy>
                  <Airy>ขูน</Airy>
                  <Airy>หูม</Airy>
                  <Airy>ผีน</Airy>
                  <Airy>หนีม</Airy>
                  <Airy>หวีม</Airy>
                </Thai>
              </Big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>

        <Exercise>
          <ExerciseHead>
            3. Прослушайте и повторяйте за диктором слоги с гласной [и:].
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="05-phii-khii-thii.mp3">
              <Big>
                <Thai>
                  <Airy>ผี</Airy>
                  <Airy>ขี</Airy>
                  <Airy>ถี</Airy>
                  <Airy>สี</Airy>
                  <Airy>ปี</Airy>
                  <Airy>กี</Airy>
                  <Airy>ตี</Airy>
                  <Airy>ซี</Airy>
                  <Airy>พี</Airy>
                  <Airy>คีม</Airy>
                  <Airy>ปีน</Airy>
                  <Airy>ตีน</Airy>
                  <Airy>ซีน</Airy>
                  <Airy>ทีม</Airy>
                  <Airy>ผีน</Airy>
                </Thai>
              </Big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>

        <Exercise>
          <ExerciseHead>
            4. Прослушайте и повторяйте за диктором пары слогов, которые различаются непридыхательными и придыхательными согласными в начале слога:
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="06-kaa-khaa-kaay-khaay.mp3">
              <Big>
                <Thai>
                  <Nobr><Airy>กา – คา</Airy></Nobr>
                  <Nobr><Airy>กาย – คาย</Airy></Nobr>
                  <Nobr><Airy>ตาว – ทาว</Airy></Nobr>
                  <Nobr><Airy>ปาว – พาว</Airy></Nobr>
                  <Nobr><Airy>ตี – ที</Airy></Nobr>
                  <Nobr><Airy>ปอ – พอ</Airy></Nobr>
                  <Nobr><Airy>กอย – คอย</Airy></Nobr>
                  <Nobr><Airy>ตู – ทู</Airy></Nobr>
                  <Nobr><Airy>ปี – พี</Airy></Nobr>
                  <Nobr><Airy>ปูม – พูม</Airy></Nobr>
                </Thai>
              </Big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>

        <Exercise>
          <ExerciseHead>
            5. Прослушайте и повторите за диктором пары слогов ровным и восходящим тоном.
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="07-phii-phii-khaa-khaa.mp3">
              <Big>
                <Thai>
                  <Nobr><Airy>พี – ผี</Airy></Nobr>
                  <Nobr><Airy>คา – ขา</Airy></Nobr>
                  <Nobr><Airy>ซา – สา</Airy></Nobr>
                  <Nobr><Airy>ฮา – หา</Airy></Nobr>
                  <Nobr><Airy>วา – หวา</Airy></Nobr>
                  <Nobr><Airy>ทาว – ถาว</Airy></Nobr>
                  <Nobr><Airy>นาว – หนาว</Airy></Nobr>
                  <Nobr><Airy>ยอม – หยอม</Airy></Nobr>
                  <Nobr><Airy>คอม – ขอม</Airy></Nobr>
                  <Nobr><Airy>ซอย –สอย</Airy></Nobr>
                  <Nobr><Airy>ที – ถี</Airy></Nobr>
                  <Nobr><Airy>มี – หมี</Airy></Nobr>
                  <Nobr><Airy>ยู – หยู</Airy></Nobr>
                </Thai>
              </Big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>

        <Exercise>
          <ExerciseHead>
            6. Прослушайте и повторите за диктором пары слогов восходящим и ровным тоном.
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="08-phaa-phaa-thau-thau.mp3">
              <Big>
                <Thai>
                  <Nobr><Airy>ผา – พา</Airy></Nobr>
                  <Nobr><Airy>ถาว – ทาว</Airy></Nobr>
                  <Nobr><Airy>หวาน – วาน</Airy></Nobr>
                  <Nobr><Airy>หา – ฮา</Airy></Nobr>
                  <Nobr><Airy>นาย – หนาย</Airy></Nobr>
                  <Nobr><Airy>ขอ – คอ</Airy></Nobr>
                  <Nobr><Airy>หยอ – ยอ</Airy></Nobr>
                  <Nobr><Airy>ขอม – คอม</Airy></Nobr>
                  <Nobr><Airy>สอย – ซอย</Airy></Nobr>
                  <Nobr><Airy>ถี – ที</Airy></Nobr>
                  <Nobr><Airy>หมี – มี</Airy></Nobr>
                  <Nobr><Airy>สู – ซู</Airy></Nobr>
                  <Nobr><Airy>หนู – นู</Airy></Nobr>
                </Thai>
              </Big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <Heading level={2}>
          Упражнения на подстановку
        </Heading>
        
        <p>7. Преобразуйте слог с ровным тоном в слог с восходящим тоном (ˇ), заменив начальную букву в данных слогах:</p>

        พอม คา ทู ซอน ฮอ ยี มา วี นา ทาม วาน คาย มี ทอน ฮาย พี ยาม นู ซี ฮู นอน มาย


        <p>8. Преобразуйте слог с восходящим тоном (ˇ) в слог с ровным тоном:</p>

        ผี ขาว สอย หนู ขาย หวาน ขอ ผาย หมี ถู หยา ถอน หนาย ถอน หวาว หนาม ถี หอย หมา ขาม

        <h2>Проверьте себя</h2>

        <p>Прочитайте и определите, какая согласная в начале слога: придыхательная или нет.</p>

        1.คอย 2. กาย 3.พอน 4.ตาย 5.กู 6.ตี 7.ปู 8.ทาน 9.คาว 10.ทอน 11.พาย 12.ปี 13.กา 14.ตูน

        <p>Прослушайте запись, определите придыхательную или непридыхательную согласную в начале слога, запишите по-тайски.</p>

        1. т/тха:м 2. к/кха:й 3. кɔ:н 4. п/пха:н 5. т/тхи:н 6. п/пха: 7. т/тхи:м 8. п/пху:н 9. т/тхɔ: 10. к/кха:н 11. п/пхи:н 12. п/пху:н


        <p>Определите, каким тоном произносится слог</p>

        1.คอ 2.หอย 3.ขา 4.สอน 5.ผูน 6.ทีม 7.ขาย 8.ตอน 9.หนา 10.คาว 11.พา 12.สาย

        <p>Прослушайте запись, определите тон и запишите слог.</p>

        1. ха:й 2. пху: 3. йɔ:м 4. ни: 5. са:м 6. ма:й 7. пхи: 8. ха:у

        9. пха:й 10. на:н 11. ну: 12. ма:

        2. Ответ к упр. 4
        1.หาย 2. พู 3.ยอม 4.หนี 5.สาม 6.หมาย 7.ผี 8.หาว 9.พาย 10.นาน 11.หนู 12.มา


        <h2>Грамматика</h2>

        Порядок слов в предложении


        Слова
        ยาย [йa:й] – бабушка; обращение к пожилой женщине
        ตา [тa:] - дедушка; обращение к пожилому мужчине
        สา [сa:ˇ] – Са (женское имя)
        ยาม [йa:м] – сторож, охранник
        สี [си:̌] – цвет, краска
        ยา [йa:] - лекарство
        ปู [пу:] - краб
        หมู [му:ˇ] – свинья, свинина
        หนู [ну:ˇ] – мышь; обращение к детям и молодым девушкам
        คอ [кхɔ:] – шея
        หมอน [мɔ:нˇ] - подушка
        ถาม [тхa:мˇ] – спрашивать
        ทา [тхa: ] – втирать, намазывать
        ทาสี [тха: си:ˇ] - красить
        ขาย [кхa:йˇ] – продавать
        นอน [нɔ:н] – лежать, спать
        สอน [сɔ:нˇ] – учить, обучать
        ขอ [кхɔ:ˇ] - просить
        มี [ми:] – иметь
        ตี [ти:] – бить
        หนาว [на:уˇ] – мерзнуть


        Фразы
        ตาทาสี ตาทาคอ ยายทายา ยายขายปู สาตีหมอน
        ตาขอหมู ตาขอยาย ยายสอนหนู ยายถามยาม
        ยามมีหมู ยามนอน ยายหนาว


        1. Подставьте подходящие по смыслу слова из тех, которые вы уже знаете.

        …ถามสา ยายถาม… …สอนสา ยายสอน… …ขอตา ยายขอ… ...ขอสี สาขอ... …มียา ยายมี
        2.
        В данных предложениях переставьте местами субъект и объект, обратите внимание на то, как изменились их функции в предложении. Исходные и полученные предложения переведите:

        สาถามยาม ยายสอนหนู สาขอตา สามีตา

        3.

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


      </Lesson>
    </>
  )
}

export default App
