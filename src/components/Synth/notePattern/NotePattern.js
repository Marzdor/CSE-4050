import React, { useState } from "react";

import AddNote from "./AddNote";
import NoteSelector from "./NoteSelector";
import { playPattern } from "../../../redux/actions/synth";
import { synthStyles } from "../../../styles/styles";
import { useDispatch } from "react-redux";

const NotePattern = () => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);

  const addEmptyNote = () => {
    setNotes([...notes, ""]);
  };

  const setNote = ({ selected, index }) => {
    const newNotes = [...notes];
    newNotes[index] = selected;
    setNotes(newNotes);
  };

  const deleteNote = ({ index }) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return notes.length ? (
    <>
      <AddNote addNote={addEmptyNote} />
      <button onClick={() => dispatch(playPattern(notes))}>play pattern</button>
      <div
        className={synthStyles.MainContainer}
        style={{
          // position: "relative",
          border: "1px solid red",
          display: "flex",
          flexWrap: "wrap",
          overflowY: "scroll",
          maxHeight: "30%",
          alignItems: "center",
        }}
      >
        {notes.map((note, index) => (
          <NoteSelector
            selectedNote={note}
            setNote={setNote}
            deleteNote={deleteNote}
            index={index}
          />
        ))}
      </div>
    </>
  ) : (
    <div>
      <h1 style={{ color: "white" }}>Create Note Pattern</h1>
      <button onClick={() => addEmptyNote()}>Start</button>
    </div>
  );
};

export default NotePattern;
