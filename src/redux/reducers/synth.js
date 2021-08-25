import { createReducer } from "@reduxjs/toolkit";
import { synthActions } from "../actions/typeConstants";

const defaultSettings = {
  attackTime: 0.3,
  delayAmountGain: 0,
  delayTime: 0,
  feedback: 0,
  masterVolume: 10,
  noteLength: 0,
  releaseTime: 0.3,
  sustainLevel: 0.8,
  vibratoAmount: 0.5,
  vibratoTime: 10,
  waveForm: null,
};

const defaultState = {
  isPlaying: false,
};

const defaultReducerState = {
  delay: null,
  delayAmountGain: null,
  feedback: null,
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
    .addCase(synthActions.SET_RELEASE_TIME, (state, action) => {
      state.settings.releaseTime = action.value;
    })
    .addCase(synthActions.SET_SUSTAIN_LEVEL, (state, action) => {
      state.settings.sustainLevel = action.value;
    })
    .addCase(synthActions.SET_DELAY_MANAGERS, (state, action) => {
      state.delay = action.managers.delay;
      state.feedback = action.managers.feedback;
      state.delayAmountGain = action.managers.delayAmountGain;
    })
    .addCase(synthActions.SET_NOTE_LENGTH, (state, action) => {
      state.settings.noteLength = action.value;
    })
    .addCase(synthActions.SET_VIBRATO_AMOUNT, (state, action) => {
      state.settings.vibratoAmount = action.value;
    })
    .addCase(synthActions.SET_VIBRATO_TIME, (state, action) => {
      state.settings.vibratoTime = action.value;
    })
    .addCase(synthActions.SET_DELAY_AMOUNT, (state, action) => {
      state.settings.delayAmountGain = action.value;
    })
    .addCase(synthActions.SET_DELAY_TIME, (state, action) => {
      state.settings.delayTime = action.value;
    })
    .addCase(synthActions.SET_FEEDBACK, (state, action) => {
      state.settings.feedback = action.value;
    });
});

export default synthReducer;
