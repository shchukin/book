import './Burger.css'
import {MouseEventHandler} from "react";

type BurgerProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  expanded: boolean
}

function Burger({onClick, expanded}: BurgerProps) {

  return (
    <button className={`burger${expanded ? ' burger--expanded' : ''}`} type="button" onClick={onClick}>
      {!expanded &&
        <svg className="burger__icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path d="M2.586 6.91a1.586 1.586 0 1 0 0 3.171 1.586 1.586 0 0 0 0-3.172ZM2.586 13.472a1.586 1.586 0 1 0 0 3.172 1.586 1.586 0 0 0 0-3.172ZM2.586 20.035a1.586 1.586 0 1 0 0 3.172 1.586 1.586 0 0 0 0-3.172ZM27.47 6.8H9.53c-.845 0-1.53.686-1.53 1.531v.11c0 .845.685 1.531 1.53 1.531H27.47c.846 0 1.531-.686 1.531-1.531v-.11c0-.845-.685-1.531-1.531-1.531ZM27.47 19.925H9.53c-.845 0-1.53.686-1.53 1.532v.11c0 .845.685 1.53 1.53 1.53H27.47c.846 0 1.531-.685 1.531-1.53v-.11c0-.846-.685-1.532-1.531-1.532ZM20.688 13.363H9.531c-.845 0-1.53.685-1.53 1.531v.11c0 .845.685 1.53 1.53 1.53h11.157c.846 0 1.532-.685 1.532-1.53v-.11c0-.846-.686-1.531-1.532-1.531Z"/>
        </svg>
      }
      {expanded &&
        <svg className="burger__icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path d="M8.2 24.038 24.043 8.197c.747-.747.868-1.837.27-2.435l-.078-.078c-.598-.598-1.688-.477-2.435.27L5.958 21.795c-.747.747-.868 1.837-.27 2.435l.078.078c.598.598 1.688.477 2.435-.27Z"/>
          <path d="M24.04 21.793 8.203 5.956c-.747-.747-1.837-.867-2.435-.269l-.077.077c-.598.598-.478 1.688.269 2.435l15.837 15.837c.747.746 1.837.867 2.435.269l.077-.077c.598-.598.477-1.688-.27-2.435Z"/>
        </svg>
      }
    </button>
  )
}

export default Burger;
