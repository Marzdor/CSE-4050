import { useDispatch, useSelector } from "react-redux";

import BasicButton from "../../BasicButton";
import React from "react";
import buttonStyles from "../../../enums/buttonStyles";
import { playSound } from "../../../redux/actions/synth";

const Play = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.synth.state.isPlaying);

  return (
    <BasicButton
      text="Play"
      buttonStyle={buttonStyles.SUCCESS}
      onClick={() => dispatch(playSound())}
      disabled={isPlaying}
    />
  );
};

export default Play;
