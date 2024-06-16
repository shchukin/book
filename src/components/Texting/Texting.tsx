import React, { useState } from 'react';
import './Question.css';
import './Texting.css';
import LinkAlikeButton from "../LinkAlikeButton/LinkAlikeButton.tsx";
import Button from "../Button/Button.tsx";
import Thai from "../Thai/Thai.tsx";
import Script from "../Script/Script.tsx";

type TextingProps = {
  question: string;
  answer: string;
  maxLength?: number;
  audio?: string;
  questionInThai?: boolean;
  questionInScript?: boolean;
  answerInThai?: boolean;
};

const Texting: React.FC<TextingProps> = ({ question, answer, maxLength, audio, questionInThai, questionInScript, answerInThai }) => {
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
    setIsCorrect(userAnswer === answer);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="texting">
      {audio && (
        <div className="texting__audio">
          <audio className="texting__player" controls src={'/' + audio} preload="auto"></audio>
        </div>
      )}
      <div className="texting__title">
        {questionInThai ? <Thai size="big">{question}</Thai> : questionInScript ? <Script>{question}</Script> : question}
      </div>
      <div className="texting__field">
        <input
          className={`texting__input${isCorrect !== null && isCorrect ? ' texting__input--success' : isCorrect !== null && !isCorrect ? ' texting__input--error' : ''}`}
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="???"
        />
      </div>
      <div className="texting__check-handler">
        <Button onClick={checkAnswer}>Проверить</Button>
      </div>
      <div className="texting__answer">
        {!showAnswer && (
          <div className="texting__show-answer">
            <LinkAlikeButton onClick={toggleAnswer}>Показать ответ</LinkAlikeButton>
          </div>
        )}
        {showAnswer && (
          <div>
            <span className="texting__answer-label">Ответ:&nbsp;</span>
            {answerInThai ? <Thai size="big">{answer}</Thai> : answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Texting;
