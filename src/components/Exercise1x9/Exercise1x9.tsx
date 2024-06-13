import './Exercise1x9.css'
import {Exercise, ExerciseEntry, ExerciseHead} from "../Exercise/Exercise.tsx";
import Question from "../Question/Question.tsx";

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Exercise1x9() {

  const questionsAndAnswers = [
    { question: 'คอย', answer: 'Придыхательная' },
    { question: 'กาย', answer: 'Нет' },
    { question: 'พอน', answer: 'Придыхательная' },
    { question: 'ตาย', answer: 'Нет' },
    { question: 'กู', answer: 'Нет' },
    { question: 'ตี', answer: 'Нет' },
    { question: 'ปู', answer: 'Нет' },
    { question: 'ทาน', answer: 'Придыхательная' },
    { question: 'คาว', answer: 'Придыхательная' },
    { question: 'ทอน', answer: 'Придыхательная' },
    { question: 'พาย', answer: 'Придыхательная' },
    { question: 'ปี', answer: 'Нет' },
    { question: 'กา', answer: 'Нет' },
    { question: 'ตูน', answer: 'Нет' },
  ];

  const options = [
    'Придыхательная', 'Нет'
  ];

  // Shuffle questions and answers array
  const shuffledQuestionsAndAnswers = shuffleArray(questionsAndAnswers);

  return (
    <Exercise>
      <ExerciseHead>
        11. Прочитайте и определите, какая согласная в начале слога: придыхательная или нет.
      </ExerciseHead>
      <ExerciseEntry>
        {shuffledQuestionsAndAnswers.map((item, index) => (
          <Question
            key={index}
            type="radio"
            question={item.question}
            correctAnswer={item.answer}
            options={options}
          />
        ))}
      </ExerciseEntry>
    </Exercise>
  )
}

export default Exercise1x9;
