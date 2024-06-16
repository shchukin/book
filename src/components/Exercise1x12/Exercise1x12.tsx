import "./Exercise1x12.css";
import { Exercise, ExerciseEntry, ExerciseHead } from "../Exercise/Exercise.tsx";
import Texting from "../Texting/Texting.tsx";
import Script from "../Script/Script.tsx";
import TextingTable from "../TextingTable/TextingTable.tsx";

function Exercise1x12() {
  const data = [
    { question: <><Script>та:м</Script> или <Script>тха:м</Script></>, answer: 'ทาม', audio: 'Lesson01xEx12-01-thaam.mp3' },
    { question: <><Script>ка:й</Script> или <Script>кха:й</Script></>, answer: 'คาย', audio: 'Lesson01xEx12-02-khaay.mp3' },
    { question: <><Script>кɔ:н</Script> или <Script>кхɔ:н</Script></>, answer: 'กอน', audio: 'Lesson01xEx12-03-koon.mp3' },
    { question: <><Script>па:н</Script> или <Script>пха:н</Script></>, answer: 'ปาน', audio: 'Lesson01xEx12-04-paan.mp3' },
    { question: <><Script>ти:н</Script> или <Script>тхи:н</Script></>, answer: 'ตีน', audio: 'Lesson01xEx12-05-tiim.mp3' },
    { question: <><Script>па</Script> или <Script>пха</Script></>, answer: 'ผา', audio: 'Lesson01xEx12-06-phaa.mp3' },
    { question: <><Script>ти:м</Script> или <Script>тхи:м</Script></>, answer: 'ทีม', audio: 'Lesson01xEx12-07-thiim.mp3' },
    { question: <><Script>пу:н</Script> или <Script>пху:н</Script></>, answer: 'ผูน', audio: 'Lesson01xEx12-08-phuum.mp3' },
    { question: <><Script>тɔ</Script> или <Script>тхɔ:</Script></>, answer: 'ตอ', audio: 'Lesson01xEx12-09-too.mp3' },
    { question: <><Script>ка:н</Script> или <Script>кха:н</Script></>, answer: 'กาน', audio: 'Lesson01xEx12-10-kaan.mp3' },
    { question: <><Script>пи:н</Script> или <Script>пхи:н</Script></>, answer: 'ผีน', audio: 'Lesson01xEx12-11-phiin.mp3' },
    { question: <><Script>пу:н</Script> или <Script>пху:н</Script></>, answer: 'ผูน', audio: 'Lesson01xEx12-12-phuun.mp3' },
  ];

  return (
    <Exercise>
      <ExerciseHead>
        12. Прослушайте запись, определите придыхательную или непридыхательную согласную в начале слога, напечатайте по-тайски.
      </ExerciseHead>
      <ExerciseEntry>
        <div className="exercise-1x12">
          <TextingTable>
            {data.map((item, index) => (
              <Texting
                key={index}
                question={item.question}
                answer={item.answer}
                answerInThai
                audio={item.audio}
              />
            ))}
          </TextingTable>
        </div>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x12;
