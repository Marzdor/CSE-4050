import Dropdown from "react-dropdown";
import React from "react";
import { dropDownSelectorStyles } from "../../../styles/styles";

const NoteSelector = ({ selectedNote, setNote, deleteNote, index }) => {
  const notes = [
    { label: "C", value: 261.63 },
    { label: "C#", value: 277.18 },
    { label: "D", value: 293.66 },
    { label: "D#", value: 311.13 },
    { label: "E", value: 329.63 },
    { label: "F", value: 349.23 },
    { label: "F#", value: 369.99 },
    { label: "G", value: 392.0 },
    { label: "G#", value: 415.3 },
    { label: "A", value: 440 },
    { label: "A#", value: 466.16 },
    { label: "B", value: 493.88 },
    { label: "C", value: 523.25 },
  ];

  return (
    <div style={{ margin: 5, display: "flex", alignItems: "center" }}>
      <Dropdown
        // className={dropDownSelectorStyles.MainContainer}
        // controlClassName={dropDownSelectorStyles.Control}
        // placeholderClassName={dropDownSelectorStyles.Placeholder}
        // menuClassName={dropDownSelectorStyles.Menu}
        arrowClosed={<span className={dropDownSelectorStyles.ArrowClosed} />}
        arrowOpen={<span className={dropDownSelectorStyles.ArrowOpen} />}
        options={notes}
        onChange={(option) => setNote({ selected: option, index })}
        value={selectedNote}
        placeholder="Select"
      />
      <button
        style={{
          color: "red",
          border: "1px solid red",
          padding: 5,
          marginLeft: 5,
          height: 30,
        }}
        onClick={() => deleteNote({ index })}
      >
        X
      </button>
    </div>
  );
};

export default NoteSelector;
