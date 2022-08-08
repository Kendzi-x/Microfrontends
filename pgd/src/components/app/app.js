import React from 'react';

// import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-group">
        <label className="list-group-item d-flex gap-2">
          <input className="form-check-input flex-shrink-0"
                 type="checkbox"
                 defaultChecked={ true } />
          <span>
            First checkbox
            <small className="d-block text-muted">Lorem ipsum dolor sit amet, consectetur.</small>
          </span>
        </label>

        <label className="list-group-item d-flex gap-2">
          <input className="form-check-input flex-shrink-0" type="checkbox" />
          <span>
            Second checkbox
            <small className="d-block text-muted">Lorem ipsum dolor sit amet, consectetur.</small>
          </span>
        </label>

        <label className="list-group-item d-flex gap-2">
          <input className="form-check-input flex-shrink-0" type="checkbox" />
          <span>
            Third checkbox
            <small className="d-block text-muted">Lorem ipsum dolor sit amet, consectetur.</small>
          </span>
        </label>
      </div>
    );
  }
}

export default App;
