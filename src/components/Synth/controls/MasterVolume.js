import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeMasterVolume } from "../../../redux/actions/synth";

const MasterVolume = () => {
  const dispatch = useDispatch();
  const masterVolume = useSelector(
    (state) => state.synth.settings.masterVolume
  );

  return (
    <BasicSlider
      value={masterVolume}
      label="Master Volume"
      onChange={(value) => dispatch(changeMasterVolume(value))}
    />
  );
};

export default MasterVolume;
