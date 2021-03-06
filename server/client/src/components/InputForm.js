import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { storeText } from "../actions";
import Styled from "styled-components";
import Timer from "react-compound-timer";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      text: "",
      timeLeft: true,
    };
  }

  updateUser = (event) => {
    this.setState({ userName: event.target.value }, () => { });
  };

  updateText = (event) => {
    this.setState({ text: event.target.value }, () => { });
  };

  handleSubmit = (event) => {
    console.log(this.state);

    //check if text field is empty
    if (this.state.text && this.state.userName) {
      // make API call to store text
      this.props.storeText(this.state);
      this.setState({ text: "" });
      alert("Time's up!");
    } else {
      alert("Username or text field empty");
    }
  };

  render() {
    return (
      <Timer
      // for testing (uncomment to set timer to 5 seconds)
        // initialTime={5000}
        initialTime={60000 * 3}
        direction='backward'
        startImmediately={false}
        onStart={() => {
          console.log("Timer start");
        }}
        checkpoints={[
          {
            time: 0,
            callback: () => {
              console.log("Times up");
              this.handleSubmit();
              this.setState({ timeLeft: false })
            },
          },
        ]}>
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <FormContainer>
              <Form
                onSubmit={(event) => {
                  event.preventDefault();
                }}>
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
                  value={this.state.text}
                  onChange={this.updateText}
                  onKeyPress={start}
                />
                <br />

                <TimerBox>
                  <span>Time Remaining: </span>
                  <Timer.Minutes />
                  <span> minutes </span>
                  <Timer.Seconds />
                  <span> seconds </span>
                </TimerBox>

                {/* When timer runs out, render reset button, else show submit button */}
                {this.state.timeLeft === false ? (
                  <FormButton
                    id="reset-timer-button"
                    onClick={() => {
                      reset();
                      this.setState({ timeLeft: true })
                    }}
                  >
                    Reset
                  </FormButton>
                ) : (
                  <FormButton
                    onClick={this.handleSubmit}
                    id='tag-submit'
                  >
                    Submit
                  </FormButton>
                )}

              </Form>
            </FormContainer>

          </React.Fragment>
        )}
      </Timer>
    );
  }
}

//Styles

const FormContainer = Styled.div`
width: 50%;
margin: 20px auto;
text-align: right;
`;

const FormButton = Styled.button`
  size='lg'
  type='button'
  className='btn btn-primary btn-sm'
`;

const TimerBox = Styled.div`
display: inline-block;
float: left;
padding: 7px;
text-align: left;
border: 1px solid #cd4905;
border-radius: 5px;
`;

//example:
// const Poster = styled.img`
//   box-shadow: 0 0 30px white;
//   &:hover {
//     transform: scale(1.06);
//     transition-duration: 300ms;
//   }
// `;

//Redux

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ storeText }, dispatch);
}

export default connect(null, mapDispatchToProps)(Input);
