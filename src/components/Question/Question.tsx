import React, { useState } from 'react';
import './Question.css';
import Big from "../Big/Big";
import Thai from "../Thai/Thai";
import {generateRandomString} from "../../utils.ts";

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

  const radioName = generateRandomString(16); // Generate a random string for the radio button name

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
    <div className="question">
      {type === 'radio' && (
        <>
          <Big><Thai>{question}</Thai></Big>
          {options && options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                name={`question-${radioName}`} // Use the generated random string for the name
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
          {isCorrect ? '1': '0'}
        </>
      )}
      {type === 'text' && (
        <div className="question__asking">
          <div className="question__title">
            <Big><Thai>{question}</Thai> –&nbsp;</Big>
          </div>
          <input
            className={`question__text-input${isCorrect !== null && isCorrect ? ' question__text-input--success' : ''}${isCorrect !== null && !isCorrect ? ' question__text-input--error' : ''}`}
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="???"
          />
          <button className="question__check-handler" onClick={checkAnswer}>Проверить</button>
        </div>
      )}
      <div className="question__answer">
        {!showAnswer && <button className="question__show-answer" onClick={toggleAnswer}>Показать ответ</button>}
        {showAnswer && <div><span className="question__answer-label">Ответ:</span> <Big><Thai>{correctAnswer}</Thai></Big></div>}
      </div>
    </div>
  );
};

export default Question;
