// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './global/global-style.css';
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
import Exercise1x9 from "./components/Exercise1x9/Exercise1x9.tsx";
import Exercise1x10 from "./components/Exercise1x10/Exercise1x10.tsx";
import Exercise1x11 from "./components/Exercise1x11/Exercise1x11.tsx";
import Exercise1KeysWords from "./components/Exercise1KeysWords/Exercise1KeysWords.tsx";
import Exercise1Keys from "./components/Exercise1Keys/Exercise1Keys.tsx";
import Exercise1x12 from "./components/Exercise1x12/Exercise1x12.tsx";
import Exercise1x13 from "./components/Exercise1x13/Exercise1x13.tsx";
import Sparse from "./components/Sparse/Sparse.tsx";
import Pair from "./components/Pair/Pair.tsx";

function App() {

  return (
    <div className="container">

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

        <br/>
        <Heading level={2}>Фонетические упражнения</Heading>

        <Exercise>
          <ExerciseHead>
            1. Прослушайте и повторяйте за диктором слоги с долгими гласными ровным тоном.
          </ExerciseHead>
          <ExerciseEntry>
            а) открытые слоги:
            <Voiced audioFile="01-kaa-taa-paa.mp3">
              <Sparse>
                <Thai>
                  <Big>กา กอ กู กี ปา ปอ ปู ปี ตา ตอ ตู ตี ซา ซอ ซี ฮา ฮอ มา มี มู วา ยอ นี มอ นู วอ ยี วู ยู ฮา
                  </Big>
                </Thai>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
          <ExerciseEntry>
            б) закрытые слоги:
            <Voiced audioFile="02-kaam-kaay-taay.mp3">
              <Sparse>
                <Big>
                  <Thai>
                    กาม กอน กาย กาว ตาย ปาน ปอย ปาม ปาว ตาว ตอน ตอม ตอย ซาน ซาย ตีน ปูน ฮาน ฮอม ฮอย
                  </Thai>
                </Big>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>
        <br/>

        <Exercise>
          <ExerciseHead>
            2. Прослушайте и повторяйте за диктором слоги с долгими гласными восходящим тоном:
          </ExerciseHead>
          <ExerciseEntry>
            а) открытые слоги:
            <Voiced audioFile="03-pha-kha-tha.mp3">
              <Sparse>
                <Big>
                  <Thai>
                    ผา ขา ถา สี หา ขอ สอ หอ ถู หู หมา หนี หยา หมอ หนอ สา หยอ หมี หวี หยี หมู หนู หวู หยู
                  </Thai>
                </Big>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
          <ExerciseEntry>
            б) закрытые слоги:
            <Voiced audioFile="04-phan-kham-thau.mp3">
              <Sparse>
                <Big>
                  <Thai>ผาน ขาม ถาว สาย ถาย หาย ผอม ขอม ถอย สอน หอย ถูน สูน หาน</Thai>
                </Big>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>
        <br/>

        <Exercise>
          <ExerciseHead>
            3. Прослушайте и повторяйте за диктором слоги с гласной <Script>и:</Script>.
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="05-phii-khii-thii.mp3">
              <Sparse>
                <Big>
                  <Thai>
                    ผี ขี ถี สี ปี กี ตี ซี พี คีม ปีน ตีน ซีน ทีม ผีน
                  </Thai>
                </Big>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>
        <br/>

        <Exercise>
          <ExerciseHead>
            4. Прослушайте и повторяйте за диктором пары слогов, которые различаются непридыхательными и придыхательными согласными в начале слога:
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="06-kaa-khaa-kaay-khaay.mp3">
              <Sparse>
                <Big>
                  <Thai>
                    <Pair>กา – คา</Pair>
                    <Pair>ตี – ที</Pair>
                    <Pair>ปอ – พอ</Pair>
                    <Pair>ตู – ทู</Pair>
                    <Pair>ปี – พี</Pair>
                    <Pair>กาย – คาย</Pair>
                    <Pair>ปาว – พาว</Pair>
                    <Pair>ปูม – พูม</Pair>
                    <Pair>ตาว – ทาว</Pair>
                    <Pair>กอย – คอย</Pair>
                  </Thai>
                </Big>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>
        <br/>

        <Exercise>
          <ExerciseHead>
            5. Прослушайте и повторите за диктором пары слогов ровным и восходящим тоном.
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="07-phii-phii-khaa-khaa.mp3">
              <Sparse>
                <Big>
                  <Thai>
                    <Pair>พี – ผี</Pair>
                    <Pair>คา – ขา</Pair>
                    <Pair>ที – ถี</Pair>
                    <Pair>ซา – สา</Pair>
                    <Pair>ฮา – หา</Pair>
                    <Pair>ยู – หยู</Pair>
                    <Pair>มี – หมี</Pair>
                    <Pair>วา – หวา</Pair>
                    <Pair>นาว – หนาว</Pair>
                    <Pair>ยอม – หยอม</Pair>
                    <Pair>คอม - ขอม</Pair>
                    <Pair>ซอย -สอย</Pair>
                    <Pair>ทาว – ถาว</Pair>
                  </Thai>
                </Big>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>
        <br/>

        <Exercise>
          <ExerciseHead>
            6. Прослушайте и повторите за диктором пары слогов восходящим и ровным тоном.
          </ExerciseHead>
          <ExerciseEntry>
            <Voiced audioFile="08-phaa-phaa-thau-thau.mp3">
              <Sparse>
                <Big>
                  <Thai>
                    <Pair>ผา – พา</Pair>
                    <Pair>ขอ – คอ</Pair>
                    <Pair>ถี – ที</Pair>
                    <Pair>สู – ซู</Pair>
                    <Pair>หา – ฮา</Pair>
                    <Pair>ขอม – คอม</Pair>
                    <Pair>ถาว – ทาว</Pair>
                    <Pair>สอย – ซอย</Pair>
                    <Pair>หาย – ฮาย</Pair>
                    <Pair>หนา – นา</Pair>
                    <Pair>หมี – มี</Pair>
                    <Pair>หวาน – วาน</Pair>
                    <Pair>หยอ – ยอ</Pair>
                  </Thai>
                </Big>
              </Sparse>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>
        <br/>

        <Heading level={2}>
          Упражнения на изучение клавиатуры
        </Heading>

        <Exercise1Keys/>

        <br/>
        <br/>

        <Exercise1KeysWords/>

        <br/>
        <br/>

        <Heading level={2}>
          Упражнения на подстановку
        </Heading>

        <Exercise1x9/>

        <br/>
        <br/>

        <Exercise1x10/>

        <br/>
        <br/>
        <br/>
        <br/>

        <h2>Проверьте себя</h2>

        <Exercise1x11/>

        <br/>
        <br/>

        <Exercise1x12/>

        <br/>
        <br/>

        <Exercise1x13/>

        Прочитайте и определите, какая согласная в начале слога: придыхательная или нет.

        1.คอย 2. กาย 3.พอน 4.ตาย 5.กู 6.ตี 7.ปู 8.ทาน 9.คาว 10.ทอน 11.พาย 12.ปี 13.กา 14.ตูน

        Прослушайте запись, определите придыхательную или непридыхательную согласную в начале слога, запишите по-тайски.

        1. т/тха:м 2. к/кха:й 3. кɔ:н 4. п/пха:н 5. т/тхи:н 6. п/пха: 7. т/тхи:м 8. п/пху:н 9. т/тхɔ: 10. к/кха:н 11. п/пхи:н 12. п/пху:н


        Определите, каким тоном произносится слог

        1. คอ 2.หอย 3.ขา 4.สอน 5.ผูน 6.ทีม 7.ขาย 8.ตอน 9.หนา 10.คาว 11.พา 12.สาย

        Прослушайте запись, определите тон и запишите слог.

        1. ха:й 2. пху: 3. йɔ:м 4. ни: 5. са:м 6. ма:й 7. пхи: 8. ха:у

        9. пха:й 10. на:н 11. ну: 12. ма:

        2. Ответ к упр. 4
        1.หาย 2. พู 3.ยอม 4.หนี 5.สาม 6.หมาย 7.ผี 8.หาว 9.พาย 10.นาน 11.หนู 12.มา


        Грамматика

        Порядок слов в предложении


        Слова
        ยาย /йa:й/ – бабушка; обращение к пожилой женщине
        ตา /тa:/ - дедушка; обращение к пожилому мужчине
        สา /сa:ˇ/ – Са (женское имя)
        ยาม /йa:м/ – сторож, охранник
        สี /си:̌/ – цвет, краска
        ยา /йa:/ - лекарство
        ปู /пу:/ - краб
        หมู /му:ˇ/ – свинья, свинина
        หนู /ну:ˇ/ – мышь; обращение к детям и молодым девушкам
        คอ /кхɔ:/ – шея
        หมอน /мɔ:нˇ/ - подушка
        ถาม /тхa:мˇ/ – спрашивать
        ทา /тхa: / – втирать, намазывать
        ทาสี /тха: си:ˇ/ - красить
        ขาย /кхa:йˇ/ – продавать
        นอน /нɔ:н/ – лежать, спать
        สอน /сɔ:нˇ/ – учить, обучать
        ขอ /кхɔ:ˇ/ - просить
        มี /ми:/ – иметь
        ตี /ти:/ – бить
        หนาว /на:уˇ/ – мерзнуть


        Фразы
        ตาทาสี ตาทาคอ ยายทายา ยายขายปู สาตีหมอน
        ตาขอหมู ตาขอยาย ยายสอนหนู ยายถามยาม
        ยามมีหมู ยามนอน ยายหนาว


        1. Подставьте подходящие по смыслу слова из тех, которые вы уже знаете.

        …ถามสา ยายถาม… …สอนสา ยายสอน… …ขอตา ยายขอ…
        ...ขอสี สาขอ... …มียา ยายมี…

        2. В данных предложениях переставьте местами субъект и объект, обратите внимание на то, как изменились их функции в предложении. Исходные и полученные предложения переведите:

        สาถามยาม ยายสอนหนู สาขอตา สามีตา

        3. Переведите

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

    </div>
  )
}

export default App
