import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { getBasicPadStyle } from "../helperFunctions/basicPadHelper";
import { playSoundOnce } from "../redux/actions/synth";

const BasicPad = ({ label, noteValue, ...props }) => {
  const dispatch = useDispatch();
  const selectedWaveForm = useSelector(
    (state) => state.synth.settings.waveForm
  );
  const disabled = selectedWaveForm === null;

  const padPressed = () => {
    dispatch(playSoundOnce(noteValue));
  };

  return (
    <div
      className={getBasicPadStyle({ disabled })}
      onClick={!disabled ? padPressed : null}
    >
      <p>{label}</p>
    </div>
  );
};

export default BasicPad;
