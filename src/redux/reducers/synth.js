import { createReducer } from "@reduxjs/toolkit";
import { synthActions } from "../actions/typeConstants";

const defaultSettings = {
  waveForm: null,
  masterVolume: 10,
  attackTime: 0.3,
  sustainLevel: 0.8,
  releaseTime: 0.3,
};

const defaultState = {
  isPlaying: false,
};

const defaultReducerState = {
  manager: null,
  masterVolume: null,
  oscillator: null,
  settings: { ...defaultSettings },
  state: { ...defaultState },
};

const synthReducer = createReducer({ ...defaultReducerState }, (builder) => {
  builder
    .addCase(synthActions.CREATE_MANAGER, (state, action) => {
      if (state.manager === null) state.manager = action.manager;
    })
    .addCase(synthActions.CREATE_MASTER_VOLUME, (state, action) => {
      if (state.masterVolume === null) {
        state.masterVolume = action.masterVolume;
      }
    })
    .addCase(synthActions.CREATE_OSCILLATOR, (state, action) => {
      if (state.oscillator === null) {
        state.oscillator = action.oscillator;
      }
    })
    .addCase(synthActions.SET_WAVE_FORM, (state, action) => {
      state.settings.waveForm = action.waveForm;
    })
    .addCase(synthActions.PLAY, (state, action) => {
      state.state.isPlaying = true;
    })
    .addCase(synthActions.STOP, (state, action) => {
      state.state.isPlaying = false;
    })
    .addCase(synthActions.DELETE_OSCILLATOR, (state, action) => {
      delete state.oscillator;
      state.oscillator = null;
    })
    .addCase(synthActions.SET_MASTER_VOLUME, (state, action) => {
      state.settings.masterVolume = action.value;
    })
    .addCase(synthActions.SET_ATTACK_VALUE, (state, action) => {
      state.settings.attackTime = action.value;
    })
    .addCase(synthActions.SET_SUSTAIN_LEVEL, (state, action) => {
      state.settings.sustainLevel = action.value;
    });
});

export default synthReducer;
