import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [display, setDisplay] = useState<string>("");

  return (
    <div id="drum-machine">
      <div id="keys">
        <DrumKey id="boom" letter="Q" name="Boom" setDisplay={setDisplay} />
        <DrumKey id="clap" letter="W" name="Clap" setDisplay={setDisplay} />
        <DrumKey id="hihat" letter="E" name="Hi-hat" setDisplay={setDisplay} />
        <DrumKey id="kick" letter="A" name="Kick" setDisplay={setDisplay} />
        <DrumKey id="openhat" letter="S" name="Open" setDisplay={setDisplay} />
        <DrumKey id="ride" letter="D" name="Ride" setDisplay={setDisplay} />
        <DrumKey id="snare" letter="Z" name="Snare" setDisplay={setDisplay} />
        <DrumKey id="tink" letter="X" name="Tink" setDisplay={setDisplay} />
        <DrumKey id="tom" letter="C" name="Tom" setDisplay={setDisplay} />
      </div>

      <div id="display">{display}</div>
    </div>
  );
};

type DrumKeyProps = {
  id: string;
  name: string;
  letter: string;
  setDisplay: (name: string) => void;
};

const DrumKey = ({ id, name, letter, setDisplay }: DrumKeyProps) => {
  const audio = useRef<HTMLAudioElement>(null);

  const handleKeyPush = useCallback(() => {
    audio.current?.play().catch(() => {});
    setDisplay(name);
  }, [audio, setDisplay, name]);

  useEffect(() => {
    const playAudioIfKeyMatchesLetter = (e: KeyboardEvent) =>
      e.key.toUpperCase() === letter && handleKeyPush();

    document.addEventListener("keypress", playAudioIfKeyMatchesLetter);
    return () =>
      document.removeEventListener("keypress", playAudioIfKeyMatchesLetter);
  }, [letter, handleKeyPush]);

  return (
    <button
      id={id}
      className="drum-pad"
      data-sound={name}
      onClick={handleKeyPush}
    >
      {letter}
      <audio
        ref={audio}
        id={letter}
        src={`/sounds/${id}.wav`}
        className="clip"
      />
    </button>
  );
};

export default App;
