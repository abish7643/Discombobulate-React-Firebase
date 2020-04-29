import React, { Component } from 'react';
//import withFirebase from '../Firebase'

const INITIAL_STATE = {
    answerInput: '',
    error: null,
  };
  
  class ChallengeAnswerInput extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
      const { answerInput } = this.state;
      console.log(answerInput)
      
    };
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(this.state.answerInput)
    };
    render() {
      const { answerInput, error } = this.state;
      const isInvalid = answerInput === '';
      return (
        <form onSubmit={this.onSubmit} className="formcontainer">
          <div className="form__group field">
            <input type="input"
            className="form__field"
            name="answerInput"
            value={this.state.answerInput}
            onChange={this.onChange}
            type="text"
            placeholder="Answer"
            required />
            <label for="name" className="form__label">Enter Answer</label>
          </div>
          <button disabled={isInvalid} className="button__form__submit" type="submit">Crack</button>
          <div className="error__div">{error && <p className="error__div__text">{error.message}</p>}</div>
        </form>
      );
    }
  }

  export default ChallengeAnswerInput;