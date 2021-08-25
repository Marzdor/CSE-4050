import { useDispatch, useSelector } from "react-redux";

import BasicButton from "../../BasicButton";
import React from "react";
import buttonStyles from "../../../enums/buttonStyles";
import { stopSound } from "../../../redux/actions/synth";

const Stop = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.synth.state.isPlaying);

  return (
    <BasicButton
      text="Stop"
      buttonStyle={buttonStyles.DANGER}
      onClick={() => dispatch(stopSound())}
      disabled={!isPlaying}
    />
  );
};

export default Stop;
