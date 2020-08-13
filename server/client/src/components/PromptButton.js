import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRandomPrompt } from "../actions";

const PromptButton = ({ getRandomPrompt }) => {
  const handleClick = () => {
    getRandomPrompt();
  };

  return <button onClick={handleClick}>Get random prompt</button>;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRandomPrompt }, dispatch);
}

export default connect(null, mapDispatchToProps)(PromptButton);
