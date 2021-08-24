import MasterVolume from "./controls/MasterVolume";
import Play from "./controls/Play";
import React from "react";
import Stop from "./controls/Stop";
import WaveFormSelector from "./controls/WaveFormSelector";
import { synthStyles } from "../../styles/styles";

const SynthContainer = () => {
  return (
    <div className={synthStyles.MainContainer}>
      <div>
        <div className={synthStyles.PlayStopContainer}>
          <Play />
          <Stop />
        </div>
        <WaveFormSelector />
      </div>

      <MasterVolume />
    </div>
  );
};

export default SynthContainer;
