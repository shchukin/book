import './Question.css'
import {useState} from "react";

type QuestionProps = {
  question: string;
  type: 'radio' | 'text';
  correctAnswer: string;
  options?: string[];
  maxLength?: number;
};

const Question: React.FC<QuestionProps> = ({ question, type, correctAnswer, options, maxLength }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (maxLength && value.length > maxLength) {
      return;
    }
    setUserAnswer(value);
  };

  const checkAnswer = () => {
    if (type === 'radio') {
      setIsCorrect(selectedOption === correctAnswer);
    } else if (type === 'text') {
      setIsCorrect(userAnswer === correctAnswer);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <p>{question}</p>
      {type === 'radio' && options && options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="answer"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      {type === 'text' && (
        <input
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Enter your answer"
        />
      )}
      <button onClick={checkAnswer}>Check Answer</button>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect, try again.'}</p>
      )}
      <button onClick={toggleAnswer}>Toggle Answer</button>
      {showAnswer && <p>Correct Answer: {correctAnswer}</p>}
    </div>
  );
};

export default Question;
