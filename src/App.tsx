import React from "react";

const App = () => (
  <div id="drum-machine">
    <div id="keys">
      <DrumKey id="boom" letter="Q" name="Boom" />
      <DrumKey id="clap" letter="W" name="Clap" />
      <DrumKey id="hihat" letter="E" name="Hi-hat" />
      <DrumKey id="kick" letter="A" name="Kick" />
      <DrumKey id="openhat" letter="S" name="Open hat" />
      <DrumKey id="ride" letter="D" name="Ride" />
      <DrumKey id="snare" letter="Z" name="Snare" />
      <DrumKey id="tink" letter="X" name="Tink" />
      <DrumKey id="tom" letter="C" name="Tom" />
    </div>

    <div id="display" />
  </div>
);

type DrumKeyProps = {
  id: string;
  name: string;
  letter: string;
};

const DrumKey = ({ id, name, letter }: DrumKeyProps) => (
  <button id={id} className="drum-pad" data-sound={name}>
    {letter}
    <audio id={letter} src={`/public/sounds/${id}.wav`} className="clip" />
  </button>
);

export default App;
