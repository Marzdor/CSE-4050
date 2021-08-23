import React, { useEffect } from "react";

import BasicPageContainer from "./common/BasicPageContainer";
import SynthContainer from "../components/Synth/SynthContainer";
import { initSynth } from "../redux/actions/synth";
import { pageStyles } from "../styles/styles";
import { useDispatch } from "react-redux";

const SynthPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initSynth());
  }, [dispatch]);

  return (
    <BasicPageContainer>
      <h1 className={pageStyles.PageTitle}>Synth</h1>
      <SynthContainer />
    </BasicPageContainer>
  );
};

export default SynthPage;
