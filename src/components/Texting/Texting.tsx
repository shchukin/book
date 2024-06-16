/* Насчёт пропсов questionInThai, questionInScript, answerInThai
 * По умолчанию без пропса, т.е. вопросы или ответы на русском языке.
 * Тайский или Транскрипция -- это как бы усложение.
 *
 * Может быть более сложный кейс, когда в вопросе нужна разметка.
 * Например комбинация русского и тайского, или русского и транскрипции.
 * В этом случае так же берётся вариант по умолчанию и разметка подаётся
 * прям в вопросе. Смотри Exercise 1x12
 */

import { useState } from 'react';
import './Question.css';
import './Texting.css';
import LinkAlikeButton from "../LinkAlikeButton/LinkAlikeButton.tsx";
import Button from "../Button/Button.tsx";
import Thai from "../Thai/Thai.tsx";
import Script from "../Script/Script.tsx";
import MiniPlayer from "../MiniPlayer/MiniPlayer.tsx"; // Import MiniPlayer component

type TextingProps = {
  question: React.ReactNode;
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
    checkAnswer(value);  // Run checkAnswer on input change
  };

  const checkAnswer = (value: string) => {
    setIsCorrect(value.trim() === answer.trim());
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="texting">
      {audio && (
        <div className="texting__audio">
          <MiniPlayer src={'/' + audio} />
        </div>
      )}
      <div className="texting__title">
        {questionInThai ? <Thai size="big">{question}</Thai> : questionInScript ? <Script>{question}</Script> : question}
      </div>
      <div className="texting__field">
        <input
          className={`texting__input${isCorrect ? ' texting__input--success' : ''}`}
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
