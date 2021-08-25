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
      label="Delay Feedback"
      onChange={(value) => dispatch(changeFeedback(value))}
    />
  );
};

export default DelayFeedback;
