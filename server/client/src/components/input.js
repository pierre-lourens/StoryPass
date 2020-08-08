import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { storeText } from "../actions";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      text: "",
    };
  }

  updateUser = (event) => {
    this.setState({ userName: event.target.value }, () => {});
  };

  updateText = (event) => {
    this.setState({ text: event.target.value }, () => {});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // make API call to store text
    this.props.storeText(this.state);
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Control
            className='tag-input shadow-sm'
            size='md'
            type='text'
            placeholder='User Name'
            value={this.state.user}
            onChange={this.updateUser}
          />
          <br />
          <Form.Control
            className='tag-input shadow-sm'
            size='md'
            type='textarea'
            as='textarea'
            rows='4'
            placeholder='Enter Text Here.'
            value={this.state.description}
            onChange={this.updateText}
          />
          <br />

          <button
            onClick={this.handleSubmit}
            id='tag-submit'
            size='lg'
            type='submit'
            className='btn btn-primary btn-sm'>
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ storeText }, dispatch);
}

export default connect(null, mapDispatchToProps)(Input);
