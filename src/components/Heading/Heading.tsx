import './Heading.css';
import { ReactNode, HTMLAttributes } from "react";

type HeadingProps = {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

function Heading({ level, children, ...rest }: HeadingProps) {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  const headingClass = `heading heading--0${level}`;
  return (
    <Tag className={headingClass} {...rest}>
      {children}
    </Tag>
  );
}

export default Heading;
