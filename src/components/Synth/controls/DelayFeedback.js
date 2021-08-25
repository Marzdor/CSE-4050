import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeFeedback } from "../../../redux/actions/synth";

const DelayFeedback = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.synth.settings.feedback);

  return (
    <BasicSlider
      value={feedback}
      range={{ min: 0, max: 0.9 }}
      step={0.05}
      label="Delay Feedback"
      onChange={(value) => dispatch(changeFeedback(value))}
    />
  );
};

export default DelayFeedback;
