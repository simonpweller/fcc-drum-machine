import React from "react";

const App = () => (
  <div id="drum-machine">
    <div id="keys">
      <button id="boom-key" className="drum-pad" data-sound="Boom">
        Q <audio id="Q" src="/public/sounds/boom.wav" className="clip" />
      </button>
      <button id="clap-key" className="drum-pad" data-sound="Clap">
        W <audio id="W" src="/public/sounds/clap.wav" className="clip" />
      </button>
      <button id="hihat-key" className="drum-pad" data-sound="Hi-hat">
        E <audio id="E" src="/public/sounds/hihat.wav" className="clip" />
      </button>
      <button id="kick-key" className="drum-pad" data-sound="Kick">
        A <audio id="A" src="/public/sounds/kick.wav" className="clip" />
      </button>
      <button id="openhat-key" className="drum-pad" data-sound="Open hat">
        S <audio id="S" src="/public/sounds/openhat.wav" className="clip" />
      </button>
      <button id="ride-key" className="drum-pad" data-sound="Ride">
        D <audio id="D" src="/public/sounds/ride.wav" className="clip" />
      </button>
      <button id="snare-key" className="drum-pad" data-sound="Snare">
        Z <audio id="Z" src="/public/sounds/snare.wav" className="clip" />
      </button>
      <button id="tink-key" className="drum-pad" data-sound="Tink">
        X <audio id="X" src="/public/sounds/tink.wav" className="clip" />
      </button>
      <button id="tom-key" className="drum-pad" data-sound="Tom">
        C <audio id="C" src="/public/sounds/tom.wav" className="clip" />
      </button>
    </div>

    <div id="display" />
  </div>
);

export default App;
