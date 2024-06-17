import React, { useEffect, useState } from 'react';
import './Contains.css';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface ContainsProps {
  closeMenu: () => void;
}

const Contains: React.FC<ContainsProps> = ({ closeMenu }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    let exerciseIndex = 0;
    const headingData = headingElements.map((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      const isExerciseHead = heading.classList.contains('exercise__head');
      if (isExerciseHead) {
        exerciseIndex++;
      }
      return {
        id: heading.id,
        text: isExerciseHead ? `Упражнение ${exerciseIndex}` : heading.textContent || '',
        level: parseInt(heading.tagName.substring(1)),
      };
    });
    setHeadings(headingData);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      if (window.matchMedia('(max-width: 739px)').matches) {
        closeMenu();
      }
      const offset = 42;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="contains">
      <div className="contains__scroll">
        <div className="contains__heading">
          Урок 1
        </div>
        <div className="contains__list">
          {headings.map((heading) => (
            <a key={heading.id} className={`contains__link contains__link--level-${heading.level}`} href={`#${heading.id}`} onClick={(e) => handleClick(e, heading.id)}>
              {heading.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Contains;
