import { useDispatch, useSelector } from "react-redux";

import BasicSlider from "../../BasicSlider";
import React from "react";
import { changeAttackValue } from "../../../redux/actions/synth";
import { decimalToPercent } from "../../../helperFunctions/mathHelper";

const Attack = () => {
  const dispatch = useDispatch();
  const attackTime = useSelector((state) => state.synth.settings.attackTime);

  return (
    <BasicSlider
      value={decimalToPercent(attackTime)}
      label="Attack"
      onChange={(value) => dispatch(changeAttackValue(value))}
    />
  );
};

export default Attack;
