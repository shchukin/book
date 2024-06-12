import React, { useState } from 'react';
import './Question.css';
import Big from "../Big/Big";
import Thai from "../Thai/Thai";
import { generateRandomString } from "../../utils.ts";

type QuestionProps = {
  question: string;
  type: 'radio' | 'text' | 'typing';
  correctAnswer: string;
  options?: string[];
  maxLength?: number;
};

type OptionStatus = {
  value: string;
  isCorrect: boolean | null;
};

const Question: React.FC<QuestionProps> = ({ question, type, correctAnswer, options, maxLength }) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionStatus[]>(
    options?.map(option => ({ value: option, isCorrect: null })) || []
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // State for text and typing types

  const radioName = generateRandomString(16); // Generate a random string for the radio button name

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setSelectedOptions(prevOptions =>
      prevOptions.map(option =>
        option.value === selectedValue
          ? { ...option, isCorrect: selectedValue === correctAnswer }
          : option
      )
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (maxLength && value.length > maxLength) {
      return;
    }
    setUserAnswer(value);
  };

  const checkAnswer = () => {
    setIsCorrect(userAnswer === correctAnswer);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    if (type === 'radio') {
      setSelectedOptions(prevOptions =>
        prevOptions.map(option =>
          option.value === correctAnswer
            ? { ...option, isCorrect: true }
            : option
        )
      );
    }
  };

  return (
    <div className="question">
      {type === 'radio' && (
        <>
          <div className="question__radio-asking">
            <Big><Thai>{question}</Thai></Big>
          </div>
          <div className="question__radio-answers">
            {selectedOptions.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={`question__radio ${option.isCorrect === null ? '' : option.isCorrect ? 'question__radio--correct' : 'question__radio--error'}`}
              >
                <input
                  className="question__radio-button"
                  type="radio"
                  name={`question-${radioName}`} // Use the generated random string for the name
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                />
                {option.value}
              </label>
            ))}
          </div>
          <div className="question__answer">
            {!showAnswer && <button className="question__show-answer" onClick={toggleAnswer}>Показать ответ</button>}
          </div>
        </>
      )}
      {type === 'text' && (
        <div className="question__asking">
          <div className="question__title">
            <Big><Thai>{question}</Thai> –&nbsp;</Big>
          </div>
          <input
            className={`question__text-input${isCorrect !== null && isCorrect ? ' question__text-input--success' : isCorrect !== null && !isCorrect ? ' question__text-input--error' : ''}`}
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="???"
          />
          <button className="question__check-handler" onClick={checkAnswer}>Проверить</button>
          <div className="question__answer">
            {!showAnswer && <button className="question__show-answer" onClick={toggleAnswer}>Показать ответ</button>}
            {showAnswer && <div><span className="question__answer-label">Ответ:</span> <Big><Thai>{correctAnswer}</Thai></Big></div>}
          </div>
        </div>
      )}
      {type === 'typing' && (
        <div className="question__asking">
          <input
            className={`question__text-input${isCorrect !== null && isCorrect ? ' question__text-input--success' : isCorrect !== null && !isCorrect ? ' question__text-input--error' : ''}`}
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
          />
          <div className="question__text-input question__text-input--pattern">
            {correctAnswer}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
