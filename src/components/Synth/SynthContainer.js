import Attack from "./controls/Attack";
import MasterVolume from "./controls/MasterVolume";
import Play from "./controls/Play";
import PlayOnce from "./controls/PlayOnce";
import React from "react";
import Stop from "./controls/Stop";
import Sustain from "./controls/Sustain";
import WaveFormSelector from "./controls/WaveFormSelector";
import { synthStyles } from "../../styles/styles";

const SynthContainer = () => {
  return (
    <div className={synthStyles.MainContainer}>
      <div>
        <div className={synthStyles.PlayStopContainer}>
          <Play />
          <Stop />
          <PlayOnce />
        </div>
        <WaveFormSelector />
      </div>

      <MasterVolume />
      <Attack />
      <Sustain />
    </div>
  );
};

export default SynthContainer;
