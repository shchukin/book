import React, { useEffect, useState } from 'react';
import './Contains.css';

interface Heading {
  id: string;
  text: string;
  level: number;
}

const Contains = ({ isOpen }: { isOpen: boolean }) => {
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
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`toc-container ${isOpen ? 'open' : ''}`}>
      <div className="contains__heading">
        Урок 1
      </div>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={`toc-level-${heading.level}`}>
            <a href={`#${heading.id}`} onClick={(e) => handleClick(e, heading.id)}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Contains;
