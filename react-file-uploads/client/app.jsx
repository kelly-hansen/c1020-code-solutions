import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/api/uploads', {
      method: 'POST',
      body: formData
    })
      .then(res => {
        console.log(res.body);
        event.target.reset();
      })
      .catch(err => console.error(err));
    /**
     * - prevent the browser from performing default form submission behavior
     * - create a new FormData object, passing in the event.target
     * - send a POST request to /api/uploads with the form data as the body
     *   no additional headers or fetch configuration is needed
     * - log the response body to the console
     * - reset the form
     * - catch any promise rejection
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-4">
            <h3 className="text-center mb-5">React File Uploads</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="caption" className="form-label">
                  Caption
                </label>
                <input
                  required
                  autoFocus
                  id="caption"
                  type="text"
                  name="caption"
                  className="form-control bg-light" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <input required type="file" name="image" />
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
