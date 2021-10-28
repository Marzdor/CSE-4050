import React, { useState } from "react";

import AddNote from "./AddNote";
import NoteSelector from "./NoteSelector";
import { parseJsonString } from "../../../helperFunctions/jsonHelper";
import { playPattern } from "../../../redux/actions/synth";
import { saveAs } from "file-saver";
import { synthStyles } from "../../../styles/styles";
import { useDispatch } from "react-redux";

const NotePattern = () => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);

  const addEmptyNote = () => {
    const newNotes = [...notes, ""];
    setNotes(newNotes);
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

  const exportPattern = () => {
    const jsonObj = parseJsonString(JSON.stringify({ pattern: notes }));
    const blob = new Blob([jsonObj], { type: "json;charset=utf-8" });
    saveAs(blob, "Pattern.zPat");
  };

  const importPattern = (event) => {
    const fileList = event.target.files;
    const file = fileList[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");

      reader.onload = function (evt) {
        const data = JSON.parse(evt.target.result);
        setNotes(data.pattern);
      };
      reader.onerror = function (evt) {
        console.log("error");
      };
    }
  };

  return notes.length ? (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-around", margin: 20 }}
      >
        <AddNote addNote={addEmptyNote} />
        <button onClick={() => dispatch(playPattern(notes))}>
          play pattern
        </button>
        <button onClick={exportPattern}>export pattern</button>
        <input type="file" accept=".zPat" onChange={importPattern} />
      </div>
      <div
        className={synthStyles.MainContainer}
        style={{
          border: "1px solid red",
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          overflowY: "scroll",
          height: 400,
          justifyContent: "center",
          alignContent: "flex-start",
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
    </div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "white" }}>Create Note Pattern</h1>
      <button onClick={() => addEmptyNote()}>Start</button>
    </div>
  );
};

export default NotePattern;
