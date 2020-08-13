import { connect } from "react-redux";

const Prompt = ({ currentPrompt }) => {
  return currentPrompt.prompt || "No prompt selected";
};

function mapStateToProps(state) {
  return { currentPrompt: state.prompt };
}

export default connect(mapStateToProps)(Prompt);
