import './MiniPlayer.css'
import {useRef} from 'react';

type MiniPlayerProps = {
  src: string;
};

const MiniPlayer: React.FC<MiniPlayerProps> = ({src}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <button className="mini-player" onClick={handlePlay}>
        <svg className="mini-player__icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
          <path d="M16.778 2.908a1.1 1.1 0 0 1 1.554-.086A10.981 10.981 0 0 1 22 11.025c0 3.26-1.419 6.19-3.668 8.203a1.1 1.1 0 0 1-1.468-1.64 8.78 8.78 0 0 0 2.935-6.563 8.78 8.78 0 0 0-2.935-6.563 1.1 1.1 0 0 1-.086-1.554Zm-2.042 3.935a1.1 1.1 0 0 1 1.541.22 6.579 6.579 0 0 1 1.32 3.962 6.579 6.579 0 0 1-1.32 3.963 1.1 1.1 0 1 1-1.76-1.322c.553-.736.88-1.649.88-2.641s-.327-1.905-.88-2.64a1.1 1.1 0 0 1 .22-1.542Z"/>
          <path d="M10.222 1.017a1.65 1.65 0 0 1 1.447.515l.012.013.015.017c.15.17.246.364.307.575.04.138.064.28.079.44l.004.047c.015.19.02.36.02.777v15.307c-.001.403-.005.565-.022.757-.014.172-.039.323-.081.47a1.477 1.477 0 0 1-.322.592 1.65 1.65 0 0 1-1.46.528 1.478 1.478 0 0 1-.626-.249 2.34 2.34 0 0 1-.342-.287l-.033-.033a9.617 9.617 0 0 1-.54-.617l-3.067-3.68c-.283-.338-.377-.441-.463-.515a1.099 1.099 0 0 0-.37-.192l-.022-.006c-.095-.026-.226-.035-.636-.037h-.135l-1.292-.001c-.302 0-.464-.004-.624-.017l-.03-.002-.02-.002a2.164 2.164 0 0 1-.82-.219 2.202 2.202 0 0 1-.961-.962 2.124 2.124 0 0 1-.215-.772l-.002-.027A6.49 6.49 0 0 1 0 12.825V9.303c.001-.32.006-.49.023-.668.028-.299.091-.553.217-.8.21-.414.548-.75.962-.961.239-.122.485-.185.772-.215l.028-.002a6.49 6.49 0 0 1 .611-.023h1.385c.517-.002.653-.01.756-.037l.004-.001a1.1 1.1 0 0 0 .383-.19l.022-.02c.091-.08.201-.205.538-.61l3.037-3.643c.254-.303.36-.423.494-.559.122-.123.237-.223.363-.308.188-.128.393-.216.627-.25ZM9.905 17.9V4.171L7.309 7.286c-.383.458-.513.6-.725.782a3.302 3.302 0 0 1-1.254.653l-.056.015c-.326.083-.561.097-1.27.099H2.67c-.22 0-.343.004-.43.01l-.026.002-.002.02c-.007.089-.01.21-.01.435v3.467c0 .22.003.342.01.43l.002.025.032.003c.087.006.202.01.418.01h1.358c.701.001.954.018 1.307.113a3.3 3.3 0 0 1 1.255.654l.035.03c.192.169.328.32.69.752l2.596 3.115Z"/>
        </svg>
      </button>
      <audio ref={audioRef} src={src} preload="auto"></audio>
    </>
  );
};

export default MiniPlayer;
