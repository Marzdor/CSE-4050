import "react-dropdown/style.css";

import { useDispatch, useSelector } from "react-redux";

import Dropdown from "react-dropdown";
import React from "react";
import { dropDownSelectorStyles } from "../../../styles/styles";
import { setWaveForm } from "../../../redux/actions/synth";
import waveForms from "../../../enums/waveForms";

const WaveFormSelector = () => {
  const dispatch = useDispatch();
  const selectedWaveForm = useSelector(
    (state) => state.synth.settings.waveForm
  );

  return (
    <Dropdown
      className={dropDownSelectorStyles.MainContainer}
      controlClassName={dropDownSelectorStyles.Control}
      placeholderClassName={dropDownSelectorStyles.Placeholder}
      menuClassName={dropDownSelectorStyles.Menu}
      arrowClosed={<span className={dropDownSelectorStyles.ArrowClosed} />}
      arrowOpen={<span className={dropDownSelectorStyles.ArrowOpen} />}
      options={Object.values(waveForms)}
      onChange={(option) => dispatch(setWaveForm(option.value))}
      value={selectedWaveForm}
      placeholder="Select an option"
    />
  );
};

export default WaveFormSelector;
