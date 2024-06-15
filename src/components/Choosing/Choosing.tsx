import { useState } from 'react';
import './Question.css';
import Thai from "../Thai/Thai";
import { generateRandomString } from "../../utils.ts";
import LinkAlikeButton from "../LinkAlikeButton/LinkAlikeButton.tsx";

type ChoosingProps = {
  question: string;
  correctAnswer: string;
  options: string[];
};

type OptionStatus = {
  value: string;
  isCorrect: boolean | null;
};

const Choosing: React.FC<ChoosingProps> = ({ question, correctAnswer, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionStatus[]>(
    options.map(option => ({ value: option, isCorrect: null }))
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

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

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    setSelectedOptions(prevOptions =>
      prevOptions.map(option =>
        option.value === correctAnswer
          ? { ...option, isCorrect: true }
          : option
      )
    );
  };

  return (
    <div className="question question--radio">
      <div className="question__radio-asking">
        <Thai size="big">{question}</Thai>
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
        <div className="question__show-answer">
          <LinkAlikeButton onClick={toggleAnswer}>Показать ответ</LinkAlikeButton>
        </div>
      </div>
    </div>
  );
};

export default Choosing;
