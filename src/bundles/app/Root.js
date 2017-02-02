import React, { Component, PropTypes } from 'react';

import './styles';

import { getData } from './lib/api';

class Root extends Component {
  state = {};

  componentDidMount() {
    getData(1).then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="root">
        <div className="root__navbar">
          navbar
        </div>
        <div className="root__content">
          <div className="container">
            <div className="row">
              <div className="col-9">
                content
              </div>
              <div className="col-3">
                sidebar
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
