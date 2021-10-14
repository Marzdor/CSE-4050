import React from "react";

const AddNote = ({ addNote }) => {
  return (
    <button style={{ margin: 5, height: 20 }} onClick={addNote}>
      Add Note
    </button>
  );
};

export default AddNote;
