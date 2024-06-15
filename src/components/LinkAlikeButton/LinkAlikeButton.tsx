import './LinkAlikeButton.css'
import {MouseEventHandler, ReactNode} from "react";

type LinkAlikeButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  children: ReactNode
}

function LinkAlikeButton({onClick, children}: LinkAlikeButtonProps) {

  return (
    <button className="link-alike-button" onClick={onClick} type="button">
      {children}
    </button>
  )
}

export default LinkAlikeButton;
