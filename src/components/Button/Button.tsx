import './Button.css'
import {MouseEventHandler, ReactNode} from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  children: ReactNode
}

function Button({onClick, children}: ButtonProps) {

  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
