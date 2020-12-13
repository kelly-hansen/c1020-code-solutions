import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    const password = this.state.password;
    let validIcon;
    let validText;
    if (password.length === 0) {
      validIcon = 'fa-times red';
      validText = 'A password is required.';
    } else if (password.length < 8) {
      validIcon = 'fa-times red';
      validText = 'Your password is too short.';
    } else {
      const regexLetters = /[A-Z]/;
      const regexNumbers = /\d/;
      const regexSpecial = /[!@#$%^&*((]/;
      if (regexLetters.test(password) && regexNumbers.test(password) && regexSpecial.test(password)) {
        validIcon = 'fa-check green';
        validText = '';
      } else {
        validIcon = 'fa-times red';
        validText = 'Must contain a capital letter, a digit, and a special character (!, @, #, $, %, ^, &, *, (, or ))';
      }
    }

    return (
      <form>
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password} />
          <i className={`fas ${validIcon}`}></i>
        </div>
        <label htmlFor="password" name="validation">{validText}</label>
      </form>
    );
  }
}

export default ValidatedInput;
