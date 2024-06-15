import React, { useState } from 'react';
import './Question.css';
import './Texting.css';
import Thai from "../Thai/Thai";
import LinkAlikeButton from "../LinkAlikeButton/LinkAlikeButton.tsx";

type TextingProps = {
  question: string;
  correctAnswer: string;
  maxLength?: number;
  audio?: string;
};

const Texting: React.FC<TextingProps> = ({ question, correctAnswer, maxLength, audio }) => {
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

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
  };

  return (
    <div className="question question--text">
      {
        audio &&
          <div className="question__audio">
              <audio className="question__player" controls src={'/' + audio} preload="auto"></audio>
          </div>
      }
      <div className="question__asking">
        <div className="question__title">
          <Thai size="big">{question} –&nbsp;</Thai>
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
          {!showAnswer &&
              <div className="question__show-answer">
                  <LinkAlikeButton onClick={toggleAnswer}>Показать ответ</LinkAlikeButton>
              </div>}
          {showAnswer && <div><span className="question__answer-label">Ответ:</span> <Thai size="big">{correctAnswer}</Thai></div>}
        </div>
      </div>
    </div>
  );
};

export default Texting;
