import React, { useRef } from 'react';

type MiniPlayerProps = {
  src: string;
};

const MiniPlayer: React.FC<MiniPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="mini-player">
      <button onClick={handlePlay} className="mini-player__button">
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.7412 4.01253C19.3612 5.33253 20.4 7.34628 20.4 9.60003C20.4 11.8538 19.3612 13.8675 17.7412 15.1875C17.355 15.5025 16.7887 15.4425 16.4737 15.0563C16.1587 14.67 16.2187 14.1038 16.605 13.7888C17.8237 12.7988 18.6 11.2913 18.6 9.60003C18.6 7.90878 17.8237 6.40128 16.605 5.40753C16.2187 5.09253 16.1625 4.52628 16.4737 4.14003C16.785 3.75378 17.355 3.69753 17.7412 4.00878V4.01253ZM15.4725 6.80628C16.2787 7.46628 16.8 8.47128 16.8 9.60003C16.8 10.7288 16.2787 11.7338 15.4725 12.3938C15.0862 12.7088 14.52 12.6488 14.205 12.2625C13.89 11.8763 13.95 11.31 14.3362 10.995C14.7412 10.665 15 10.1625 15 9.60003C15 9.03753 14.7412 8.53503 14.3362 8.20128C13.95 7.88628 13.8937 7.32003 14.205 6.93378C14.5162 6.54753 15.0862 6.49128 15.4725 6.80253V6.80628ZM11.2912 1.30503C11.7225 1.50003 12 1.92753 12 2.40003V16.8C12 17.2725 11.7225 17.7 11.2912 17.895C10.86 18.09 10.3537 18.0113 10.0012 17.6963L4.9425 13.2H2.4C1.07625 13.2 0 12.1238 0 10.8V8.40003C0 7.07628 1.07625 6.00003 2.4 6.00003H4.9425L10.0012 1.50378C10.3537 1.18878 10.86 1.11378 11.2912 1.30503Z"
            fill="black"/>
        </svg>

      </button>
      <audio ref={audioRef} src={src} preload="auto"></audio>
    </div>
  );
};

export default MiniPlayer;
