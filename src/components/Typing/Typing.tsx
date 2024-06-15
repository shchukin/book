import React, { useState } from 'react';
import './Question.css';
import './Typing.css';

type TypingProps = {
  correctAnswer: string;
};

const Typing: React.FC<TypingProps> = ({ correctAnswer }) => {
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  return (
    <div className="question question--typing">
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
    </div>
  );
};

export default Typing;
