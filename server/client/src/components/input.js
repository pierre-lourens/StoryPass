import React from "react";
import { Form } from "react-bootstrap";

class Input extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            user: "",
            text: "",
        };
    }


    updateUser(event){
        this.setState({ user: event.target.value }, () => {
            
        });
    }

    updateText(event){
        this.setState({ text: event.target.value }, () => {
          
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event)
    }

    render (){ 
        return (
        <div>
            <Form>
                <Form.Control
                    className="tag-input shadow-sm"
                    size="md"
                    type="text"
                    placeholder="User Name"
                    value={this.state.user}
                    onChange={this.updateUser.bind(this)}
                    />
                    <br />
                <Form.Control
                    className="tag-input shadow-sm"
                    size="md"
                    type="textarea"
                    as="textarea" 
                    rows="4"
                    placeholder="Enter Text Here."
                    value={this.state.description}
                    onChange={this.updateText.bind(this)}
                />
                    <br />
                    
                    <button
                    onClick={this.handleSubmit.bind(this)}
                    id="tag-submit"
                    size="lg"
                    type="submit"
                    className="btn btn-primary btn-sm">
                    Submit
                    </button> 
            </Form>
        </div>
        );
    }
}


export default Input;
