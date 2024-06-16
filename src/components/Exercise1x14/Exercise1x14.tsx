import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Texting from "../Texting/Texting.tsx";
import TextingTable from "../TextingTable/TextingTable.tsx";

function Exercise1x14() {

  const data = [
    { question: 'ха:й', answer: 'หาย', audio: 'Lesson01xEx14-01-haay.mp3' },
    { question: 'пху:', answer: 'พู', audio: 'Lesson01xEx14-02-phuu.mp3' },
    { question: 'йɔ:м', answer: 'ยอม', audio: 'Lesson01xEx14-03-yoom.mp3' },
    { question: 'ни:', answer: 'หนี', audio: 'Lesson01xEx14-04-nii.mp3' },
    { question: 'са:м', answer: 'สาม', audio: 'Lesson01xEx14-05-saam.mp3' },
    { question: 'ма:й', answer: 'หมาย', audio: 'Lesson01xEx14-06-maay.mp3' },
    { question: 'пхи:', answer: 'ผี', audio: 'Lesson01xEx14-07-phii.mp3' },
    { question: 'ха:у', answer: 'หาว', audio: 'Lesson01xEx14-08-haay.mp3' },
    { question: 'пха:й', answer: 'พาย', audio: 'Lesson01xEx14-09-phaay.mp3' },
    { question: 'на:н', answer: 'นาน', audio: 'Lesson01xEx14-10-naan.mp3' },
    { question: 'ну:', answer: 'หนู', audio: 'Lesson01xEx14-11-nuu.mp3' },
    { question: 'ма:', answer: 'มา', audio: 'Lesson01xEx14-12-maa.mp3' },
  ];

  return (
    <Exercise>
      <ExerciseHead>
        14. Прослушайте запись, определите тон и напечатайте по-тайски слог
      </ExerciseHead>
      <ExerciseEntry>
        <TextingTable>
          {data.map((item, index) => (
            <Texting
              key={index}
              question={item.question}
              questionInScript
              answer={item.answer}
              answerInThai
              audio={item.audio}
            />
          ))}
        </TextingTable>
      </ExerciseEntry>
    </Exercise>
  );
}

export default Exercise1x14;
