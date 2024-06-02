import './Heading.css'
import {ReactNode} from "react";

// type HeadingProps = {
//   children: ReactNode
// }
//
// Heading.propTypes = {
//   level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
//   children: PropTypes.node.isRequired,
// };

function Heading({ level, children }) {
  const Tag = `h${level}`;

  // Mapping heading level to corresponding class
  const headingClass = `heading heading--0${level}`;

  return <Tag className={headingClass}>{children}</Tag>;
}

export default Heading;
