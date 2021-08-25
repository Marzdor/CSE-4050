import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeNoteLength } from "../../../redux/actions/synth";

const NoteLength = () => {
  const dispatch = useDispatch();
  const noteLength = useSelector((state) => state.synth.settings.noteLength);

  return (
    <BasicSlider
      value={noteLength}
      range={{ min: 0, max: 2 }}
      step={0.05}
      label="Note Length"
      onChange={(value) => dispatch(changeNoteLength(value))}
    />
  );
};

export default NoteLength;
