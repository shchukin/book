import './Question.css';
import './Typing.css';

type TypingProps = {
  correctAnswer: string;
};

const Typing: React.FC<TypingProps> = ({ correctAnswer }) => {

  return (
    <div className="question question--typing">
      <div className="question__asking">
        <input
          className="question__text-input"
          type="text"
        />
        <div className="question__text-input question__text-input--pattern">
          {correctAnswer}
        </div>
      </div>
    </div>
  );
};

export default Typing;
