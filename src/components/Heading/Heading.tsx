import './Heading.css'
import {ReactNode} from "react";

type HeadingProps = {
  children: ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6,
}

function Heading({ level, children }:HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingClass = `heading heading--0${level}`;
  return <Tag className={headingClass}>{children}</Tag>;
}

export default Heading;
