import { saveSettings, selectSavedSlot } from "../../../redux/actions/synth";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const SaveSettings = ({ index }) => {
  const dispatch = useDispatch();
  const { savedSettings, activeSlot } = useSelector(
    (state) => state.synth.state
  );
  const selectedWaveForm = useSelector(
    (state) => state.synth.settings.waveForm
  );
  const slotSettings = savedSettings[index];
  const hasSettings = Object.entries(slotSettings).length;
  const isActiveSlot = activeSlot === index;
  const disabled = selectedWaveForm === null;

  const getButtonText = () => {
    const slot = `Slot ${index}`;
    if (hasSettings && isActiveSlot) return `Replace\n${slot}`;
    if (!hasSettings && isActiveSlot) return `Save\n${slot}`;

    return `Select\n${slot}`;
  };

  const handleClick = () => {
    if (disabled) return;

    if (isActiveSlot) {
      dispatch(saveSettings({ index }));
    } else {
      dispatch(selectSavedSlot({ index }));
    }
  };

  const getSlotStyle = () => {
    let style = {
      height: 50,
      borderRadius: 4,
      border: "1px solid #999999",
      cursor: "pointer",
      margin: 5,
      position: "relative",
      textAlign: "center",
      color: "#ffffff",
    };

    if (activeSlot === index) {
      style = { ...style, backgroundColor: "#999999" };
    }

    if (disabled) {
      style = { ...style, opacity: 0.3, cursor: "not-allowed" };
    }

    return style;
  };

  return (
    <div style={getSlotStyle()} onClick={handleClick}>
      {getButtonText()}
    </div>
  );
};

export default SaveSettings;
