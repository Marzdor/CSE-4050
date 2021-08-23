import Play from "./controls/Play";
import React from "react";
import Stop from "./controls/Stop";
import WaveFormSelector from "./controls/WaveFormSelector";
import { synthStyles } from "../../styles/styles";

const SynthContainer = () => {
  return (
    <div className={synthStyles.SynthMainContainer}>
      <div style={{ width: "30%" }}>
        <Play />
        <Stop />
        <WaveFormSelector />
      </div>
    </div>
  );
};

export default SynthContainer;
