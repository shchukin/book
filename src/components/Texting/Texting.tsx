import {useState} from 'react';
import './Texting.css';
import LinkAlikeButton from "../LinkAlikeButton/LinkAlikeButton.tsx";
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
  inputWidth?: number;
};

const Texting: React.FC<TextingProps> = ({question, answer, maxLength, audio, questionInThai, questionInScript, answerInThai, inputWidth}) => {
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
          <MiniPlayer src={'/' + audio}/>
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
          style={inputWidth ? {width: `${inputWidth}px`} : {}}
        />
      </div>
      <div className={`texting__answer${showAnswer ? ' texting__answer--expanded' : ''}`}>
        <div className="texting__show-answer">
          <LinkAlikeButton onClick={toggleAnswer}>Показать ответ</LinkAlikeButton>
        </div>
        <div className="texting__answer-content">
          Ответ:&nbsp;
          {answerInThai ? <Thai size="big">{answer}</Thai> : answer}
        </div>
      </div>
    </div>
  );
};

export default Texting;
