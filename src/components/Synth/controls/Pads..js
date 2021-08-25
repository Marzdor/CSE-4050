import BasicPad from "../../BasicPad";
import React from "react";
import { synthStyles } from "../../../styles/styles";

const Pads = () => {
  const notes = {
    C4: 261.63,
    Db4: 277.18,
    D4: 293.66,
    Eb4: 311.13,
    E4: 329.63,
    F4: 349.23,
    Gb4: 369.99,
    G4: 392.0,
    Ab4: 415.3,
    A4: 440,
    Bb4: 466.16,
    B4: 493.88,
    C5: 523.25,
  };
  return (
    <div className={synthStyles.PadContainer}>
      {Object.entries(notes).map((note) => (
        <BasicPad key={note[0]} label={note[0]} noteValue={note[1]} />
      ))}
    </div>
  );
};

export default Pads;
