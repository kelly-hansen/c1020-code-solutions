import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
