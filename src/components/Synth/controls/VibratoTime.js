import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeVibratoTime } from "../../../redux/actions/synth";

const VibratoTime = () => {
  const dispatch = useDispatch();
  const vibratoTime = useSelector((state) => state.synth.settings.vibratoTime);

  return (
    <BasicSlider
      value={vibratoTime}
      label="Vibrato Time"
      onChange={(value) => dispatch(changeVibratoTime(value))}
    />
  );
};

export default VibratoTime;
