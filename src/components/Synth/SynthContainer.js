import Attack from "./controls/Attack";
import DelayAmount from "./controls/DelayAmount";
import DelayFeedback from "./controls/DelayFeedback";
import DelayTime from "./controls/DelayTime";
import MasterVolume from "./controls/MasterVolume";
import NoteLength from "./controls/NoteLength";
import NotePattern from "./notePattern/NotePattern";
import Pads from "./controls/Pads";
import React from "react";
import Release from "./controls/Release";
import SaveSettings from "./controls/SaveSettings";
import Sustain from "./controls/Sustain";
import VibratoAmount from "./controls/VibratoAmount";
import VibratoTime from "./controls/VibratoTime";
import WaveFormSelector from "./controls/WaveFormSelector";
import { synthStyles } from "../../styles/styles";
import { useSelector } from "react-redux";

const SynthContainer = () => {
  const { savedSettings } = useSelector((state) => state.synth.state);

  return (
    <>
      <div className={synthStyles.MainContainer}>
        <div>
          <div style={{ display: "flex" }}>
            {savedSettings.map((slot, index) => (
              <SaveSettings key={`Saved slot ${index}`} index={index} />
            ))}
          </div>
          <WaveFormSelector />
          <MasterVolume />
        </div>
        <div className={synthStyles.ControlContainer}>
          <Attack />
          <Sustain />
          <Release />
          <NoteLength />
        </div>
        <div className={synthStyles.ControlContainer}>
          <VibratoAmount />
          <VibratoTime />
        </div>
        <div className={synthStyles.ControlContainer}>
          <DelayTime />
          <DelayAmount />
          <DelayFeedback />
        </div>
        <Pads />
      </div>
      <NotePattern />
    </>
  );
};

export default SynthContainer;
