import BasicPad from "../../BasicPad";
import React from "react";
import { synthStyles } from "../../../styles/styles";

const Pads = () => {
  const notes = [
    { note: "C", octave: 4, value: 261.63 },
    { note: "C#", octave: 4, value: 277.18 },
    { note: "D", octave: 4, value: 293.66 },
    { note: "D#", octave: 4, value: 311.13 },
    { note: "E", octave: 4, value: 329.63 },
    { note: "F", octave: 4, value: 349.23 },
    { note: "F#", octave: 4, value: 369.99 },
    { note: "G", octave: 4, value: 392.0 },
    { note: "G#", octave: 4, value: 415.3 },
    { note: "A", octave: 4, value: 440 },
    { note: "A#", octave: 4, value: 466.16 },
    { note: "B", octave: 4, value: 493.88 },
    { note: "C", octave: 5, value: 523.25 },
  ];

  return (
    <div className={synthStyles.PadContainer}>
      {notes.map((note) => {
        return (
          <BasicPad
            key={note.note}
            label={`${note.note}${note.octave}`}
            noteValue={note.value}
          />
        );
      })}
    </div>
  );
};

export default Pads;
