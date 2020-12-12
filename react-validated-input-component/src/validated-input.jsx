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

    return (
      <form>
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password} />
          <i className="fas fa-check"></i>
        </div>
        <label htmlFor="password" name="validation">Validation</label>
      </form>
    );
  }
}

export default ValidatedInput;
