// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './global/global-styles/global-style.css';
import Lesson from "./components/Lesson/Lesson.tsx";
import Thai from "./components/Thai/Thai.tsx";
import Script from "./components/Script/Script.tsx";
import Placeholder from "./components/Placeholder/Placeholder.tsx";
import {Exercise, ExerciseHead, ExerciseEntry} from './components/Exercise/Exercise.tsx';
import Voiced from "./components/Voiced/Voiced.tsx";

function App() {

  return (
    <>
      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <Lesson>
        <h1>Урок 1</h1>

        <h2>Буквы высокого класса</h2>

        <div>
          <Thai>ผ</Thai> <Script>пхɔ:ˇ</Script> - «пчела» <Script>пхынг^</Script>
        </div>

        <div>
          <Thai>ข</Thai> <Script>кхɔ:ˇ</Script> - «яйцо» <Script>кхай`</Script>
        </div>

        <div>
          <Thai>ถ</Thai> <Script>тхɔ:ˇ</Script> – «пакет»<Script>тхунгˇ</Script>
        </div>

        <div>
          <Thai>ส</Thai> <Script>сɔ:ˇ</Script> - «тигр» <Script>сы:аˇ</Script>
        </div>

        <div>
          <Thai>ห</Thai> <Script>хɔ:ˇ</Script> - «ящик» <Script>хи:п`</Script>
        </div>


        <b><Thai>ผ ข ถ ส ห</Thai></b>

        <h2>Буквы низкого класса</h2>

        <div>
          <Thai>พ</Thai> <Script>пхɔ:</Script> - «чаша», точнее, основание для подношений, <Script>пха:н</Script>
        </div>
        <div>
          <Thai>ค</Thai> <Script>кхɔ:</Script> - «буйвол» <Script>кхва:й</Script>
        </div>
        <div>
          <Thai>ท</Thai> <Script>тхɔ:</Script> - «военный» <Script>тхаʹха:нˇ</Script>
        </div>
        <div>
          <Thai>ซ</Thai> <Script>сɔ:</Script> - «цепь» <Script>со: ˆ</Script>
        </div>
        <div>
          <Thai>ม</Thai> <Script>мɔ:</Script>- «лошадь» <Script>ма: ʹ</Script>
        </div>
        <div>
          <Thai>น</Thai> <Script>нɔ:</Script>- «мышь» <Script>ну:ˇ</Script>
        </div>
        <div>
          <Thai>ย</Thai> <Script>йɔ:</Script> - «Якшас», мифологический персонаж <Script>йакʹ</Script>
        </div>
        <div>
          <Thai>ว</Thai> <Script>вɔ:</Script>- «кольцо» <Script>вэ:нˇ</Script>
        </div>
        <div>
          <Thai>ฮ</Thai> <Script>хɔ:</Script>- «филин» <Script>нокʹ ху:кˆ</Script>
        </div>

        <b><Thai>พ ค ท ซ ม น ย ว ฮ</Thai></b>


        <h2>Буквы среднего класса</h2>
        <div>
          <Thai>ก</Thai> <Script>кɔ:</Script>- «курица» <Script>кай`</Script>
        </div>
        <div>
          <Thai>ป</Thai> <Script>пɔ:</Script>- «рыба» <Script>пла:</Script>
        </div>
        <div>
          <Thai>ต</Thai> <Script>тɔ:</Script>- «черепаха» <Script>тау`</Script>
        </div>


        <b><Thai>ก ป ต</Thai></b>

        <h2>Долгие гласные</h2>

        <div>
          <Thai><Placeholder/>า</Thai> <Script>aː</Script> - Знак долгой гласной <Script>aː</Script> располагается после согласной буквы.
        </div>
        <div>
          <Thai><Placeholder/>อ</Thai> <Script>ɔː</Script> - знак долгой гласной <Script>ɔː</Script> располагается после согласной буквы.
        </div>
        <div>
          <Thai><Placeholder/>ี</Thai> <Script>иː</Script> - знак гласной <Script>иː</Script> располагается над согласной буквой.
        </div>
        <div>
          <Thai><Placeholder/>ู</Thai> <Script>уː</Script> - знак гласной <Script>у:</Script> располагается под согласной буквой под правым краем.
        </div>
        <b><Thai>กา กอ กี กู</Thai></b>


        <h2>Фонетические упражнения</h2>
        <Exercise>
          <ExerciseHead>
            1. Прослушайте и повторяйте за диктором слоги с долгими гласными ровным тоном.
          </ExerciseHead>
          <ExerciseEntry>
            <div>
              а) открытые слоги:
            </div>
            <Voiced audioFile="01-kaa-taa-paa.mp3">
              <big><Thai>กา ตา ปา ซา ยา มา วา นา กอ ปอ ตอ ซอ มอ ยอ วอ นอ กู ปู ตู ยู มู วู นู กี ปี ตี ซี ยี มี นี</Thai></big>
            </Voiced>
          </ExerciseEntry>
          <ExerciseEntry>
            <div>
              б) закрытые слоги:
            </div>
            <Voiced audioFile="02-kaam-kaay-taay.mp3">
              <big><Thai>กาม กาย ตาย ตาว ปาน ปาม ปาว ซาน ซาย วาน กอน ตอน ปอย นอน ยอย ตูน ปูน มูน นูม ตีน วีม ยีน</Thai></big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>

        <br/>

        <Exercise>
          <ExerciseHead>
          2. Прослушайте и повторяйте за диктором слоги с долгими гласными восходящим тоном:
          </ExerciseHead>
          <ExerciseEntry>
            <div>
              а) открытые слоги:
            </div>
            <Voiced audioFile="03-pha-kha-tha.mp3">
              <big><Thai>ผา ขา ถา สา หา หยา หมา ถู หู หมู หนู หวู หยู ขอ สอ หอ หมอ หนอ หยอ หนี หมี สี หวี หยี</Thai></big>
            </Voiced>
          </ExerciseEntry>
          <ExerciseEntry>
            <div>
              б) закрытые слоги:
            </div>
            <Voiced audioFile="04-phan-kham-thau.mp3">
              <big><Thai>ผาน ขาม ถาว สาย หาน ถาย หาย ผอม ขอม ถอย สอน หอย ถูม สูน ขูน หูม ผีน หนีม หวีม</Thai></big>
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
              <big><Thai>ผี ขี ถี สี ปี กี ตี ซี พี คีม ปีน ตีน ซีน ทีม ผีน</Thai></big>
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
              <big><Thai>กา – คา กาย – คาย ตาว – ทาว ปาว – พาว ตี – ที ปอ – พอ กอย – คอย ตู – ทู ปี – พี ปูม – พูม</Thai></big>
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
              <big><Thai>พี – ผี คา – ขา ซา – สา ฮา – หา วา – หวา ทาว – ถาว นาว – หนาว ยอม – หยอม คอม - ขอม ซอย -สอย ที – ถี มี – หมี ยู – หยู</Thai></big>
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
              <big><Thai>ผา – พา ถาว – ทาว หวาน – วาน หา – ฮา นาย – หนาย ขอ – คอ หยอ – ยอ ขอม – คอม สอย– ซอย ถี – ที หมี – มี สู – ซู หนู – นู</Thai></big>
            </Voiced>
          </ExerciseEntry>
        </Exercise>


        <h2>Упражнения на подстановку</h2>
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
