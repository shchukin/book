import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import GridType2 from "../GridType2/GridType2.tsx";
import Texting from "../Texting/Texting.tsx";

function Exercise1x12() {

  const data = [
    { question: 'т/тха:м', answer: 'ทาม', audio: 'Lesson01xEx12-01-thaam.mp3' },
    { question: 'к/кха:й', answer: 'คาย', audio: 'Lesson01xEx12-02-khaay.mp3' },
    { question: 'к/кхɔ:н', answer: 'กอน', audio: 'Lesson01xEx12-03-koon.mp3' },
    { question: 'п/пха:н', answer: 'ปาน', audio: 'Lesson01xEx12-04-paan.mp3' },
    { question: 'т/тхи:н', answer: 'ตีน', audio: 'Lesson01xEx12-05-tiim.mp3' },
    { question: 'п/пха', answer: 'ผา', audio: 'Lesson01xEx12-06-phaa.mp3' },
    { question: 'т/тхи:м', answer: 'ทีม', audio: 'Lesson01xEx12-07-thiim.mp3' },
    { question: 'п/пху:н', answer: 'ผูน', audio: 'Lesson01xEx12-08-phuum.mp3' },
    { question: 'т/тхɔ:', answer: 'ตอ', audio: 'Lesson01xEx12-09-too.mp3' },
    { question: 'к/кха:н', answer: 'กาน', audio: 'Lesson01xEx12-10-kaan.mp3' },
    { question: 'п/пхи:н', answer: 'ผีน', audio: 'Lesson01xEx12-11-phiin.mp3' },
    { question: 'п/пху:н', answer: 'ผูน', audio: 'Lesson01xEx12-12-phuun.mp3' },
  ];

  return (
    <Exercise>
      <ExerciseHead>
        12. Прослушайте запись, определите придыхательную или непридыхательную согласную в начале слога, запишите по-тайски.
      </ExerciseHead>
      <ExerciseEntry>
        <GridType2>
          {data.map((item, index) => (
            <Texting
              key={index}
              question={item.question}
              answer={item.answer}
              maxLength={4}
              audio={item.audio}
            />
          ))}
        </GridType2>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x12;
