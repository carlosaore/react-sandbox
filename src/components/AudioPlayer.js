import { useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);


  return (
  <>
    <div>
      <audio
        ref={audioRef}
        id='player'
        controls
        autoPlay
        muted
      >
        <source src="http://espora.org:8000/zintzilik.mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Pause</button>
    </div>
  </>
)}

export default AudioPlayer;