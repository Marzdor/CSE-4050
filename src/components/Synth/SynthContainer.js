import Attack from "./controls/Attack";
import DelayAmount from "./controls/DelayAmount";
import DelayFeedback from "./controls/DelayFeedback";
import DelayTime from "./controls/DelayTime";
import MasterVolume from "./controls/MasterVolume";
import NoteLength from "./controls/NoteLength";
import Pads from "./controls/Pads.";
import Play from "./controls/Play";
import PlayOnce from "./controls/PlayOnce";
import React from "react";
import Stop from "./controls/Stop";
import Sustain from "./controls/Sustain";
import VibratoAmount from "./controls/VibratoAmount";
import VibratoTime from "./controls/VibratoTime";
import WaveFormSelector from "./controls/WaveFormSelector";
import { synthStyles } from "../../styles/styles";

const SynthContainer = () => {
  return (
    <div className={synthStyles.MainContainer}>
      <div className={synthStyles.ControlContainer}>
        <div>
          <div className={synthStyles.PlayStopContainer}>
            <Play />
            <Stop />
            <PlayOnce />
          </div>
          <WaveFormSelector />
        </div>

        <MasterVolume />
      </div>
      <div className={synthStyles.ControlContainer}>
        <Attack />
        <Sustain />
        <NoteLength />

        <VibratoAmount />
        <VibratoTime />

        <DelayTime />
        <DelayAmount />
        <DelayFeedback />
      </div>
      <Pads />
    </div>
  );
};

export default SynthContainer;
