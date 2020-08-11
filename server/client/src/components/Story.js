import React from "react";
import { bindActionCreators } from "redux";
import { getStory } from "../actions";
import { connect } from "react-redux";

class Story extends React.Component {
  componentDidMount() {
    this.props.getStory();
  }

  componentDidUpdate(prevProps) {
    // whenever new text is stored, updates in redux state is updated
    if (this.props.updates !== prevProps.updates) {
      this.props.getStory();
    }
  }

  renderStory = () => {

      return this.props.story.map((entry, index) => {
        return (
          <React.Fragment key={index}>
          {entry.text}
          <br />
        </React.Fragment>
      );
    });
  
  };

  render() {
    console.log("this.props.story is", this.props.story);
    return (
      <React.Fragment>
        <h1>Story</h1>
        {this.renderStory()}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.story,
    updates: state.updates,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getStory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Story);
